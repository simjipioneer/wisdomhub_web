import { Dispatch, SetStateAction } from "react";
import { SORTIES } from "@/app/(home)/_components/feed/feed-container"; // SORTIES enum을 import
import Image from "next/image";

interface FilterBoxProps {
  sort: SORTIES; // 필터 상태
  setSort: Dispatch<SetStateAction<SORTIES>>; // 필터 상태 변경 함수
}

const FilterDrawer = ({ sort, setSort }: FilterBoxProps) => {
  // 정렬 선택 핸들러
  const onClickSort = (newSort: SORTIES) => {
    setSort(newSort);
  };

  const buttons = [
    { type: SORTIES.LATEST, label: "최신순" },
    { type: SORTIES.POPULAR, label: "인기순" },
    { type: SORTIES.ENDING_SOON, label: "임박순" },
  ];

  return (
    <div className="flex justify-end gap-4 py-3 subtitle-3 web:gap-6 web:py-4 web:subtitle-1">
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
  );
};

export default FilterDrawer;
