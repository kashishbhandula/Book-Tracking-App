import "../../styles/signUp.css";
import Cookies from "js-cookie";
import "../../styles/signUp.css";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/user";
import Modal from "../../genricComponents/modal";
import { useState } from "react";
export default function SignUp({
  showSignUpForm,
  setShowSignUpForm,
  setShowSignInForm,
}) {
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const createAccount = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const re_password = e.target.re_password.value.trim();
    if (!(email && password && re_password)) {
      setErrorMsg("All fields are mandatory");
return;
    }
    const allUsersData = JSON.parse(localStorage.getItem("allUsersData")) || {};
    if (allUsersData.hasOwnProperty(email)) {
      setErrorMsg("User already exist");
      return;
    }
    if (password !== re_password) {
      setErrorMsg("Password do not match");
      return;
    }
    allUsersData[email] = { password: password, collection: [] };
    localStorage.setItem("allUsersData", JSON.stringify(allUsersData));
    Cookies.set("email", email, { expires: 7 });
    dispatch(updateUser({ email: email, collection: [] }));
    setShowSignUpForm(false);
    setErrorMsg("");
  };
  return (
    <form onSubmit={createAccount}>
      <Modal openModal={showSignUpForm} setOpenModal={setShowSignUpForm}>
        <>
          <h4 className="sign_up_txt">Sign Up</h4>
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
          <input
            name="re_password"
            className="sign_up_box_inp"
            placeholder="Enter Password Again"
          />
          {errorMsg && <span className="error_msg">{errorMsg}</span>}
          <button type="submit" className="sign_up_box_btn">
            Create account
          </button>
          <span
            className="already_have_account"
            onClick={() => {
              setShowSignInForm(true);
              setShowSignUpForm(false);
            }}
          >
            Already Have a account?
          </span>
        </>
      </Modal>
    </form>
  );
}
