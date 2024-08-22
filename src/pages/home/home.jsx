import React from "react";
import { Link } from "react-router-dom";
import { TimerCircle } from "../../components/countdowntimer/countdowncircle";

const Home = () => {
  const countDownsList = [
    {
      icon: "./images/icon/head.svg",
      total: 12,
      desc: "Years Experiences",
    },
    {
      icon: "./images/icon/award.svg",
      total: 29,
      desc: "Awards Gained",
    },
    {
      icon: "./images/icon/build.svg",
      total: "725+",
      desc: "Property Build",
    },
  ];
  return (
    <div className="container">
      <div className="hero">
        <div className="hero__wrap">
          <div className="row">
            <div className="col-5">
              <div className="hero__left">
                <h1 className="hero__heading">
                  Let's Make Your Best Trip Ever
                </h1>
                <p className="hero__desc">
                  Plan and book your perfect trip with expert advice, travel
                  tips, destination information and inspiration from us.
                </p>
                <div className="hero__link">
                  <button className="btn hero__btn">Discover Now</button>
                  <div className="hero__more">
                    <figure className="hero__media">
                      <img src="./images/icon/media.svg" alt="" />
                    </figure>
                    <Link className="hero__link-more" href="">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="hero__right">
                <figure className="hero__images">
                  <img
                    src="./images/hero/Girl.png"
                    className="hero__image"
                    alt=""
                  />
                  <img
                    src="./images/hero/decor.svg"
                    className="hero__decor-image"
                    alt=""
                  />
                  <div className="hero__separate"></div>
                  <div className="hero__timer">
                    <TimerCircle className="hero__circle">
                      <p>Xin chao</p>
                    </TimerCircle>
                    <div className="hero__timer-content">
                      <span className="hero__total-trip">224</span>
                      <p className="hero__trip-desc">Total trip (month)</p>
                    </div>
                  </div>
                </figure>
                <div className="hero__countdown">
                  <div className="hero__list">
                    <div>
                      {countDownsList.map((countdown) => {
                        return (
                          <div className="hero__item" key={countdown.total}>
                            <figure className="hero__icon">
                              <img src={countdown.icon} alt={countdown.desc} />
                            </figure>
                            <div className="hero__award">
                              <span className="hero__award-total">
                                {countdown.total}
                              </span>
                              <p className="hero__award--desc">
                                {countdown.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
