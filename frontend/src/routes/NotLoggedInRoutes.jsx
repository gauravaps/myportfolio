import { Navigate, Outlet } from "react-router-dom";


const NotLoggedInRoutes = () => {
    const token = localStorage.getItem("token");

  return (
    <div>{token ? <Navigate to={'/'}/> :<Outlet/>}</div>
  )
}

export default NotLoggedInRoutes