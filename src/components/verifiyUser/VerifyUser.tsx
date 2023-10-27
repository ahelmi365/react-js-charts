import React from "react";
import { IconType } from "react-icons";
import "./verifyUser.css";

interface props {
  children: React.ReactNode;
  Icon: IconType;
  title: string;
}
const VerifyUser = ({ children, Icon, title }: props) => {
  return (
    <div className="card verify-container">
      <div className="verify-container-header d-flex flex-row align-items-center justify-content-start">
        <Icon className="" size={25} />
        <h6 className="m-0 ms-2">{title}</h6>
      </div>
      <div className="form-container">{children}</div>
    </div>
  );
};

export default VerifyUser;
