import { Outlet } from "react-router-dom";
import Home from "../Components/Home/Home";

export const LoggedInRoutes = () => {
    const token = localStorage.getItem("token");

    return (
        <div>{token ? <Outlet/>:<Home/>}</div>
      )
  
}