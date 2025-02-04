import { Button } from "@/components/ui/button";

interface OneButtonModalProps {
  title: string;
  desc: string;
  onClickConfirm: () => void;
  buttonText: string;
  primaryText?: string;
}

const OneButtonModal = ({
  title,
  desc,
  buttonText,
  onClickConfirm,
  primaryText,
}: OneButtonModalProps) => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/70 px-5">
      <div className="flex w-full max-w-[350px] flex-col gap-6 rounded-lg bg-white px-4 pb-5 pt-8">
        <div className="flex flex-col gap-2 text-center">
          <p className="flex items-center justify-center gap-1 heading-3">
            {primaryText && (
              <span className="text-primary heading-3">{primaryText}</span>
            )}
            {title}
          </p>
          <div className="text-[#5A5A5A] body-2">{desc}</div>
        </div>

        <Button
          loadColor="white"
          variant={"outline-gray"}
          onClick={onClickConfirm}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
export default OneButtonModal;
