import React, { useState, useEffect } from "react";
import SearchHero from "../../components/search/search";

export const Tour = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/api/db.json`)
      .then((response) => response.json())
      .then((data) => {
        setTours(data.tours);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="tour">
        <div className="tour__introduce">
          <h1 className="blog__heading">Tour</h1>

          <img
            src={`${process.env.PUBLIC_URL}/images/blog/decor.svg`}
            alt=""
            className="tour__introduce--decor"
          />
        </div>
        <SearchHero></SearchHero>
        <div className="tour__content">
          <div className="row row-cols-2 gy-3 row-cols-md-1 gy-md-3">
            {tours.map((tour) => {
              return (
                <div className="col" key={tour.id}>
                  <div className="tour__item">
                    <figure className="tour__image">
                      <img
                        src={`${process.env.PUBLIC_URL}${tour.img}`}
                        alt={tour.destination}
                        className="tour__img"
                      />
                    </figure>
                    <div className="tour__info">
                      <h2 className="tour__name">{tour.destination}</h2>
                      <div className="tour__cost">
                        <p className="tour__duration">{tour.duration}</p>
                        <span className="tour__price">{tour.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
