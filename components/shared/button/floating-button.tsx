import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ShareModal from "../modal/share-modal";
import ReportModal from "@/app/(home)/_components/feed/report/report-modal";
import DeleteModal from "../modal/delete-modal";
import { getArtworkDetailForIdentifyingDeleted } from "@/app/api/artist";

interface FloatingButtonProps {
  isLoggedIn: boolean;
  relatedLink?: string;
  isOwner: boolean; // 작성자 여부
  type: "feed" | "notification";
  id: string;
  artistId: string;
  artworkId: string;
}

export function FloatingButton({
  isLoggedIn,
  relatedLink,
  isOwner,
  type,
  id,
  artistId,
  artworkId,
}: FloatingButtonProps) {
  const [isOpened, setIsOpened] = useState(false); // 팝오버 열림 여부
  const [modal, setModal] = useState({
    share: false,
    report: false,
    delete: false,
  }); // 모달 열림 여부

  // 스크롤 이벤트 감지 및 팝오버 닫기
  useEffect(() => {
    const handleScroll = () => {
      if (isOpened) {
        setIsOpened(false); // 스크롤이 일어나면 팝오버 닫기
      }
    };

    // 스크롤 이벤트 추가
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpened]);

  // 버튼 핸들러
  const onClickButton = async (type: "share" | "report" | "delete") => {
    // type이 share인 경우 api 호출하고 응답이 에러인 경우 모달 안 띄움
    if (type === "share") {
      const res = await getArtworkDetailForIdentifyingDeleted(artworkId);
      if (!res) return;
    }
    setModal({ ...modal, [type]: true });
    setIsOpened(false);
  };

  return (
    <Popover open={isOpened} onOpenChange={(val) => setIsOpened(val)}>
      {modal.report && (
        <ReportModal
          artistId={artistId}
          id={id}
          onClickClose={() => setModal({ ...modal, report: false })}
        />
      )}
      {modal.delete && (
        <DeleteModal id={id} modal={modal} setModal={setModal} type={type} />
      )}
      {modal.share && (
        <ShareModal
          type={type}
          onClickClose={() => setModal({ ...modal, share: false })}
          artworkId={artworkId}
        />
      )}
      <PopoverTrigger asChild>
        <button className="size-6">
          <Image
            src={"/svg/icon/dots.svg"}
            alt="더보기"
            width={24}
            height={24}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="mt-6"
        data-state={isOpened ? "open" : "closed"}
      >
        <div>
          {type === "feed" && (
            <button
              onClick={() => onClickButton("share")}
              className="flex items-center gap-3 px-3 py-4 text-black/60 subtitle-2 focus:outline-none"
            >
              <Image
                src={"/png/icon/share.png"}
                alt="공유하기"
                width={24}
                height={24}
              />
              <span>공유하기</span>
            </button>
          )}
          {relatedLink && (
            <Link
              target="_blank"
              href={relatedLink}
              className="flex items-center gap-3 px-3 py-4 text-black/60 subtitle-2"
            >
              <Image
                src={"/png/icon/clipboard-gray.png"}
                alt="링크 방문"
                width={24}
                height={24}
              />
              <span>링크 방문</span>
            </Link>
          )}
          {isLoggedIn && !isOwner && (
            <button
              onClick={() => onClickButton("report")}
              className="flex items-center gap-3 px-3 py-4 text-black/60 subtitle-2"
            >
              <Image
                src={"/svg/icon/warn.svg"}
                alt="신고하기"
                width={24}
                height={24}
              />
              <span className="text-destructive">신고하기</span>
            </button>
          )}
          {isOwner && (
            <button
              onClick={() => onClickButton("delete")}
              className="flex items-center gap-3 px-3 py-4 text-black/60 subtitle-2"
            >
              <Image
                src={"/svg/icon/trash.svg"}
                alt="삭제하기"
                width={24}
                height={24}
              />
              <span className="text-destructive">삭제하기</span>
            </button>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
