import { DrawerClose, DrawerContent } from "@/components/ui/drawer";
import FilterHeader from "./filter-header";
import { Button } from "@/components/ui/button";

enum SORTIES {
  LATEST = "latest",
  ENDING_SOON = "ending-soon",
  POPULAR = "popular",
}

interface FilterContentProps {
  sort: string;
  onClickSort: (sort: SORTIES) => void;
  onClickConfirm: () => void;
}

const sorties = [
  { value: SORTIES.LATEST, text: "최신순" },
  { value: SORTIES.ENDING_SOON, text: "임박순" },
  { value: SORTIES.POPULAR, text: "인기순" },
];

const FilterContent = ({
  sort,
  onClickSort,
  onClickConfirm,
}: FilterContentProps) => {
  return (
    <DrawerContent className="inset-auto inset-x-0 bottom-0 z-10 rounded-t-lg px-5 pt-5 web:mx-auto web:max-w-[600px]">
      <div className="mb-10 flex flex-col gap-6">
        <FilterHeader />
        <div className="flex flex-col gap-4">
          <p className="subtitle-2 web:subtitle-1">정렬</p>
          <div className="flex gap-2 caption">
            {sorties.map((item) => (
              <Button
                onClick={() => onClickSort(item.value)}
                key={item.value}
                variant={
                  sort === item.value ? "outline-circle" : "outline-circle-gray"
                }
                size="outline-circle-sm"
              >
                {item.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <DrawerClose
        onClick={onClickConfirm}
        className="mb-10 flex h-[53px] items-center justify-center rounded-md border border-primary bg-white text-primary subtitle-1 disabled:border-black/40"
      >
        확인
      </DrawerClose>
    </DrawerContent>
  );
};
export default FilterContent;
