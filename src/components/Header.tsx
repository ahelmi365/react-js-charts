import { NavLink } from "react-router-dom";

// css
import "./header.css";
const Header = () => {
  return (
    <div className="row header mt-3">
      <ul className="nav-links">
        <NavLink to="/" end>
          <li className="nav-link">Home</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="nav-link">Contact</li>
        </NavLink>
        <NavLink to="/faq">
          <li className="nav-link">FAQ</li>
        </NavLink>
        {/* <NavLink to="/apex-dashboard">
          <li className="nav-link">Apex-Charts</li>
        </NavLink>
        <NavLink to="/google-dashboard">
          <li className="nav-link">Google-Charts</li>
        </NavLink> */}
        <NavLink to="/user/login">
          <li className="nav-link">Logout</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
