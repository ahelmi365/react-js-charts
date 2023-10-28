import React from "react";
import VerifyUser from "../../components/verifiyUser/VerifyUser";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <VerifyUser Icon={AiOutlineUserAdd} title="Sign Up">
      <p>
        Do you have an account? <Link to="/user/login">Sign In</Link>
      </p>

      <form>
        <div className="form-group mt-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group mt-3">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mt-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group mt-3">
          <label className="form-label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>

        <div className="form-group mt-5">
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </div>
      </form>
    </VerifyUser>
  );
};

export default SignUp;
