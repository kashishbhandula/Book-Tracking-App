import { gridSvg, listSvg } from "../svg";
import "../styles/listGridSwitch.css";
export default function ListGridSwitch({ isGrid, setIsGrid }) {
  const switchHandler = () => {
    setIsGrid(!isGrid);
  };
  return (
    <div className="list_svg" onClick={switchHandler}>
      {isGrid ? gridSvg : listSvg}
    </div>
  );
}
