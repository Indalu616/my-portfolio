import React from "react";
import "./Services.css";
function Services() {
  return (
    <div className="container-fluid service-dark pt-5 pb-5 ps-3 pe-3">
      <div className="container m-auto">
        <h2 className="text-center text-warning service-h2 mb-5">
          My Services
        </h2>
        <div className="row">
          <div className="mb-4 col-sm-5 col-md-3 d-flex flex-column gap-3 align-items-center justify-content-center service rounded me-2 pt-4">
            <div className="icon">
              <i class="fa-solid fa-code fs-1 text-white"></i>
            </div>
            <h5 className="text-center text-warning">Web Development</h5>
            <p className="text-center">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end.
            </p>
          </div>
          <div className="mb-4 col-sm-5 col-md-3 d-flex flex-column gap-3 align-items-center justify-content-center service rounded pt-4">
            <div className="icon">
              <i class="fa-solid fa-mobile-screen-button fs-1 text-white"></i>
            </div>
            <h5 className="text-center text-warning">Mobile app Development</h5>
            <p className="text-center">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open responsive grid
              system,
            </p>
          </div>
          <div className="mb-4 col-sm-5 col-md-3 d-flex flex-column gap-3 align-items-center justify-content-center service rounded  pt-4">
            <div className="icon">
              <i class="fa-solid fa-building-user fs-1 text-white"></i>
            </div>
            <h4 className="text-center text-warning">UX/UI Design </h4>
            <p className="text-center">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end responsive grid
              system,
            </p>
          </div>
          <div className="mb-4 col-sm-5 col-md-3 d-flex flex-column gap-3 align-items-center justify-content-center service rounded  pt-4">
            <div className="icon">
              <i class="fa-solid fa-desktop fs-1 text-white"></i>
            </div>
            <h5 className="text-center text-warning">Destop app Development</h5>
            <p className="text-center">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
