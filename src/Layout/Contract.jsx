import React, { useEffect, useState } from "react";
import axiosClient from "../axios-client";

function Contract() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const url = `/user/contact`;
    axiosClient.post(url, contact).then((res) => {
      if(res.status === 200){
        alert("Send contact success");
        setContact({
          name: "",
          email: "",
          phone: "",
          content: "",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      alert("Send contact fail");
    })
    ;
  }
  return (
    <>
      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <form
                id="contact-form"
                className="contact__form"
                method="post"
                action="mail.php"
                onSubmit={onSubmit}
              >
                <div className="row">
                  <div className="col-12">
                    <div
                      className="alert alert-success contact__msg"
                      style={{ display: "none" }}
                      role="alert"
                    >
                      Your message was sent successfully.
                    </div>
                  </div>
                </div>
                <span className="text-color">Send a message</span>
                <h3 className="text-md mb-4">Contact Form</h3>
                <div className="form-group">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    value={contact.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={contact.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="phone"
                    type="phone"
                    className="form-control"
                    placeholder="Your phone number"
                    value={contact.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group-2 mb-4">
                  <textarea
                    name="content"
                    className="form-control"
                    rows="4"
                    placeholder="Your Content"
                    value={contact.content}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button className="btn btn-main" name="submit" type="submit">
                  Send Message
                </button>
              </form>
            </div>

            <div className="col-lg-5 col-sm-12">
              <div className="contact-content pl-lg-5 mt-5 mt-lg-0">
                <span className="text-muted">We are Professionals</span>
                <h2 className="mb-5 mt-2">
                  Don’t Hesitate to contact with us for any kind of information
                </h2>

                <ul className="address-block list-unstyled">
                  <li>
                    <i className="ti-direction mr-3"></i>Ho Chi Minh City, In
                    Viet Nam
                  </li>
                  <li>
                    <i className="ti-email mr-3"></i>Email: pttrungvt@gmail.com
                  </li>
                  {/* <li>
                    <i className="ti-mobile mr-3"></i>Phone:+88 01672 506 744
                  </li> */}
                </ul>

                <ul className="social-icons list-inline mt-5">
                  <li className="list-inline-item">
                    <a href={process.env.REACT_APP_LINK_FACEBOOK}>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contract;
