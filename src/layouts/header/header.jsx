import { NavLink } from "react-router-dom";

const activeClass = (params) => {
  return params.isActive ? "active-item" : "";
};

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <figure className="logo">
          <img src="./images/Logo.svg" alt="logo" />
        </figure>
        <nav className="header__navbar">
          <ul className="header__list">
            <li>
              <NavLink
                to="/"
                className={(params) => `${activeClass(params)} header__link`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={(params) => `${activeClass(params)} header__link`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destinations"
                className={(params) => `${activeClass(params)} header__link`}
              >
                Destinations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={(params) => `${activeClass(params)} header__link`}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={(params) => `${activeClass(params)} header__link`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="btn btn__primary">Contact us</button>
      </header>
    </div>
  );
};
export default Header;
