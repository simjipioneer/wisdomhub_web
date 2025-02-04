"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[700px] flex-col items-center justify-center">
      <p className="heading-1">Wisdomhub</p>
      <div className="flex gap-4">
        <Image src={"/1.png"} width={200} height={544} alt="위즈덤허브" />
        <Image src={"/2.png"} width={200} height={544} alt="위즈덤허브" />
      </div>
      <Link href={"/"}>개인정보 처리방침</Link>
      <Link href={"/"}>서비스 이용약관</Link>
    </div>
  );
}
