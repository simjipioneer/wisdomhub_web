import { Button } from "@/components/ui/button";

interface TwoButtonBarProps {
  firstBtnText: string;
  secondBtnText: string;
  onClickFirstBtn: () => void;
  onClickSecondBtn: () => void;
  isButtonDisabled?: boolean;
  loading?: boolean;
}
const TwoButtonBar = ({
  firstBtnText,
  secondBtnText,
  onClickFirstBtn,
  onClickSecondBtn,
  isButtonDisabled,
  loading,
}: TwoButtonBarProps) => {
  return (
    <div className="flex justify-between gap-2">
      <Button
        type="button"
        variant={"outline-gray"}
        className="w-[33%]"
        onClick={onClickFirstBtn}
      >
        {firstBtnText}
      </Button>
      <Button
        loading={loading}
        disabled={isButtonDisabled}
        onClick={onClickSecondBtn}
      >
        {secondBtnText}
      </Button>
    </div>
  );
};
export default TwoButtonBar;
