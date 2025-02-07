"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[700px] flex-col items-center justify-center">
      <p className="heading-1">Wisdomhub</p>
      <div className="my-5 flex gap-5 heading-4">
        <Link href={"/privacy-policy"}>개인정보 처리방침</Link>
        <Link href={"/service-terms"}>서비스 이용약관</Link>
      </div>
      <div className="flex gap-4">
        <Image src={"/1.png"} width={200} height={544} alt="위즈덤허브" />
        <Image src={"/2.png"} width={200} height={544} alt="위즈덤허브" />
      </div>
      <Image
        src={"/simji.png"}
        alt="심지 사업자 등록증"
        width={400}
        height={700}
      />
    </div>
  );
}
