import "./login.css"

const Login = () => {
  return (
    <div className="login-container ">
      
      <div className="card form-container">
      <h6 className="mb-3">Log In</h6>
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
            <button className="btn btn-primary w-100" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
