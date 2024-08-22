import { NavLink } from "react-router-dom";
import { useState } from "react";
const activeClass = (params) => {
  return params.isActive ? "active-item" : "";
};

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClickChangeShow = () => {
    setShow(!show);
    console.log(show);
  };
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
        <div className="header__button">
          <button className="btn header__btn">Contact us</button>
          <button onClick={handleClickChangeShow} className="header__showMenu">
            <img
              src="./images/icon/Menu.svg"
              className="d-none d-lg-block"
              alt="Menu"
            />
          </button>
          <div className={`${show ? "active" : ""} header__menu`}>
            <ul className="header__menu-dropdown">
              <figure className="logo">
                <img src="./images/Logo.svg" alt="logo" />
              </figure>
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
              <li>
                <NavLink
                  to="/contact"
                  className={(params) =>
                    `${activeClass(params)} header__link d-none d-md-block`
                  }
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            onClick={handleClickChangeShow}
            className={`${show ? "active" : ""} overlay`}
          ></div>
        </div>
      </header>
    </div>
  );
};
export default Header;
