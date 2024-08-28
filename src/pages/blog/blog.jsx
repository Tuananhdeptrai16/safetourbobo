import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const Blog = () => {
  const [recents, setRecents] = useState([]);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/api/db.json`)
      .then((response) => response.json())
      .then((data) => {
        setRecents(data.blog.recent);
        setBlogs(data.blog.blogsItem.blogPage1);
      });
  }, []);
  console.log(blogs);
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
          <div className="blog__popular--content">
            <figure className="blog__image-main">
              <img
                src={`${process.env.PUBLIC_URL}/images/blog/cover.png`}
                alt=""
                className="blog__image-main--img"
              />
            </figure>
            <p className="blog__image--title">
              Exploring Argentina and Chile by Bus
            </p>
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
                        <p className="blog__item--title">{recent.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog__main">
          <div className="row row-cols-3 gy-3">
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
                    <h2 className="blog__title">{blog.title}</h2>
                    <p className="blog__desc">{blog.desc}</p>
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
