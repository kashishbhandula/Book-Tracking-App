import React, { useEffect } from "react";
import MyCollection from "../../components/myCollection/myCollection";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MyCollectionPage() {
  const email = useSelector((state) => state.user.email);
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate("/");
      return;
    }
  }, []);

  return <MyCollection />;
}
