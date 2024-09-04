import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import StoreContext from "../../context";
import { useEffect } from "react";
const activeClass = (params) => {
  return params.isActive ? "active-item" : "";
};

const Header = () => {
  const store = useContext(StoreContext);
  console.log(store.location);
  const [valiPaths, setValiPaths] = useState(false);
  useEffect(() => {
    const validPaths = [
      "/safetourbobo/about",
      "/safetourbobo/destinations",
      "/safetourbobo/destinations/page/1",
      "/safetourbobo/destinations/page/2",
    ];
    if (
      store &&
      store.location &&
      validPaths.includes(store.location.pathname)
    ) {
      setValiPaths(true);
    } else {
      setValiPaths(false);
    }
  }, [store]);

  const [show, setShow] = useState(false);
  const handleClickChangeShow = () => {
    setShow(!show);
  };

  return (
    <div className={valiPaths === false ? "header__wrap" : ""}>
      <div className="container">
        <header className="header">
          <Link to={"/safetourbobo/"}>
            <figure className="logo">
              <img
                src={`${process.env.PUBLIC_URL}/images/Logo.svg`}
                alt="logo"
              />
            </figure>
          </Link>
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
                  to={`${process.env.PUBLIC_URL}/tour`}
                  className={(params) => `${activeClass(params)} nav__link`}
                >
                  Tour
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__button">
            <Link
              to={`${process.env.PUBLIC_URL}/contact`}
              className="btn header__btn"
            >
              Contact us
            </Link>
            <button
              onClick={handleClickChangeShow}
              className="header__showMenu"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/Menu.svg`}
                className="d-none d-lg-block"
                alt="Menu"
              />
            </button>
            <div className={`${show ? "active" : ""} header__menu`}>
              <div className="header__menu-dropdown--wrap">
                <Link to={"/safetourbobo/"}>
                  <figure className="logo">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/Logo.svg`}
                      alt="logo"
                    />
                  </figure>
                </Link>
                <ul className="header__menu-dropdown">
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
                      to={`${process.env.PUBLIC_URL}/tour`}
                      className={(params) => `${activeClass(params)} nav__link`}
                    >
                      Tour
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
            </div>
            <div
              onClick={handleClickChangeShow}
              className={`${show ? "active" : ""} overlay`}
            ></div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
