import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { searchSvg } from "../../svg";
import { useDispatch } from "react-redux";
import { updateSearch } from "../../store/books";
export default function SearchBox({ city, setCity, loader }) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState();
  const searchDebounce = useDebounce(search);
  useEffect(() => {
    dispatch(updateSearch(searchDebounce));
  }, [searchDebounce]);
  return (
    <>
      <div className="search_box">
        <input
          value={city}
          className="search_box_input"
          placeholder="Search Books..."
          disabled={loader}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search_icon">{searchSvg}</div>
      </div>
    </>
  );
}
