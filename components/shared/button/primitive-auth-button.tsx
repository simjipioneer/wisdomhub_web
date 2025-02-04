"use client";
import { LOGIN_PAGE } from "@/constants/path";
import { usePostLogout } from "@/hooks/auth/use-post-logout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface PrimitiveAuthButtonProps {
  type: "login" | "logout" | "kakao" | "google";
  onClose?: () => void;
}

const PrimitiveAuthButton = ({ type }: PrimitiveAuthButtonProps) => {
  const router = useRouter();
  const onSuccess = () => (window.location.href = "/"); // 로그아웃 성공 핸들러
  const { onSubmit } = usePostLogout(onSuccess); // 로그아웃 훅

  if (type === "login") {
    return (
      <Link href={LOGIN_PAGE} className="px-2 text-primary heading-5">
        로그인
      </Link>
    );
  }

  if (type === "kakao") {
    const onClickKakao = () => {
      const REDIRECT_URI =
        process.env.NODE_ENV === "development"
          ? process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI_DEV
          : process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI_PROD;
      const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
      const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
      router.push(url);
    };

    return (
      <button
        onClick={onClickKakao}
        className="flex h-[50px] items-center justify-center gap-[10px] rounded-lg bg-[#FFE402] subtitle-1"
      >
        <Image
          src={"/png/icon/kakao.png"}
          alt="카카오톡"
          width={24}
          height={22}
        />
        카카오 계정으로 시작하기
      </button>
    );
  }

  if (type === "google") {
    const REDIRECT_URI =
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI_DEV
        : process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI_PROD;

    // 구글 로그인 핸들러
    const onClickGoogle = () => {
      const googleUrl = `${process.env.NEXT_PUBLIC_GOOGLE_END_POINT}?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;
      window.location.href = googleUrl;
    };
    return (
      <button
        onClick={onClickGoogle}
        className="flex h-[50px] items-center justify-center gap-[10px] rounded-lg border border-[#E0E0E2] subtitle-1"
      >
        <Image src={"/png/icon/google.png"} alt="구글" width={28} height={29} />
        구글 계정으로 시작하기
      </button>
    );
  }

  // 로그아웃 핸들러
  const onClickLogout = () => {
    onSubmit();
  };
  return (
    <button
      onClick={onClickLogout}
      className="w-max text-gray-400 subtitle-2 web:mb-4"
    >
      로그아웃
    </button>
  );
};

export default PrimitiveAuthButton;
