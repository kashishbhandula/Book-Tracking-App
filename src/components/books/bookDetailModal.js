import Modal from "../../genricComponents/modal";

export default function BookDetailModal({ openBookModal, setOpenBookModal }) {
  const bookDetail = openBookModal;
  if (!openBookModal) return;

  return (
    <Modal openModal={openBookModal} setOpenModal={setOpenBookModal}>
      <>
        <div className="book_details_modal">
          <a href={bookDetail?.infoLink} target="_blank">
            <img
              className="book_thumbnail"
              src={bookDetail?.imageLinks?.thumbnail}
              alt="Book cover"
            />
          </a>
          <p>
            {bookDetail?.description} {bookDetail?.description}{" "}
            {bookDetail?.description} {bookDetail?.description}{" "}
          </p>
        </div>
      </>
    </Modal>
  );
}
