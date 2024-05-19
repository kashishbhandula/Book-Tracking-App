import { useState, useEffect } from "react";
import { ellisisVertial } from "../svg";
import Cookies from "js-cookie";
import "../styles/bookCard.css";
import { useDispatch } from "react-redux";
import { updateCollection } from "../store/user";

export default function BookCard({ bookDetail, id }) {
  const [showOption, setShowOption] = useState(false);
  const dispatch = useDispatch();
  const [isBookInCollection, setIsBookInCollection] = useState(false);
  const allUsersData = JSON.parse(localStorage.getItem("allUsersData")) || {};
  const email = Cookies.get("email");

  const addBookToCollection = (e) => {
    if (!email) return;
    const collection = allUsersData[email].collection;
    if (isBookInCollection) {
      const index = collection.indexOf(id);
      allUsersData[email].collection.splice(index, 1);
    } else {
      allUsersData[email].collection.push(id);
    }
    const newAllUsersData = JSON.stringify(allUsersData);
    localStorage.setItem("allUsersData", newAllUsersData);
    dispatch(updateCollection(allUsersData[email].collection));
    setIsBookInCollection(!isBookInCollection);
    e.stopPropagation();
  };

  useEffect(() => {
    if (allUsersData[email]?.collection.includes(id)) {
      setIsBookInCollection(true);
    }
  }, [allUsersData, email, id]);

  return (
    <div className="book_card">
      <div
        className="ellisis_container"
        onMouseEnter={() => setShowOption(true)}
        onMouseLeave={() => setShowOption(false)}
      >
        <span className="ellisis_vertial_svg">{ellisisVertial}</span>
        {showOption && (
          <div className="book_options">
            <div className="option" onClick={addBookToCollection}>
              {isBookInCollection
                ? "Remove from collection"
                : "Add to collection"}
            </div>
            <div className="option">Buy Now</div>
            <div className="option">Share Book</div>
          </div>
        )}
      </div>
      <img
        className="book_thumbnail"
        src={bookDetail?.imageLinks?.thumbnail}
        alt="Book cover"
      />
      <div className="book_details">
        <div className="detail_item">
          <span className="title">Title:</span>
          <span className="detail">{bookDetail?.title}</span>
        </div>
        <div className="detail_item">
          <span className="title">Authors:</span>
          <span className="detail">Pokeman</span>
        </div>
        <div className="detail_item">
          <span className="title">Genres:</span>
          <span className="detail">{bookDetail?.authors?.join(", ")}</span>
        </div>
      </div>
    </div>
  );
}
