import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { TimerCircle } from "../../components/countdowntimer/countdowncircle";
import SearchHero from "../../components/search/search";
import Slider from "react-slick";

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
  const products = [
    {
      id: 1,
      img: `./images/product/item1.jpg`,
      price: `$150/day`,
      title: "Nha Trang",
      location: "Nha Trang, VietNam",
      time: "Oct 28, 2021",
      duration: "5 Days",
    },
    {
      id: 2,
      img: `./images/product/item2.jpg`,
      price: `$110/day`,
      title: "Co To",
      location: "Dao CoTo, VietNam",
      time: "Jul 30,2021",
      duration: "5 Days",
    },
    {
      id: 3,
      img: `./images/product/item3.jpg`,
      price: `$136/day`,
      title: "Ha Long Bay",
      location: "Quang Ninh, VietNam",
      time: "Jul 29, 2021",
      duration: "5 Days",
    },
    {
      id: 4,
      img: `./images/product/item4.jpg`,
      price: `$136/day`,
      title: "Cat Ba island",
      location: "Quang Ninh, Viet Nam",
      time: "Jul 29, 2021",
      duration: "5 Days",
    },
    {
      id: 5,
      img: `./images/product/item5.jpg`,
      price: `$136/day`,
      title: "Ha Giang",
      location: "Ha Giang , Viet Nam",
      time: "Jul 29, 2021",
      duration: "5 Days",
    },
    {
      id: 6,
      img: `./images/product/item6.jpg`,
      price: `$136/day`,
      title: "Moc Chau",
      location: "Son La, Viet Nam",
      time: "Jul 29, 2021",
      duration: "5 Days",
    },
  ];
  const reasons = [
    {
      id: 1,
      icon: "./images/icon/word.svg",
      title: "We make all the process easy",
      desc: "A galley of type and scrambled it to make a type when an unknown printer took",
    },
    {
      id: 2,
      icon: "./images/icon/vali.svg",
      title: "Private & Customized Tours",
      desc: "A galley of type and scrambled it to make a type when an unknown printer took",
    },
    {
      id: 3,
      icon: "./images/icon/book.svg",
      title: "Immigration & Passport Help",
      desc: "A galley of type and scrambled it to make a type when an unknown printer took",
    },
  ];
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="hero">
        <div className="row hero__wrap">
          <div className="col-5 col-xl-12">
            <div className="hero__left">
              <h1 className="hero__heading">Let's Make Your Best Trip Ever</h1>
              <p className="hero__desc">
                Plan and book your perfect trip with expert advice, travel tips,
                destination information and inspiration from us.
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
                <div className="hero__list d-md-none">
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
      <SearchHero></SearchHero>
      <div className="product">
        <div className="product__content">
          <div className="product__left">
            <h2 className="product__heading">Our Best Tour</h2>
            <p className="product__desc">
              These are also locations where it’s easy to feel healthier,
              happier and less stressed than in America. And for more
              destinations on the Global Retirement Index.
            </p>
          </div>
          <div className="product__btn">
            <button className="product__button btn">See all tours</button>
          </div>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {products.map((item) => {
              return (
                <div className="product__item" key={item.id}>
                  <div className="product__images">
                    <div>
                      <img
                        src={item.img}
                        className="product__image"
                        alt={item.title}
                      />
                    </div>
                  </div>
                  <div className="product__item-content">
                    <p className="product__price">{item.price}</p>
                    <h3 className="product__title">{item.title}</h3>
                    <div className="product__location">
                      <img
                        src="./images/icon/location.svg"
                        alt="location"
                        className="product__icon"
                      />
                      <p className="product__destination">{item.location}</p>
                    </div>
                    <div className="product__time">
                      <div className="product__date">
                        <img src="./images/icon/calender.svg" alt="calendar" />
                        <p className="product__date">{item.time}</p>
                      </div>
                      <div className="product__durations">
                        <img src="./images/icon/clock.svg" alt="clock" />

                        <p className="product__duration">{item.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="reason">
        <div className="row">
          <div className="col-5 d-md-none">
            <figure className="reason__img-wrap">
              <img
                src="./images/reason/image.jpg"
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
    </div>
  );
};

export default Home;
