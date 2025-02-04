import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import Image from "next/image";

interface TwoButtonModalProps {
  title?: string;
  content?: string;
  children?: React.ReactNode;
  firstButtonText: string;
  secondButtonText: string;
  onClickConfirm: () => void;
  onClickClose: () => void;
  buttonType?: "default" | "outline";
  loading?: boolean;
  characterType?:
    | "primary"
    | "order"
    | "delivery"
    | "mute"
    | "surprised"
    | "trash-can";
  loadColor?: "red" | "white";
  primaryText?: string;
}

const TwoButtonModal = ({
  title,
  content,
  firstButtonText,
  secondButtonText,
  onClickClose,
  onClickConfirm,
  children,
  loading,
  characterType,
  buttonType = "outline",
  loadColor = "red",
  primaryText,
}: TwoButtonModalProps) => {
  useEffect(() => {
    // 모달이 열리면 body 스크롤을 막음
    document.body.style.overflow = "hidden";

    // 모달이 닫히면 body 스크롤을 다시 허용
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []); // 모달이 열릴 때 한 번만 실행

  return (
    <div className="fixed inset-0 z-20 flex items-center bg-black/70 px-5">
      <div className="relative mx-auto flex w-full max-w-[350px] flex-col items-center gap-6 rounded-lg bg-white px-4 pb-5 pt-8">
        {characterType && (
          <Image
            src={`/png/character/${characterType}.svg`}
            alt="티티 마스코트"
            width={142}
            height={142}
            className="size-[142px]"
          />
        )}
        <div className="flex flex-col items-center gap-2 text-center">
          {title && (
            <p className="flex items-center justify-center gap-1 heading-3">
              {primaryText && (
                <span className="text-primary heading-3">{primaryText}</span>
              )}
              {title}
            </p>
          )}
          {children ? (
            children
          ) : (
            <p className="text-[#5A5A5A] body-2">{content}</p>
          )}
        </div>
        <div className="relative z-20 flex w-full gap-2">
          <Button type="button" onClick={onClickClose} variant={"outline-gray"}>
            {firstButtonText}
          </Button>
          <Button
            type="button"
            className="relative"
            variant={buttonType}
            onClick={onClickConfirm}
            loading={loading}
            loadColor={loadColor}
          >
            {secondButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default TwoButtonModal;
