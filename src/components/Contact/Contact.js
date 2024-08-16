import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="container-fluid py-5 about-dark" id="contact">
      <h2 className="text-center mt-5 contact-h2 text-warning mb-5">Contact</h2>
      <div className="container text-dark">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center flex-column">
            <h3 className="text-center text-primary mb-4">
              Get in touch with me
            </h3>
            <div className=" mb-3">
              <p>
                <span>
                  <i class="fa-solid fa-envelope me-2 text-primary"></i>
                </span>{" "}
                endalukalbesa511@gmail.com
              </p>
              <p>
                <span>
                  <i class="fa-solid fa-phone me-2 text-primary"></i>
                </span>{" "}
                +971509223870
              </p>
              <p>
                <span>
                  <i class="fa-solid fa-location-dot me-2 text-primary"></i>
                </span>{" "}
                UAE, Abu Dhabi
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>

            <div className="mb-3">
              <label for="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder="your phone"
              />
            </div>

            <div className="mb-3">
              <label for="message" className="form-label">
                Leave a message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
              ></textarea>
            </div>
            <button className="btn btn-primary">Send me message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
