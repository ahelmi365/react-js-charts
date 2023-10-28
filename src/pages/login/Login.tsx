import { BiSolidUserCircle } from "react-icons/bi";
import VerifyUser from "../../components/verifiyUser/VerifyUser";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LuPartyPopper } from "react-icons/lu";
import "./login.css";
const Login = () => {
  const naviagte = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log({ email, password });
    const userInfo = { email, password };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    naviagte("/");
  };
  return (
    <div className="login-container">
      <VerifyUser Icon={BiSolidUserCircle} title="Log In">
        <p>
          Create new account? <Link to="/user/sign-up">Sign-up</Link>
        </p>

        <form id="loginForm">
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              min={3}
              max={30}
            />
          </div>

          <div className="form-group mt-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              min={5}
              max={30}
            />
          </div>

          <div className="form-group mt-5">
            <button
              className="btn btn-primary w-100"
              type="submit"
              onClick={(e) => handleSubmit(e)}
              disabled={!email || !password}
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-3 text-center">
          <Link
            to="/"
            onClick={() =>
              localStorage.setItem(
                "userInfo",
                JSON.stringify({ email: "guest", password: "guest" })
              )
            }
          >
            Join as a Guest <LuPartyPopper size={20} className="mx-2"/>
          </Link>
        </p>
      </VerifyUser>
    </div>
  );
};

export default Login;
