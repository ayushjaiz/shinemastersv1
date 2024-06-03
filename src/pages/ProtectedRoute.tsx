import React, { useContext } from "react";
import { ReactNode } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthState } from "../store/reducers/authSlice";
import { RootState } from "../store/appStore";

interface ProtectedRouteProps {
  children?: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {

  const token= useSelector((state: RootState) => state.auth.token);
  const isAuthenticated: Boolean = token ? true : true; 

  console.log("Protected", token);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;

// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = ({
//   isAuthenticated,
//   children,
//   adminRoute,
//   isAdmin,
//   redirect = "/login",
//   redirectAdmin = "/profile",
// }) => {
//   if (!isAuthenticated) {
//     return <Navigate to={redirect} />;
//   }

//   if (adminRoute && !isAdmin) {
//     return <Navigate to={redirectAdmin} />;
//   }

//   return children ? children : <Outlet />;
// };

// export default ProtectedRoute;
