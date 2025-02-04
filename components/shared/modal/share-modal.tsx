import { Button } from "@/components/ui/button";
import { SHARE_ARTWORK_PAGE } from "@/constants/path";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
import Link from "next/link";

const ShareModal = ({
  onClickClose,
  artworkId,
  type,
}: {
  onClickClose: () => void;
  artworkId: string;
  type: "notification" | "feed";
}) => {
  const typePath = type === "feed" ? "artwork" : "notice";
  const shareUrl = `${SHARE_ARTWORK_PAGE}/${typePath}/${artworkId}`;
  const xShareUrl = `https://x.com/intent/post?text=${shareUrl}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer?u=${shareUrl}`;

  // 클립보드 핸들러
  const handleCopyToClipboard = async () => {
    try {
      await window.navigator.clipboard.writeText(shareUrl);
      toast({
        title: "클립보드에 복사되었어요 :)",
        icon: "light",
      });
    } catch {
      alert("링크 복사에 실패했습니다.");
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/70 px-5">
      <div className="relative flex w-full max-w-[350px] flex-col gap-6 rounded-lg bg-white px-4 py-5">
        <p className="subtitle-1">공유하기</p>
        <div className="flex justify-center gap-6 px-4">
          <Link
            target="_blank"
            href={xShareUrl}
            className="mt-auto flex h-[69px] w-20 flex-col items-center justify-between"
          >
            <Image
              src={"/png/icon/x.png"}
              alt="X(twitter)"
              width={40}
              height={38}
            />
            <p className="text-black/60 subtitle-2">X</p>
          </Link>
          <Link
            target="_blank"
            href={facebookShareUrl}
            className="flex h-[73px] w-20 flex-col items-center justify-between"
          >
            <Image
              src={"/png/icon/facebook.png"}
              alt="facebook"
              width={44}
              height={44}
            />
            <p className="text-black/60 subtitle-2">페이스북</p>
          </Link>
          <button
            onClick={handleCopyToClipboard}
            className="flex h-[73px] w-20 flex-col items-center justify-between"
          >
            <Image
              src={"/png/icon/clipboard.png"}
              alt="clipboard"
              width={46}
              height={46}
            />
            <p className="text-black/60 subtitle-2">링크 복사</p>
          </button>
        </div>
        <Button onClick={onClickClose} variant={"outline-gray"}>
          닫기
        </Button>
      </div>
    </div>
  );
};
export default ShareModal;
