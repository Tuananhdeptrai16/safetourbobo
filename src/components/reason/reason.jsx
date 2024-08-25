import React from "react";

export const Reason = () => {
  const reasons = [
    {
      id: 1,
      icon: `${process.env.PUBLIC_URL}/images/icon/word.svg`,
      title: "We make all the process easy",
      desc: "A galley of type and scrambled it to make a type when an unknown printer took",
    },
    {
      id: 2,
      icon: `${process.env.PUBLIC_URL}/images/icon/vali.svg`,
      title: "Private & Customized Tours",
      desc: "A galley of type and scrambled it to make a type when an unknown printer took",
    },
    {
      id: 3,
      icon: `${process.env.PUBLIC_URL}/images/icon/book.svg`,
      title: "Immigration & Passport Help",
      desc: "A galley of type and scrambled it to make a type when an unknown printer took",
    },
  ];
  return (
    <div className="reason">
      <div className="row">
        <div className="col-5 d-md-none">
          <figure className="reason__img-wrap">
            <img
              src={`${process.env.PUBLIC_URL}/images/reason/image.jpg`}
              className="reason__img"
              alt="VietNamTour"
            />
          </figure>
        </div>
        <div className="col-5 offset-2 offset-xl-1  offset-md-0 col-md-12">
          <div className="reason__content">
            <h2 className="reason__heading">Why Choose Us?</h2>
            <p className="reason__desc">
              We make all the process easy. Dummy text ever since the is, when
              an unknown printer took.
            </p>
            <div className="reason__list">
              {reasons.map((reason) => {
                return (
                  <div key={reason.id} className="reason__item">
                    <figure className="reason__icon">
                      <img src={reason.icon} alt={reason.title} />
                    </figure>
                    <div className="reason__item-content">
                      <h3 className="reason__title">{reason.title}</h3>
                      <p className="reason__item--desc">{reason.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
