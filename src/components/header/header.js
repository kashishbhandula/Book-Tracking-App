import { useEffect, useState } from "react";
import "../../styles/header.css";
import { userSvg } from "../../svg";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { updateUser } from "../../store/user";
import SignUp from "../signUp/signUp";
import SignIn from "../signIn/signIn";
import { Link } from "react-router-dom";
export default function Header() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const allUsersData = JSON.parse(localStorage.getItem("allUsersData"));
  useEffect(() => {
    const email = Cookies.get("email");
    if (email) {
      dispatch(
        updateUser({ email: email, collection: allUsersData[email].collection })
      );
    }
  }, []);
  const handleLogOut = () => {
    Cookies.remove("email");
    dispatch(updateUser({ email: "", collection: [] }));
  };
  return (
    <>
      <div className="header_container">
        <div className="header">
          <span className="app_name">Books Tracking</span>
          {email ? (
            <div
              onMouseEnter={() => setShowOption(true)}
              onMouseLeave={() => setShowOption(false)}
            >
              <span className="login_icon">{userSvg}</span>
              {showOption && (
                <div className="account_options">
                  <div className="account_option">My account</div>
                  <div className="account_option">
                    <Link to="/">Home</Link>
                  </div>
                  {email && (
                    <div className="account_option">
                      <Link to="/my-collection">My Collection</Link>
                    </div>
                  )}
                  <div className="account_option" onClick={handleLogOut}>
                    Log Out
                  </div>
                </div>
              )}
            </div>
          ) : (
            <span className="sign_in" onClick={() => setShowSignInForm(true)}>
              Sign In
            </span>
          )}
        </div>
      </div>
      {showSignUpForm && (
        <SignUp
          showSignUpForm={showSignUpForm}
          setShowSignUpForm={setShowSignUpForm}
          setShowSignInForm={setShowSignInForm}
        />
      )}
      {showSignInForm && (
        <SignIn
          showSignInForm={showSignInForm}
          setShowSignUpForm={setShowSignUpForm}
          setShowSignInForm={setShowSignInForm}
        />
      )}
    </>
  );
}
