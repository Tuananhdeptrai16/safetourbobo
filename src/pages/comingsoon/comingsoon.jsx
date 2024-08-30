import React, { useEffect, useState } from "react";

export const ComingSoon = () => {
  //tao sate luwu so ngay
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59");
    const calculateTimeLeft = () => {
      const fomartNumber = (number) =>
        number < 10 ? `0${number}` : `${number}`;

      const now = new Date();
      const diff = targetDate - now;
      if (diff > 0) {
        let oneDay = 1000 * 60 * 60 * 24;
        let oneHour = 1000 * 60 * 60;
        let oneMinute = 1000 * 60;
        const timeLeft = {
          days: fomartNumber(Math.floor(diff / oneDay)),
          hours: fomartNumber(Math.floor((diff / oneHour) % 24)),
          minutes: fomartNumber(Math.floor((diff / oneMinute) % 60)),
          seconds: fomartNumber(Math.floor((diff / 1000) % 60)),
        };
        setTimeLeft(timeLeft);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    calculateTimeLeft();
    //cap nhat thoi gian moi giay
    const intervalId = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(intervalId);
  }, []);
  console.log(timeLeft);
  return (
    <div className="container">
      <div className="row coming">
        <div className="col-5 col-md-12 gy-md-3">
          <figure className="coming__cover">
            <img
              src={`${process.env.PUBLIC_URL}/images/comingsoon/cover.png`}
              alt=""
              className="coming__image"
            />
          </figure>
        </div>
        <div className="col-6 offset-1 col-md-12 ">
          <div className="coming__content">
            <div className="coming__heading">Coming Soon</div>
            <div className="coming__countdown">
              <div className="coming__day">
                <span className="coming__number">{timeLeft.days}</span>
                <p className="coming__title">Days</p>
              </div>
              <div className="coming__hours">
                <span className="coming__number">{timeLeft.hours}</span>
                <p className="coming__title">Hours</p>
              </div>
              <div className="coming__min">
                <span className="coming__number">{timeLeft.minutes}</span>
                <p className="coming__title">Min</p>
              </div>
              <div className="coming__second">
                <span className="coming__number">{timeLeft.seconds}</span>
                <p className="coming__title">Sec</p>
              </div>
            </div>
          </div>
          <div className="coming__notification">
            <p className="coming__notification--desc">
              Please subscribe to newsletter to get updates from us.
            </p>
            <div className="coming__input">
              <input
                type="text"
                name=""
                placeholder="Email Address"
                id=""
                className="coming__notification--input"
              />
              <button className="btn coming__btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
