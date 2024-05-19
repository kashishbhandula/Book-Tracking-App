import { useEffect } from "react";
import "../styles/modal.css";
import { crossSvg } from "../svg";
export default function Modal({ children, openModal, setOpenModal }) {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openModal]);
  if (!openModal) return;
  return (
    <div className="overlay">
      <div className="modal_conatiner">
        {" "}
        <div className="modal">
          <>
            <div className="cross_svg" onClick={() => setOpenModal(false)}>
              {crossSvg}
            </div>
            {children}
          </>
        </div>
      </div>
    </div>
  );
}
