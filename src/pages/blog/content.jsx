import React, { useState, useEffect } from "react";
export const BlogContent = () => {
  const [recents, setRecents] = useState([]);
  const [contents, setContents] = useState([]);
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/api/db.json`)
      .then((response) => response.json())
      .then((data) => {
        setRecents(data.blog.recent);
        setContents(data.blog.blogsContents.blogContent1);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container">
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
          <div className="blog__content-main">
            {contents.map((content) => {
              return (
                <div className="" key={content.id}>
                  <h3 className="blog__content--heading">{content.heading1}</h3>
                  <p className="blog__content--text">{content.content1}</p>
                  <h3 className="blog__content--heading">{content.heading2}</h3>
                  <img
                    src={`${process.env.PUBLIC_URL}${content.image1}`}
                    alt=""
                    className="blog__content--image"
                  />
                  <p className="blog__content--text">{content.content2}</p>
                  <h3 className="blog__content--heading">{content.heading3}</h3>
                  <div className="row row-cols-2 gy-3 gy-md-1">
                    <div className="col">
                      <img
                        src={`${process.env.PUBLIC_URL}${content.image2}`}
                        alt=""
                        className="blog__content--layout"
                      />
                    </div>
                    <div className="col">
                      <img
                        src={`${process.env.PUBLIC_URL}${content.image3}`}
                        alt=""
                        className="blog__content--layout"
                      />
                    </div>
                    <div className="col">
                      <img
                        src={`${process.env.PUBLIC_URL}${content.image4}`}
                        alt=""
                        className="blog__content--layout"
                      />
                    </div>
                    <div className="col">
                      <img
                        src={`${process.env.PUBLIC_URL}${content.image5}`}
                        alt=""
                        className="blog__content--layout"
                      />
                    </div>
                    <p className="blog__content--text">{content.content3}</p>
                  </div>
                </div>
              );
            })}
          </div>
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
    </div>
  );
};
