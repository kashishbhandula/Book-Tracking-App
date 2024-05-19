import BookCard from "../../genricComponents/bookCard";
import { useSelector } from "react-redux";
import useBooksData from "../../hooks/useBooksData";
export default function MyBooks({ isGrid }) {
  const [booksDetail] = useBooksData();
  const myCollection = useSelector((state) => state.user.collection);
  return (
    <div
      className={`all_books ${isGrid ? "all_books_grid" : "all_books_list"}`}
    >
      {booksDetail?.items
        ?.filter((bookDetail) => myCollection.includes(bookDetail.id))
        .map((bookDetail) => (
          <BookCard
            bookDetail={bookDetail?.volumeInfo}
            key={bookDetail?.id}
            id={bookDetail?.id}
          />
        ))}
    </div>
  );
}
