import "./login.css";
import { BiSolidUserCircle } from "react-icons/bi";
import VerifyUser from "../../components/verifiyUser/VerifyUser";
const Login = () => {
  return (
    <VerifyUser Icon={BiSolidUserCircle} title="Log In">
      <form>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" />
        </div>

        <div className="form-group mt-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input className="form-control" type="password" id="password" />
        </div>

        <div className="form-group mt-5">
          <button className="btn btn-primary w-100" type="submit">
            Login
          </button>
        </div>
      </form>
    </VerifyUser>
  );
};

export default Login;
