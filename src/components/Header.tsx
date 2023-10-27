import { NavLink } from "react-router-dom";

// css
import "./header.css"
const Header = () => {

  return (
    <div className="row header mt-3">
      <ul className="nav-links">
        <li className="nav-link">
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/faq">FAQ</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/apex-dashboard">Apex-Charts</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/google-dashboard">Google-Charts</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/user/login"> Logout</NavLink>
        </li>
      
      </ul>
    </div>
  );
};

export default Header;
