import { Button } from "@/components/ui/button";
import LoginModal from "../modal/login-modal";

interface PrimitivePayButtonProps {
  onClick: () => void; // 클릭 핸들러
  onClickClose: () => void; // 모달 닫기 핸들러
  modal: { login: boolean; point: boolean }; // 모달 노출 여부
  disabled?: boolean; // 버튼 비활성화 여부
}

const PrimitivePayButton = ({
  onClick,
  onClickClose,
  modal,
  disabled,
}: PrimitivePayButtonProps) => {
  return (
    <>
      {modal.login && <LoginModal onClickClose={onClickClose} />}
      <Button
        disabled={disabled}
        onClick={onClick}
        size={"outline-lg"}
        variant={"outline-gray"}
      >
        출력하기
      </Button>
    </>
  );
};
export default PrimitivePayButton;
