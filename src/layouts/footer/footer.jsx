import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const activeClass = (params) => {
  return params.isActive ? "active-item" : "";
};
const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="row row-cols-4 row-cols-md-2 gy-md-3">
          <div className="col">
            <div className="footer__list">
              <h4 className="footer__title">Resources</h4>
              <ul className="footer__wrap">
                <li className="footer__link">
                  <Link to="#!">Download</Link>
                </li>
                <li className="footer__link">
                  <Link to="#!">Help Center</Link>
                </li>
                <li className="footer__link">
                  <Link to="#!">Guide Book </Link>
                </li>
                <li className="footer__link">
                  <Link to="#!">App Directory </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="footer__list">
              <h4 className="footer__title">Travellers</h4>
              <ul className="footer__wrap">
                <li className="footer__link">
                  <Link to="#!">Why Travellers</Link>
                </li>
                <li className="footer__link">
                  <Link to="#!">Enterprice </Link>
                </li>
                <li className="footer__link">
                  <Link to="#!">Customer Stories</Link>
                </li>
                <li className="footer__link">
                  <Link to="#!">Instagram post</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="footer__list">
              <h4 className="footer__title">Company</h4>
              <ul className="footer__wrap">
                <li className="footer__link">
                  <Link to="#!">Travelling </Link>
                </li>
                <li className="footer__link">
                  <Link to="#!"> About Locato </Link>
                </li>
                <li className="footer__link">
                  <Link to="#!">Success </Link>
                </li>
                <li className="footer__link">
                  <Link to="#!">Information</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="footer__list">
              <h4 className="footer__title">Get in Touch</h4>
              <ul className="footer__wrap">
                <li className="footer__link">
                  <Link to="#!" className="footer__touch">
                    Feel free to get in touch with us vai email
                  </Link>
                </li>
                <li className="footer__link">
                  <Link to="#!" className="footer__email">
                    email@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__separate"></div>
        <div className="footer__nav">
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
          <div className="footer__social">
            <figure className="footer__icon-wrap">
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/facebook.svg`}
                alt="facebook"
                className="footer__icon"
              />
            </figure>
            <figure className="footer__icon-wrap">
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/insta.svg`}
                alt="facebook"
                className="footer__icon"
              />
            </figure>
            <figure className="footer__icon-wrap">
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/twister.svg`}
                alt="facebook"
                className="footer__icon"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
