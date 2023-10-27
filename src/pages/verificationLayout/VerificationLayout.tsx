import { Outlet } from "react-router-dom";

// css
import "./verificationLayout.css";

const VerificationLayout = () => {
  return (
    <div className="verification-layout-container">
      <div className="left"></div>
      <div className="right content">
        <Outlet />
      </div>
    </div>
  );
};

export default VerificationLayout;
