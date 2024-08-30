import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export const Blog = () => {
  const settings = {
    autoplay: true, // Kích hoạt chế độ tự động trượt
    autoplaySpeed: 2000,
    infinite: true, // Không lặp lại slider khi đến cuối
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  const [recents, setRecents] = useState([]);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/api/db.json`)
      .then((response) => response.json())
      .then((data) => {
        setRecents(data.blog.recent);
        setBlogs(data.blog.blogsItem.blogPage1);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container">
      <div className="blog">
        <div className="blog__introduce">
          <h1 className="blog__heading">Welcome to our Travel Blog</h1>
          <img
            src={`${process.env.PUBLIC_URL}/images/blog/decor.svg`}
            alt=""
            className="blog__image--decor"
          />
        </div>
        <div className="blog__popular">
          <div className="blog__container">
            <Slider {...settings}>
              {blogs.map((blog) => {
                return (
                  <div key={blog.id}>
                    <div className="blog__popular--content">
                      <figure className="blog__image-main">
                        <img
                          src={`${process.env.PUBLIC_URL}${blog.img}`}
                          alt=""
                          className="blog__image-main--img"
                        />
                      </figure>
                      <p className="blog__image--title">{blog.title}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="blog__popular--list">
            <div className="blog__list--content">
              <div className="blog__search">
                <input
                  type="text"
                  placeholder="Search Blog"
                  className="blog__search--input"
                />
                <button className="btn">Search</button>
              </div>
              <p className="blog__recent--title">Recent Blog</p>
              <div className="blog__recent">
                <div className="blog___list">
                  {recents.map((recent) => {
                    return (
                      <div key={recent.id} div className="blog__item">
                        <figure className="blog__item--image">
                          <img
                            src={`${process.env.PUBLIC_URL}${recent.img}`}
                            alt={recent.title}
                            className="blog__item--img"
                          />
                        </figure>
                        <p className="blog__item--title line-clamp">
                          {recent.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog__main">
          <div className="row row-cols-3 gy-3 row-cols-xl-2 row-cols-md-1">
            {blogs.map((blog) => {
              return (
                <div className="col" key={blog.id}>
                  <figure className="blog__image">
                    <img
                      src={`${process.env.PUBLIC_URL}${blog.img}`}
                      alt={blog.title}
                      className="blog__img"
                    />
                  </figure>
                  <section className="blog__content">
                    <Link to={"/safetourbobo/blog/content/1"}>
                      {" "}
                      <h2 className="blog__title">{blog.title}</h2>
                    </Link>
                    <p className="blog__desc line-clamp">{blog.desc}</p>
                    <Link to={"#!"} className="blog__link">
                      Read more
                    </Link>
                  </section>
                </div>
              );
            })}
          </div>
        </div>
        <div className="blog__button">
          <Link
            to={`${process.env.PUBLIC_URL}/blog/page/2`}
            className="btn blog__more"
          >
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};
