import { useDeleteNotice } from "@/hooks/notice/use-delete-notice";
import TwoButtonModal from "./two-button-modal";
import { useDeleteArtwork } from "@/hooks/feed/use-delete-artwork";

interface DeleteModalProps {
  type: "feed" | "notification";
  modal: { share: boolean; report: boolean; delete: boolean };
  setModal: (modal: {
    share: boolean;
    report: boolean;
    delete: boolean;
  }) => void;
  id: string;
}

const DeleteModal = ({ type, modal, setModal, id }: DeleteModalProps) => {
  const onSuccess = () => {
    setModal({ ...modal, delete: false });
    window.location.reload();
  };

  const { onDeleteNotice, loading } = useDeleteNotice(onSuccess);
  const { onDeleteArtwork, loading: loading2 } = useDeleteArtwork(onSuccess);

  // 삭제 핸들러
  const onClickDelete = async () => {
    if (type === "feed") {
      onDeleteArtwork(id);
    } else onDeleteNotice(id);
  };
  return (
    <TwoButtonModal
      title={type === "feed" ? "작품을 삭제할까요?" : "공지를 삭제할까요?"}
      content="삭제한 게시물은 다시 복구할 수 없어요."
      firstButtonText="닫기"
      secondButtonText="삭제하기"
      onClickClose={() => setModal({ ...modal, delete: false })}
      onClickConfirm={onClickDelete}
      characterType="trash-can"
      loading={loading || loading2}
      loadColor="white"
    />
  );
};
export default DeleteModal;
