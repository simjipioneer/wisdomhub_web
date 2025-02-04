import { DrawerClose, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import Avatar from "../avatar";
import { XIcon } from "lucide-react";
import { User } from "@/app/api/dto/user";
import { useRouter } from "next/navigation";
import { MY_INFO_PAGE } from "@/constants/path";

interface MenuHeaderProps {
  user: User;
}

const MenuHeader = ({ user }: MenuHeaderProps) => {
  const router = useRouter();

  // 닉네임 클릭 핸들러
  const onClickNickname = () => {
    router.push(MY_INFO_PAGE);
  };
  return (
    <DrawerHeader>
      <button onClick={onClickNickname} className="flex items-center gap-4">
        <Avatar
          src={user.profileImage ?? "/png/character/default-profile.png"}
          size="sm"
        />
        <DrawerTitle>{user.nickname}</DrawerTitle>
      </button>
      <DrawerClose>
        <XIcon className="size-4" />
      </DrawerClose>
    </DrawerHeader>
  );
};
export default MenuHeader;
