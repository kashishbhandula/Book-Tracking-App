import { useState } from "react";
import Modal from "../../genricComponents/modal";
import { updateUser } from "../../store/user";
import "../../styles/signUp.css";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
export default function SignIn({
  showSignInForm,
  setShowSignUpForm,
  setShowSignInForm,
}) {
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");
  const createAccount = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    if (!(email && password)) {
      setErrorMsg("All fields are mandatory");
      return;
    }
    const allUsersData = JSON.parse(localStorage.getItem("allUsersData")) || {};
    if (!allUsersData.hasOwnProperty(email)) {
      setErrorMsg("User does not exist");
      return;
    }
    if (allUsersData[email].password !== password) {
      setErrorMsg("Invalid Password");
      return;
    }
    Cookies.set("email", email, { expires: 7 });
    setShowSignInForm(false);
    dispatch(
      updateUser({ email: email, collection: allUsersData[email].collection })
    );
    setErrorMsg("");
  };
  return (
    <form onSubmit={createAccount}>
      <Modal openModal={showSignInForm} setOpenModal={setShowSignInForm}>
        <>
          <h4 className="sign_up_txt">Sign In</h4>
          <input
            name="email"
            className="sign_up_box_inp"
            placeholder="Enter Email"
          />
          <input
            name="password"
            className="sign_up_box_inp"
            placeholder="Enter Password"
          />
          {errorMsg && <span className="error_msg">{errorMsg}</span>}
          <button type="submit" className="sign_up_box_btn">
            Login
          </button>
          <span
            className="already_have_account"
            onClick={() => {
              setShowSignInForm(false);
              setShowSignUpForm(true);
            }}
          >
            Create an account.
          </span>
        </>
      </Modal>
    </form>
  );
}
