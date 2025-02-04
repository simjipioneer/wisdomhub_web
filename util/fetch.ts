import {
  AUTH_GOOGLE_CALLBACK_PAGE,
  AUTH_KAKAO_CALLBACK_PAGE,
  LOGIN_PAGE,
} from "@/constants/path";

export class CustomError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = "CustomError";
  }
}

// postRefresh 함수는 새로운 accessToken을 받아오는 함수
const postRefresh = async () => {
  const refreshToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("refreshToken="))
    ?.split("=")[1];
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/refresh`,
    {
      method: "POST",
      body: JSON.stringify({ refreshToken }),
    },
  );

  if (!response.ok) {
    // 쿠키 만료 시키기
    document.cookie = `accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    document.cookie = `refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;

    if (
      window.location.pathname !== AUTH_KAKAO_CALLBACK_PAGE &&
      window.location.pathname !== AUTH_GOOGLE_CALLBACK_PAGE
    ) {
      // 로컬 스토리지 유저 정보 삭제
      localStorage.removeItem("user");
      localStorage.setItem("nextPath", window.location.pathname);
      window.location.href = LOGIN_PAGE;
    }
    throw new Error("토큰 재발급에 실패했습니다.");
  }

  const data = await response.json();
  document.cookie = `accessToken=${data.accessToken}; path=/`; // 새 토큰을 쿠키에 저장
  return data.accessToken;
};

export const apiFetch = async (url: string, options: RequestInit = {}) => {
  const getAccessTokenFromCookie = () => {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken="))
      ?.split("=")[1];
  };

  let token = getAccessTokenFromCookie();
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const fullUrl = `${baseUrl}${url}`;

  const fetchWithToken = async (token: string | undefined) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    };
    const fetchOptions = { ...options, headers };

    return fetch(fullUrl, fetchOptions);
  };

  try {
    let response = await fetchWithToken(token);

    // 401 Unauthorized 처리
    if (response.status === 401) {
      // accessToken이 만료되었다고 가정하고, refresh token으로 새 토큰 발급 시도
      try {
        token = await postRefresh();
        response = await fetchWithToken(token); // 새 토큰으로 재시도
      } catch (refreshError) {
        console.error(refreshError);
        throw refreshError;
      }
    }

    if (!response.ok) {
      const errorMessage = await response.text();
      const errorData: CustomError = {
        name: "CustomError",
        statusCode: response.status,
        message: errorMessage || "error!!",
      };
      throw errorData;
    }

    if (response.status === 204 || !response.headers.get("Content-Length")) {
      return null;
    }

    return await response.json();
  } catch (error) {
    if (typeof error === "object" && error !== null && "statusCode" in error) {
      throw error as CustomError;
    }
    console.error("Fetch error:", error);
    throw new Error("API 호출 중 알 수 없는 오류가 발생했습니다."); // 알 수 없는 에러
  }
};
