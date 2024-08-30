import React from "react";

const NotFoundPage = () => {
  return (
    <div className="container">
      <div className="notfound">
        <figure className="notfound__images">
          <img
            src={`${process.env.PUBLIC_URL}/images/notfound/flower.svg`}
            alt=""
            className="d-xxl-none"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/notfound/boy.svg`}
            alt="Logo"
          />
          <div className="notfound__separate"></div>
        </figure>
        <div className="notfound__content">
          <p className="notfound__desc">Oopps!</p>
          <h1 className="notfound__heading">Page Not Found</h1>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
