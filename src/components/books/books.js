import { useState } from "react";
import logo1 from "../../assets/booksGif.gif";
import AllBooks from "./allBooks";
import ListGridSwitch from "../../genricComponents/listGridSwitch";
import SearchBox from "./searchBox";
export default function Books() {
  const [isGrid, setIsGrid] = useState(true);
  
  return (
    <>
      <img className="books_gif" src={logo1} alt="books"></img>
      <div className="search_box_container">
        <SearchBox/>
        <div className="list_grid_switch_container">
          <ListGridSwitch isGrid={isGrid} setIsGrid={setIsGrid} />
        </div>
      </div>
      <AllBooks isGrid={isGrid} />
    </>
  );
}
