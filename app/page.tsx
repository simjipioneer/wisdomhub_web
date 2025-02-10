"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[800px] flex-col items-center justify-center">
      <p className="heading-1">Wisdomhub</p>
      <div className="my-5 flex gap-5 heading-4">
        <Link href={"/privacy-policy"}>개인정보 처리방침</Link>
        <Link href={"/service-terms"}>서비스 이용약관</Link>
      </div>
      <div className="flex flex-col gap-4">
        <Image src={"/1.png"} width={800} height={644} alt="위즈덤허브" />
        <Image src={"/2.png"} width={800} height={644} alt="위즈덤허브" />
      </div>
      <div className="text-[18px] font-semibold">
        <p className="my-4 bg-gray-100 text-center text-[22px] font-bold">
          서비스 소개
        </p>
        <p>- 하루 5분 셀프 리플렉션으로 쌓는 나만의 철학 서재</p>
        <p>- 하루 1개 철학 질문을 통한 사유의 시간</p>
        <p>- 응답을 공유하는 커뮤니티 기능</p>
        <p>- AI가 요약해주는 당신의 철학 사유</p>
        <p>- 구글 소셜 로그인</p>
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
