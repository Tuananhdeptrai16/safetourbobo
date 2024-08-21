import { NavLink } from "react-router-dom";

const activeClass = (params) => {
  return params.isActive ? "active-item" : "";
};

const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to="/" className={activeClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={activeClass}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/destinations" className={activeClass}>
          Destinations
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" className={activeClass}>
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={activeClass}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
};
export default Header;
