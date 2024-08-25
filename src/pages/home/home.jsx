import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { TimerCircle } from "../../components/countdowntimer/countdowncircle";
import SearchHero from "../../components/search/search";
import Slider from "react-slick";
import { useState } from "react";
import { Reason } from "../../components/reason/reason";
import { InputFooter } from "../../components/input/input";
const Home = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: false, // Không lặp lại slider khi đến cuối
    dots: false,
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
  const settings2 = {
    autoplay: true, // Kích hoạt chế độ tự động trượt
    autoplaySpeed: 1000, // Tốc độ trượt tự động (ms)
    infinite: true, //  lặp lại slider khi đến cuối
    dots: true, //  điểm điều hướng
    speed: 1000, // Tốc độ chuyển tiếp slide (ms)
    slidesToShow: 1, // Số lượng slide hiển thị cùng lúc
    slidesToScroll: 1, // Số slide cuộn mỗi lần
    initialSlide: 0, // Bắt đầu từ slide đầu tiên
  };
  const trendingRef = useRef(null);
  const countDownsList = [
    {
      icon: `${process.env.PUBLIC_URL}/images/icon/head.svg`,
      total: 12,
      desc: "Years Experiences",
    },
    {
      icon: `${process.env.PUBLIC_URL}/images/icon/award.svg`,
      total: 29,
      desc: "Awards Gained",
    },
    {
      icon: `${process.env.PUBLIC_URL}/images/icon/build.svg`,
      total: "725+",
      desc: "Property Build",
    },
  ];
  const products = [
    {
      id: 1,
      img: `${process.env.PUBLIC_URL}/images/product/item1.jpg`,
      price: `$150/day`,
      title: "Nha Trang",
      location: "Nha Trang, VietNam",
      time: "Oct 28, 2021",
      duration: "5 Days",
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL}/images/product/item2.jpg`,
      price: `$110/day`,
      title: "Co To",
      location: "Dao CoTo, VietNam",
      time: "Jul 30,2021",
      duration: "5 Days",
    },
    {
      id: 3,
      img: `${process.env.PUBLIC_URL}/images/product/item3.jpg`,
      price: `$136/day`,
      title: "Ha Long Bay",
      location: "Quang Ninh, VietNam",
      time: "Jul 29, 2021",
      duration: "5 Days",
    },
    {
      id: 4,
      img: `${process.env.PUBLIC_URL}/images/product/item4.jpg`,
      price: `$136/day`,
      title: "Cat Ba island",
      location: "Quang Ninh, Viet Nam",
      time: "Jul 29, 2021",
      duration: "5 Days",
    },
    {
      id: 5,
      img: `${process.env.PUBLIC_URL}/images/product/item5.jpg`,
      price: `$136/day`,
      title: "Ha Giang",
      location: "Ha Giang , Viet Nam",
      time: "Jul 29, 2021",
      duration: "5 Days",
    },
    {
      id: 6,
      img: `${process.env.PUBLIC_URL}/images/product/item6.jpg`,
      price: `$136/day`,
      title: "Moc Chau",
      location: "Son La, Viet Nam",
      time: "Jul 29, 2021",
      duration: "5 Days",
    },
  ];
  const trending = [
    {
      id: 1,
      img: `${process.env.PUBLIC_URL}/images/trending/item1.jpg`,
      title: "Mountain Hiking Tour",
      place: "12 Places",
      totalActivities: "3 Activites",
      price: "$895.50",
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL}/images/trending/item2.jpg`,
      title: "Tran Skyline",
      place: "12 Places",
      totalActivities: "3 Activites",
      price: "$769.99",
    },
    {
      id: 3,
      img: `${process.env.PUBLIC_URL}/images/trending/item3.jpg`,
      title: "Forest Wild Life",
      place: "12 Places",
      totalActivities: "3 Activites",
      price: "$939.80",
    },
    {
      id: 4,
      img: `${process.env.PUBLIC_URL}/images/trending/item2.png`,
      title: "Mountain Hiking Tour",
      place: "12 Places",
      totalActivities: "3 Activites",
      price: "$895.50",
    },
  ];
  const destinations = [
    {
      id: 1,
      img: `${process.env.PUBLIC_URL}/images/destination/image1.jpg`,
      reviews: 3.5,
      name: "Co to",
      desc: "Wore fall",
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL}/images/destination/image2.jpg`,
      reviews: 4.5,
      name: "Cat Ba",
      desc: "Wore fall",
    },
    {
      id: 3,
      img: `${process.env.PUBLIC_URL}/images/destination/image3.jpg`,
      reviews: 3.5,
      name: "Vinh Ha Long",
      desc: "Wore fall",
    },
    {
      id: 4,
      img: `${process.env.PUBLIC_URL}/images/destination/image4.jpg`,
      reviews: 3.5,
      name: "Nha Trang",
      desc: "Wore fall",
    },
    {
      id: 5,
      img: `${process.env.PUBLIC_URL}/images/destination/image5.jpg`,
      reviews: 3.5,
      name: "Phu Quoc",
      desc: "Wore fall",
    },

    {
      id: 6,
      img: `${process.env.PUBLIC_URL}/images/destination/image6.jpg`,
      reviews: 3.5,
      name: "Ha Giang",
      desc: "Wore fall",
    },
  ];
  const handleNext = () => {
    if (trendingRef.current) {
      trendingRef.current.slickNext();
    }
  };
  const handlePrev = () => {
    if (trendingRef.current) {
      trendingRef.current.slickPrev();
    }
  };
  const [isActive, setIsActive] = useState(null);
  const handleMouseEnter = (id) => {
    setIsActive(id);
  };
  const handleMouseLeave = () => {
    setIsActive(null);
  };
  const types = [
    {
      id: 1,
      icon: `${process.env.PUBLIC_URL}/images/icon/cityTour.svg`,
      title: "City Tours",
      tours: 5,
      price: "550$",
    },
    {
      id: 2,
      icon: `${process.env.PUBLIC_URL}/images/icon/beach.svg`,
      title: "Beaches",
      tours: 10,
      price: "250$",
    },
    {
      id: 3,
      icon: `${process.env.PUBLIC_URL}/images/icon/museum.svg`,
      title: "Museum Tours",
      tours: 5,
      price: "399$",
    },
    {
      id: 4,
      icon: `${process.env.PUBLIC_URL}/images/icon/ship.svg`,
      title: "Cruises",
      tours: 8,
      price: "850$",
    },
  ];
  const feedbacks = [
    {
      id: 1,
      quote: `“Adding live social proof was the #1 driver of increased revenue in all my experiments while at Airkey.” and the
bran must survive atleast 1 year.`,
      avatar: `${process.env.PUBLIC_URL}/images/feedback/image1.jpg`,
      name: `Truong Tuan Anh`,
      desc: `UI Designer`,
    },
    {
      id: 2,
      quote: `“Adding live social proof was the #1 driver of increased revenue in all my experiments while at Airkey.” and the
bran must survive atleast 1 year.`,
      avatar: `${process.env.PUBLIC_URL}/images/feedback/image2.jpg`,
      name: `Nguyen Thi Hoa`,
      desc: `Page Website`,
    },
    {
      id: 3,
      quote: `“Adding live social proof was the #1 driver of increased revenue in all my experiments while at Airkey.” and the
bran must survive atleast 1 year.`,
      avatar: `${process.env.PUBLIC_URL}/images/feedback/image1.jpg`,
      name: `Bo Bo`,
      desc: `bo bo hoc web`,
    },
  ];
  const articles = [
    {
      id: 1,
      img: `${process.env.PUBLIC_URL}/images/article/image4.jpg`,
      title: `Mountains is always right destination.`,
      desc: `Farther so friends am to detract forbade`,
      date: `Jun 1, 2021`,
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL}/images/article/image5.jpg`,
      title: `Here Our's Life is either a daring adventure.`,
      desc: `One of the programs is Save Our I have personally.`,
      date: `Jun 1, 2021`,
    },
    {
      id: 3,
      img: `${process.env.PUBLIC_URL}/images/article/image6.jpg`,
      title: `Here Our's Life is either a daring adventure.`,
      desc: `life is either a daring adventure or it's nothing`,
      date: `Jun 1, 2021`,
    },
  ];
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
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icon/media.svg`}
                      alt=""
                    />
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
                  src={`${process.env.PUBLIC_URL}/images/hero/Girl.png`}
                  className="hero__image"
                  alt=""
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/hero/decor.svg`}
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
                        src={`${process.env.PUBLIC_URL}/images/icon/location.svg`}
                        alt="location"
                        className="product__icon"
                      />
                      <p className="product__destination">{item.location}</p>
                    </div>
                    <div className="product__time">
                      <div className="product__date">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon/calender.svg`}
                          alt="calendar"
                        />
                        <p className="product__date">{item.time}</p>
                      </div>
                      <div className="product__durations">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon/clock.svg`}
                          alt="clock"
                        />

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
      <Reason></Reason>
      <div className="trending">
        <div className="trending__top">
          <div className="trending__left">
            <h2 className="trending__heading">Trending 2022</h2>
            <p className="trending__desc">
              Sost Brilliant reasons Entrada should be your one-stop-shop!
            </p>
          </div>
          <div className="trending__right">
            <button onClick={handlePrev} className="trending__btn-left">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1833 27.3174C18.1835 27.3176 18.1837 27.3178 18.1839 27.318L21.4496 30.568C21.6943 30.8115 22.09 30.8106 22.3335 30.5659C22.577 30.3212 22.5761 29.9255 22.3314 29.682L20.1388 27.5L33.375 27.5C33.7202 27.5 34 27.2202 34 26.875C34 26.5298 33.7202 26.25 33.375 26.25L20.1388 26.25L22.3314 24.068C22.5761 23.8245 22.577 23.4288 22.3335 23.1841C22.09 22.9394 21.6942 22.9386 21.4496 23.182L18.1838 26.432C18.1837 26.4322 18.1835 26.4324 18.1833 26.4326C17.9385 26.6769 17.9393 27.0739 18.1833 27.3174Z"
                  fill="#505050"
                />
              </svg>
            </button>
            <button onClick={handleNext} className="trending__btn-right">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.8167 27.3174C35.8165 27.3176 35.8163 27.3178 35.8161 27.318L32.5504 30.568C32.3057 30.8115 31.91 30.8106 31.6665 30.5659C31.423 30.3212 31.4239 29.9255 31.6686 29.682L33.8612 27.5H20.625C20.2798 27.5 20 27.2202 20 26.875C20 26.5298 20.2798 26.25 20.625 26.25H33.8612L31.6686 24.068C31.4239 23.8245 31.423 23.4288 31.6665 23.1841C31.91 22.9394 32.3058 22.9386 32.5504 23.182L35.8162 26.432C35.8163 26.4322 35.8165 26.4324 35.8167 26.4326C36.0615 26.6769 36.0607 27.0739 35.8167 27.3174Z"
                  fill="#505050"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="slider-container">
          <Slider {...settings} ref={trendingRef}>
            {trending.map((item) => {
              return (
                <div key={item.id} className="trending__item">
                  <div className="trending__item--content">
                    <figure className="trending__images">
                      <img src={item.img} alt={item.title} />
                    </figure>
                    <h4 className="trending__title">{item.title}</h4>
                    <div className="trending__active">
                      <p className="trending__place">{item.place}</p>
                      <p className="trending__activities">
                        {item.totalActivities}
                      </p>
                    </div>
                    <div className="trending__booking">
                      <span className="trending__price">{item.price}</span>
                      <button className="btn trending__btn">Book Now</button>
                    </div>
                    <div className="trending__logo">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon/logo.svg`}
                        alt="logo"
                      />
                      <p className="trending__logo--desc">Safe Tour Agency</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="destination">
        <div className="destination__top">
          <div className="destination__left">
            <h1 className="destination__heading">Top Destination</h1>
            <p className="destination__desc">
              Sost Brilliant reasons Entrada should be your one-stop-shop!
            </p>
          </div>
          <div className="destination__right">
            <Link href="" className="destination__link btn">
              See all destination
            </Link>
          </div>
        </div>
        <div className="destination__bottom">
          <div className="destination__container">
            {destinations.map((destination) => {
              return (
                <section
                  onMouseEnter={() => handleMouseEnter(destination.id)}
                  onMouseLeave={handleMouseLeave}
                  key={destination.id}
                  className={`destination__image destination__image${destination.id}`}
                >
                  <img
                    src={destination.img}
                    alt={destination.name}
                    className="destination__img"
                  />
                  <div className="destination__star">
                    <span className="destination__star--number">
                      {destination.reviews}
                    </span>
                  </div>
                  <div className="destination__content">
                    <p className="destination__name-place">
                      {destination.name}
                    </p>
                    <p className="destination__place--desc">
                      {destination.desc}
                    </p>
                  </div>

                  {isActive === destination.id && (
                    <div className="destination__overlay"></div>
                  )}
                  {isActive === destination.id && (
                    <button className="btn destination__more">More</button>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </div>
      <div className="type">
        <h1 className="type__heading">Tour Type</h1>
        <div className="type__list row row-cols-4">
          {types.map((type) => {
            return (
              <div className="col" key={type.id}>
                <div className="type__item">
                  <img src={type.icon} alt={type.title} />
                  <p className="type__title">{type.title}</p>
                  <p className="type__desc">
                    <span>{type.tours}</span> Tours- From
                    <span className="type__price"> {type.price}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="feedback">
        <div className="row">
          <div className="col-5">
            <figure className="feedback__image">
              <img
                src={`${process.env.PUBLIC_URL}/images/feedback/girl.svg`}
                alt="girl"
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/feedback/decor.svg`}
                alt=""
                className="feedback__decor"
              />
            </figure>
          </div>
          <div className="col-5 offset-1">
            <div className="feedback__content">
              <h1 className="feedback__heading">What our user say</h1>
              <div className="slider-container">
                <Slider {...settings2}>
                  {feedbacks.map((feedback) => {
                    return (
                      <div className="feedback__item" key={feedback.id}>
                        <p className="feedback__quote">{feedback.quote}</p>
                        <div className="feedback__user">
                          <figure className="feedback__avatar">
                            <img src={feedback.avatar} alt={feedback.name} />
                          </figure>
                          <div className="feedback__info">
                            <p className="feedback__name">{feedback.name}</p>
                            <p className="feedback__desc">{feedback.desc}</p>
                            <div className="feedback__rating">
                              <img
                                src={`${process.env.PUBLIC_URL}/images/icon/rating.svg`}
                                alt="rating"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="article">
        <div className="article__top">
          <h1 className="article__heading">Articles & Travel Guidings</h1>
          <p className="article__desc">
            Travel has helped us to understand the meaning of life and it has
            helped us become better people. Each time we travel, we see the
            world with new eyes.
          </p>
        </div>
        <div className="article__separate"></div>
        <div className="article__content">
          <div className="row">
            <div className="col-6">
              <div className="article__left">
                <figure className="article__image">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/article/image4.jpg`}
                    alt=""
                  />
                </figure>
                <section className="article__title">
                  <h4 className="article__title--heading">
                    The real voyage does not consist in seeking new
                  </h4>
                  <p className="article__date">Jun 1, 2021</p>
                </section>
                <p className="article__left--desc">
                  Excited him now natural saw passage offices you minuter. At by
                  asked being court hopes.
                </p>
              </div>
            </div>
            <div className="col-5 offset-1">
              <div className="article__list">
                {articles.map((item) => {
                  return (
                    <div className="article__item" key={item.id}>
                      <div className="article__item--image">
                        <img
                          src={item.img}
                          className="article__image"
                          alt="article__image"
                        />
                      </div>
                      <section className="article__item--content">
                        <h5 className="article__item--title">{item.title}</h5>
                        <p className="article__item--desc">{item.desc}</p>
                        <p className="article__item--date">{item.date}</p>
                      </section>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <InputFooter></InputFooter>
    </div>
  );
};

export default Home;
