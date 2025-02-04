"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CharacterModalProps {
  title: string;
  desc: string;
  buttonText: string;
  onClickConfirm: () => void;
  onClickClose: () => void;
  align: "top" | "bottom";
}

const CharacterModal = ({
  title,
  desc,
  buttonText,
  align,
  onClickClose,
  onClickConfirm,
}: CharacterModalProps) => {
  // 모달 바깥 클릭 핸들러
  const onClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClickClose();
    }
  };
  return (
    <div
      onClick={onClickOutside}
      className="fixed inset-0 z-10 flex items-center justify-center bg-black/70 px-5"
    >
      <div className="flex min-h-[354px] w-full max-w-[350px] flex-col gap-6 rounded-lg bg-white px-4 py-5">
        <div
          className={`flex gap-3 ${align === "bottom" ? "flex-col-reverse" : "flex-col"}`}
        >
          <div className="flex flex-col gap-2 text-center">
            <p className="heading-3">{title}</p>
            <p className="text-[#5A5A5A] body-2">{desc}</p>
          </div>
          <Image
            className="mx-auto size-[180px]"
            src={"/png/character/primary.svg"}
            alt="책을 읽는 프린티 마스코트"
            width={180}
            height={180}
          />
        </div>

        <Button onClick={onClickConfirm}>{buttonText}</Button>
      </div>
    </div>
  );
};
export default CharacterModal;
