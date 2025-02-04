"use client";

import Image from "next/image";
import { HamburgerMenu } from "./menu/hamburger-menu";
import PrimitiveAuthButton from "./button/primitive-auth-button";
import { useRouter } from "next/navigation";
import LogoButton from "./button/logo-button";
import { ReactNode } from "react";
import useGetUserInfo from "@/hooks/auth/use-get-user-info";
import { LoadIcon } from "./loading/loading";
import { ARTIST_SEARCH_PAGE } from "@/constants/path";

interface PrimaryHeaderProps {
  type: "primary";
}

interface SecondaryHeaderProps {
  type: "secondary";
  text: string; // 헤더 텍스트
  align: "left" | "center"; // 텍스트 정렬
  onClick?: () => void; // 이전 페이지 클릭 핸들러
}

type HeaderProps = {
  props: PrimaryHeaderProps | SecondaryHeaderProps;
  children?: ReactNode;
};

const Header = ({ props, children }: HeaderProps) => {
  const { type } = props;
  const router = useRouter();
  const user = useGetUserInfo();

  // 뒤로 가기 버튼 핸들러
  const onClickBack = () => {
    router.back();
  };

  // Primary Header
  if (type === "primary") {
    return (
      <header className="fixed inset-x-0 top-0 z-[2] w-screen min-w-full overflow-x-hidden bg-white">
        <div className="flex h-[56px] items-center justify-between px-5 web:mx-auto web:h-[72px] web:max-w-[600px]">
          <LogoButton />
          <div className={`flex items-center ${user ? "gap-6" : "gap-4"}`}>
            <button
              className="focus-visible:outline-none"
              onClick={() => router.push(ARTIST_SEARCH_PAGE)}
            >
              <Image
                src={"/svg/icon/search.svg"}
                alt={"검색 돋보기 아이콘"}
                width={24}
                height={24}
              />
            </button>
            {user ? (
              <HamburgerMenu user={user} />
            ) : user === undefined ? (
              <div className="relative min-w-[24px]">
                <LoadIcon type="button" color="white" />
              </div>
            ) : (
              <PrimitiveAuthButton type="login" />
            )}
          </div>
        </div>
      </header>
    );
  }

  // Secondary Header
  return (
    <header className="fixed inset-x-0 top-0 z-[2] w-screen min-w-full overflow-x-hidden bg-white">
      <div className=" flex items-center gap-2 px-3 py-4 web:mx-auto web:h-[84px] web:max-w-[600px] web:px-5">
        <button onClick={props.onClick ? props.onClick : onClickBack}>
          <Image
            src={"/svg/icon/chevron-left.svg"}
            alt={"뒤로가기 아이콘"}
            width={24}
            height={24}
          />
        </button>
        <h1
          className={`heading-4 web:heading-3 ${props.align === "left" ? "" : "mx-auto mr-[calc(42%)]"}`}
        >
          {props.text}
        </h1>
        {children}
      </div>
    </header>
  );
};
export default Header;
