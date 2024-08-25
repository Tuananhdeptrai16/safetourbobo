import React from "react";

export const InputFooter = () => {
  return (
    <div className="container">
      <div className="letter">
        <img
          src={`${process.env.PUBLIC_URL}/images/icon/triangle.svg`}
          alt="triangle"
          className="letter__decor1"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/icon/half-circle.svg`}
          alt="letter__decor2"
          className="letter__decor2"
        />
        <div className="letter__content">
          <h1 className="letter__heading">Subscribe our newsletter</h1>
          <p className="letter__desc">
            Reciev latest news, update, and many other things every week.
          </p>
          <div className="letter__input">
            <input
              type="email"
              placeholder="Enter Your email address"
              required
            />
            <button className="letter__send">
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/send.svg`}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
