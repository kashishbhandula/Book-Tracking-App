import { useState } from "react";
import MyBooks from "./myBooks";
import ListGridSwitch from "../../genricComponents/listGridSwitch";
import "../../styles/myCollection.css";
export default function MyCollection() {
  const [isGrid, setIsGrid] = useState(true);
  return (
    <>
      <h1 className="my_collection_txt">My Collection</h1>
      <div className="list_grid_switch_container">
        <ListGridSwitch isGrid={isGrid} setIsGrid={setIsGrid} />
      </div>

      <MyBooks isGrid={isGrid} />
    </>
  );
}
