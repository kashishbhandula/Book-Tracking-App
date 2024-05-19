import { useState } from "react";
import BookCard from "../../genricComponents/bookCard";
import useBooksData from "../../hooks/useBooksData";
import BookDetailModal from "./bookDetailModal";
import { useSelector } from "react-redux";
import Loader from "../../genricComponents/loader";
export default function AllBooks({ isGrid }) {
  const [booksDetail] = useBooksData();
  const [openBookModal, setOpenBookModal] = useState();
  const isSearching = useSelector((state) => state.books.isSearching);
  return (
    <div
      className={`all_books ${isGrid ? "all_books_grid" : "all_books_list"}`}
    >
      {booksDetail?.items?.map((bookDetail) => (
        <div
          onClick={() => {
            setOpenBookModal(bookDetail?.volumeInfo);
          }}
          key={bookDetail?.id}
        >
          <BookCard bookDetail={bookDetail?.volumeInfo} id={bookDetail?.id} />
        </div>
      ))}
      <BookDetailModal
        openBookModal={openBookModal}
        setOpenBookModal={setOpenBookModal}
      />
     {isSearching && <Loader />}
    </div>
  );
}
