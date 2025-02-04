import { usePathname, useRouter } from "next/navigation";
import CharacterModal from "./character-modal";
import { LOGIN_PAGE } from "@/constants/path";
import { useEffect } from "react";

const LoginModal = ({ onClickClose }: { onClickClose: () => void }) => {
  const currentPath = usePathname();
  const router = useRouter();

  // 로그인 버튼 핸들러
  const onClickLogin = () => {
    router.push(LOGIN_PAGE);
  };

  useEffect(() => {
    // 모달이 열리면 body 스크롤을 막음
    document.body.style.overflow = "hidden";

    // 모달이 닫히면 body 스크롤을 다시 허용
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []); // 모달이 열릴 때 한 번만 실행

  // 현재 경로를 로컬스토리지에 저장
  useEffect(() => {
    if (currentPath) {
      localStorage.setItem("nextPath", currentPath);
    }
  }, [currentPath]);

  return (
    <CharacterModal
      align="bottom"
      title="가입만 해도 첫 배송 무료!"
      desc={`지금 회원가입하면\n구매한 상품을 무료로 배송받을 수 있어요.`}
      onClickConfirm={onClickLogin}
      onClickClose={onClickClose}
      buttonText="회원가입하고 혜택받기"
    />
  );
};
export default LoginModal;
