import React, { useState, useEffect } from "react";
import PageNumber from "../../../components/pagination/pagination";
import { Link } from "react-router-dom";

export const Page2 = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/api/db.json`)
      .then((response) => response.json())
      .then((data) => {
        setDestinations(data.destination.page2 || []);
      });
  }, []);
  return (
    <>
      <div className="destination__cover">
        <div className="destination__heading-cover">
          <h1 className="destination__heading-layout">Destinations</h1>
          <p className="destination__desc-layout">
            Explore Tours By Destinations
          </p>
        </div>
        <picture>
          <source
            media="(max-width:767.98px)"
            srcSet={`${process.env.PUBLIC_URL}/images/destination/slider1.png`}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/destination/slider.png`}
            alt=""
            className="destination__background"
          />
        </picture>
      </div>
      <div className="container">
        <div className="destination__content-layout">
          <div className="row row-cols-4 gy-4 row-cols-lg-2 gy-lg-2 row-cols-md-1 gy-md-3">
            {destinations.map((item) => {
              return (
                <Link
                  to={`${
                    item.name === "Coming soon..."
                      ? "/safetourbobo/commingsoon"
                      : "#!"
                  }`}
                  className="col"
                  key={item.id}
                >
                  <div className="destination__item">
                    <figure className="destination__image-layout">
                      <img
                        src={`${process.env.PUBLIC_URL}${item.img}`}
                        alt={item.name}
                        className="destination__img-layout"
                      />
                    </figure>
                    <p className="destination__item--name">{item.name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="destination__page">
        <PageNumber></PageNumber>
      </div>
    </>
  );
};
