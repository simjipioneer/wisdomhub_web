import { XIcon } from "lucide-react";

const XButton = ({ onClickClose }: { onClickClose: () => void }) => {
  return (
    <button onClick={onClickClose}>
      <XIcon className="size-4" />
    </button>
  );
};
export default XButton;
