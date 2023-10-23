import React from "react";
import { Navigate } from "react-router-dom";
interface props {
  children: React.ReactNode;
}
const RequireAuth = ({ children }: props) => {
  const isLoggedIn = true;

  return isLoggedIn ? children : <Navigate to="/user/login" />;
};

export default RequireAuth;
