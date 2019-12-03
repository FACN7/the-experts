import { useEffect } from "react";
import Cookies from "js-cookie";

export default function Logout(props) {
  const token = localStorage.getItem("token");
  if (token) {
    props.history.replace("/");
  }
  useEffect(() => {
    localStorage.removeItem("token");
    Cookies.remove("jwt");
    window.location = "/";
  }, []);

  return null;
}
