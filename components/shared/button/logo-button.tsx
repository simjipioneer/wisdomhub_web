"use client";

import { SERVICE_NAME } from "@/constants/service";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LogoButton = () => {
  const router = useRouter();

  // 로고 클릭 핸들러
  const onClickLogo = () => {
    router.push("/");
  };
  return (
    <button onClick={onClickLogo}>
      <h1 className="flex justify-center">
        <span className="sr-only">{SERVICE_NAME}</span>
        <Image
          className="web:h-6 web:w-[120px]"
          src={"/svg/logo/logo.svg"}
          alt={SERVICE_NAME}
          width={90}
          height={18}
        />
      </h1>
    </button>
  );
};
export default LogoButton;
