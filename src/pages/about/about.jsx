import React from "react";
import { Reason } from "../../components/reason/reason";
import { useState, useEffect } from "react";
import { InputFooter } from "../../components/input/input";
import { Link } from "react-router-dom";
export const About = () => {
  const [guides, setGuides] = useState([]);
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/api/db.json`).then((response) =>
      response
        .json()
        .then((data) => {
          setGuides(data.guides || []);
        })
        .catch((error) => console.error("Error fetching data:", error))
    );
  }, []);
  console.log(guides);

  return (
    <>
      <div className="about">
        <div className="about__slider">
          <h1 className="about__heading">About us</h1>
          <img
            src={`${process.env.PUBLIC_URL}/images/about/slider.png`}
            alt=""
            className="about__background"
          />
        </div>
      </div>
      <div className="container">
        <div className="about__intro">
          <div className="row">
            <div className="col-5 col-md-12">
              <div className="about__intro-content">
                <p className="about__text">Who we are</p>
                <h2 className="about__intro--heading">
                  We are best tourist operator
                </h2>
                <p className="about__desc">
                  We are a small family owned, award-winning operation that
                  specializes in providing highly personalized service to our
                  discerning clientele. Our goal is to exceed your expectations
                  and make your trip an unforgettable experience.
                </p>
              </div>
            </div>
            <div className="col-6 offset-1 col-md-12 offset-md-0 gy-md-3">
              <img
                src={`${process.env.PUBLIC_URL}/images/about/intro/image1.jpg`}
                alt=""
                className="about__intro--image"
              />
            </div>
          </div>
        </div>
        <Reason></Reason>
        <div className="guides">
          <h2 className="guides__heading">Meet our tour guides</h2>
          <div className="guides__list">
            <div className="row row-cols-3 row-cols-md-1 ">
              {guides.map((guide) => {
                return (
                  <div className="col gy-md-3" key={guide.id}>
                    <div className="guides__item">
                      <figure className="guides__image">
                        <img
                          src={`${process.env.PUBLIC_URL}${guide.image}`}
                          alt={guide.name}
                        />
                      </figure>
                      <div className="guides__item--content">
                        <div className="guides__item--info">
                          <p className="guides__name">{guide.name}</p>
                          <p className="guides__desc">{guide.desc}</p>
                        </div>
                        <div className="guides__item--socials">
                          <Link to={guide.facebook}>
                            <img
                              src={`${process.env.PUBLIC_URL}/images/icon/facebook.svg`}
                              alt=""
                              className="guides__facebook"
                            />
                          </Link>
                          <Link to={guide.insta}>
                            <img
                              src={`${process.env.PUBLIC_URL}/images/icon/insta.svg`}
                              alt=""
                              className="guides__facebook"
                            />
                          </Link>
                          <Link to={guide.twister}>
                            <img
                              src={`${process.env.PUBLIC_URL}/images/icon/twister.svg`}
                              alt=""
                              className="guides__facebook"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <InputFooter></InputFooter>
      </div>
    </>
  );
};
