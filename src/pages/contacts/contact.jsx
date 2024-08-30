import React, { useEffect, useState } from "react";
import { Validation } from "./validate";
import Header from "../../layouts/header/header";
import Footer from "../../layouts/footer/footer";

const Contact = () => {
  const [infos, setInfos] = useState([]);
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/api/db.json`)
      .then((response) => response.json())
      .then((data) => setInfos(data.contact.info))
      .catch((error) => console.log(error));
  }, []);
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const handleChange = (e) => {
    console.log(e.target.name);
    setValues({
      ...values, // sao chép lại đối tượng cũ
      [e.target.name]: e.target.value, // cập nhật giá trị dựa trên name
    });
  };
  console.log(values);
  const [errors, setError] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(Validation(values));
  };
  console.log(errors.name);
  return (
    <>
      <div className="contact__cover">
        <Header></Header>
        <div className="contact__heading-cover">
          <h1 className="contact__heading-layout">Contact us</h1>
        </div>
        <picture className="contact__background">
          <source
            media="(max-width:767.98px)"
            srcSet={`${process.env.PUBLIC_URL}/images/destination/slider1.png`}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/destination/slider.png`}
            alt=""
            className="contact__slider"
          />
        </picture>
      </div>
      <div className="contact__content">
        <div className="row">
          <div className="col-6 col-lg-12">
            <div className="contact__information">
              <div className="contact__list-info">
                {infos.map((info) => {
                  return (
                    <div key={info.id} className="contact__item-info">
                      <img
                        src={`${process.env.PUBLIC_URL}${info.icon}`}
                        alt=""
                        className="contact__item--icon"
                      />
                      <p className="contact__item--text">{info.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-12">
            <div className="contact__wrap">
              <form className="contact__handle" onSubmit={handleSubmit}>
                <div className="contact__input-wrap">
                  <input
                    type="text"
                    name="name"
                    className={`contact__input ${
                      errors.name ? "contact__input-border--error" : ""
                    }`}
                    placeholder="Name"
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icon/error.svg`}
                      alt=""
                      className="contact__error"
                    />
                  )}

                  {errors.name && (
                    <p className="contact__error--text">{errors.name}</p>
                  )}
                </div>
                <div className="contact__input-wrap">
                  <input
                    type="email"
                    name="email"
                    className={`contact__input ${
                      errors.email ? "contact__input-border--error" : ""
                    }`}
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icon/error.svg`}
                      alt=""
                      className="contact__error"
                    />
                  )}
                  {errors.email && (
                    <p className="contact__error--text">{errors.email}</p>
                  )}
                </div>
                <div className="contact__input-wrap">
                  <input
                    type="subject"
                    name="subject"
                    className={`contact__input ${
                      errors.subject ? "contact__input-border--error" : ""
                    }`}
                    placeholder="Subject"
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icon/error.svg`}
                      alt=""
                      className="contact__error"
                    />
                  )}
                  {errors.subject && (
                    <p className="contact__error--text">{errors.subject}</p>
                  )}
                </div>
                <textarea
                  name=""
                  id=""
                  placeholder="Message"
                  className="contact__textarea"
                ></textarea>
                <button className="btn contact__btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="contact__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5505299784535!2d105.74301377513575!3d21.05318619057786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134555bb755d27f%3A0x23752bb1b4cc7cb7!2sHanoi%20University%20of%20Industry!5e0!3m2!1sen!2s!4v1693403192581!5m2!1sen!2s"
          width="100%"
          height="510p"
          loading="lazy"
          title="Google Map of HauI "
        ></iframe>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contact;
