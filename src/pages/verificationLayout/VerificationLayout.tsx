import { Link, Outlet } from "react-router-dom";

const VerificationLayout = () => {
  const userId = 1;
  return (
    <div className="container-fluid">
      <ul>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="sign-up">Sign Up</Link>
        </li>
        <li>
          <Link to={`${userId}/edit`}>Edit</Link>
        </li>
      </ul>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default VerificationLayout;
