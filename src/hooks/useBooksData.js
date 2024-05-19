import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateBooks, updateIsSearching } from "../store/books";
import {useSelector} from "react-redux"
export default function useBooksData() {
  const [booksDetail, setBookDetail] = useState();
  const search = useSelector((state)=>state.books.search)
  const dispatch = useDispatch();
  const updateBooksDataHandler = (data) => {
    dispatch(updateBooks(data));
    setBookDetail(data);
  };
  const getBooksList = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        updateBooksDataHandler(res);
        dispatch(updateIsSearching(false));
      });
  };
  useEffect(() => {
    getBooksList();
  }, [search]);
  return [booksDetail, updateBooksDataHandler];
}
