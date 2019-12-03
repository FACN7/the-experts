import { useEffect } from "react";
import Cookies from "js-cookie";

export default function Logout() {
  useEffect(() => {
    localStorage.removeItem("token");
    Cookies.remove("jwt");
    window.location = "/";
  }, []);

  return null;
}
