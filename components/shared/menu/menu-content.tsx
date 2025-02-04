import { ChevronRightIcon } from "lucide-react";
import MenuDivider from "./menu-divider";
import MenuTrigger, { MenuTriggerProps } from "./menu-trigger";
import {
  MY_ARTICLE_PAGE,
  ORDER_HISTORY_PAGE,
  POINT_PAGE,
  ARTIST_REGISTER_PAGE,
  NOTICE_LIST_PAGE,
  DELIVERY_HISTORY_PAGE,
  SERVICE_TERMS_PAGE,
  PERSONAL_INFO_TERMS_PAGE,
  FAQ_PAGE,
  KAKAO_CHANEL_PAGE,
} from "@/constants/path";
import Link from "next/link";
import { User } from "@/app/api/dto/user";
import { DrawerFooter } from "@/components/ui/drawer";
import PrimitiveAuthButton from "../button/primitive-auth-button";

const MenuContent = ({
  user,
  handleClose,
}: {
  user: User;
  handleClose: () => void;
}) => {
  const MENU_LIST: MenuTriggerProps[] = [
    {
      type: "point",
      title: "포인트",
      link: POINT_PAGE,
      point: user.pointBalance,
    },
    { type: "normal", title: "구매 내역", link: ORDER_HISTORY_PAGE },
    { type: "normal", title: "배송 내역", link: DELIVERY_HISTORY_PAGE },
    { type: "normal", title: "공지사항", link: NOTICE_LIST_PAGE },
    {
      type: "external",
      title: "자주 묻는 질문",
      link: FAQ_PAGE,
    },
    { type: "external", title: "1:1 문의", link: KAKAO_CHANEL_PAGE },
    { type: "external", title: "서비스 이용약관", link: SERVICE_TERMS_PAGE },
    {
      type: "external",
      title: "개인정보 처리방침",
      link: PERSONAL_INFO_TERMS_PAGE,
    },
    { type: "lang", title: "언어", link: null },
  ];
  return (
    <div className="overflow-y-auto overflow-x-hidden pb-[80px] web:pb-0">
      <div className="bg-primary">
        <Link
          href={
            user.isArtistRegistered
              ? `${MY_ARTICLE_PAGE}${user.artistId}`
              : ARTIST_REGISTER_PAGE
          }
          className="flex h-[56px] w-full items-center justify-between bg-primary px-4 text-white heading-5"
        >
          <span>
            {user.isArtistRegistered ? "내 작품 공간" : "작가 등록하기"}
          </span>
          <ChevronRightIcon className="size-6" />
        </Link>
      </div>
      {MENU_LIST.map((menu) => (
        <div className="flex flex-col" key={menu.title}>
          <MenuTrigger
            title={menu.title}
            type={menu.type}
            link={menu.link}
            point={menu.point}
          />
          {(menu.title === "공지사항" || menu.title === "언어") && (
            <MenuDivider />
          )}
        </div>
      ))}
      <DrawerFooter className="px-4">
        <PrimitiveAuthButton onClose={handleClose} type="logout" />
      </DrawerFooter>
    </div>
  );
};
export default MenuContent;
