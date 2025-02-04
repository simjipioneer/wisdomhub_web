import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import Check from "../check";
import { SORTIES } from "@/app/(home)/_components/feed/feed-container";

interface FilterBoxProps {
  sort: SORTIES; // 필터 상태
  setSort: Dispatch<SetStateAction<SORTIES>>; // 필터 상태 변경 함수
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const SubscribeFilterDrawer = ({
  sort,
  setSort,
  setLoading,
}: FilterBoxProps) => {
  const [onlyArtwork, setOnlyArtwork] = useState(false); // 작품만 보기

  // 정렬 선택 핸들러
  const onClickSort = (newSort: SORTIES) => {
    setSort(newSort);
    setLoading(true);
  };

  // 임박순일 경우 작품만 보기 활성화
  useEffect(() => {
    if (sort === SORTIES.ENDING_SOON) {
      setOnlyArtwork(true);
    } else {
      setOnlyArtwork(false);
    }
  }, [sort]);

  // 작품만 보기 토글 핸들러
  const toggleOnlyArtwork = () => {
    setOnlyArtwork((prev) => !prev);
    if (onlyArtwork && sort === SORTIES.ENDING_SOON) {
      setSort(SORTIES.LATEST); // 임박순일 때 작품만 보기를 해제하면 기본 정렬으로 변경
    }
  };

  const renderButton = (size: "sm" | "md", className: string) => (
    <button
      disabled={sort === SORTIES.ENDING_SOON}
      onClick={toggleOnlyArtwork}
      data-state={onlyArtwork ? "on" : "off"}
      className={className}
    >
      <Check type="square" size={size} />
      <span className={onlyArtwork ? "text-primary" : "text-[#ADADAD]"}>
        작품만 보기
      </span>
    </button>
  );

  const buttons = [
    { type: SORTIES.LATEST, label: "최신순" },
    { type: SORTIES.POPULAR, label: "인기순" },
    { type: SORTIES.ENDING_SOON, label: "임박순" },
  ];

  return (
    <div className="flex justify-between py-5">
      {renderButton(
        "sm",
        "subtitle-3 flex gap-2 items-center web:hidden [&[data-state='on']_div]:border-none [&[data-state='on']_div]:bg-primary [&[data-state='on']_div_img:first-child]:hidden [&[data-state='on']_div_img:last-child]:block",
      )}
      {renderButton(
        "md",
        "hidden gap-[10px] subtitle-1 web:flex [&[data-state='on']_div]:border-none [&[data-state='on']_div]:bg-primary [&[data-state='on']_div_img:first-child]:hidden [&[data-state='on']_div_img:last-child]:block",
      )}
      <div className="flex justify-end gap-4 subtitle-3 web:gap-6 web:subtitle-1">
        {buttons.map(({ type, label }) => {
          const isActive = sort === type;
          return (
            <button
              key={type}
              className={`flex items-center gap-[5px] ${
                isActive ? "text-primary" : "text-[#ADADAD]"
              }`}
              onClick={() => onClickSort(type)}
            >
              <Image
                src={`/svg/icon/check${isActive ? "-red" : ""}.svg`}
                width={isActive ? 24 : 13}
                height={isActive ? 24 : 13}
                alt="체크 아이콘"
                className={isActive ? "mx-[-5.5px]" : ""}
              />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SubscribeFilterDrawer;
