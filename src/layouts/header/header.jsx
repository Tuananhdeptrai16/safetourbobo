import { NavLink } from "react-router-dom";
import { useState } from "react";
const activeClass = (params) => {
  return params.isActive ? "active-item" : "";
};

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClickChangeShow = () => {
    setShow(!show);
  };

  return (
    <div className="container">
      <header className="header">
        <figure className="logo">
          <img src={`${process.env.PUBLIC_URL}/images/Logo.svg`} alt="logo" />
        </figure>
        <nav className="navbar">
          <ul className="nav__list">
            <li>
              <NavLink
                to={`${process.env.PUBLIC_URL}/`}
                end
                className={(params) => `${activeClass(params)} nav__link`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${process.env.PUBLIC_URL}/about`}
                className={(params) => `${activeClass(params)} nav__link`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${process.env.PUBLIC_URL}/destinations`}
                className={(params) => `${activeClass(params)} nav__link`}
              >
                Destinations
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${process.env.PUBLIC_URL}/blog`}
                className={(params) => `${activeClass(params)} nav__link`}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${process.env.PUBLIC_URL}/contact`}
                className={(params) => `${activeClass(params)} nav__link`}
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
              src={`${process.env.PUBLIC_URL}/images/icon/Menu.svg`}
              className="d-none d-lg-block"
              alt="Menu"
            />
          </button>
          <div className={`${show ? "active" : ""} header__menu`}>
            <ul className="header__menu-dropdown">
              <figure className="logo">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Logo.svg`}
                  alt="logo"
                />
              </figure>
              <li>
                <NavLink
                  to={`${process.env.PUBLIC_URL}/`}
                  end
                  className={(params) => `${activeClass(params)} nav__link`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${process.env.PUBLIC_URL}/about`}
                  className={(params) => `${activeClass(params)} nav__link`}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${process.env.PUBLIC_URL}/destinations`}
                  className={(params) => `${activeClass(params)} nav__link`}
                >
                  Destinations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${process.env.PUBLIC_URL}/blog`}
                  className={(params) => `${activeClass(params)} nav__link`}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${process.env.PUBLIC_URL}/contact`}
                  className={(params) => `${activeClass(params)} nav__link`}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${process.env.PUBLIC_URL}/contact`}
                  className={(params) =>
                    `${activeClass(params)} nav__link d-none d-md-block`
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
