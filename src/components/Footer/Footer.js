import React from "react";

function Footer() {
  return (
    <div className="container-fluid bg-dark">
      <div className="container d-flex flex-column gap-3 align-items-center justify-content-center pt-5 pb-3  border-top">
        <h2 className="text-warning">Follow me</h2>
        <div className="d-flex gap-4">
          <p>
            <i class="fa-brands fa-facebook fs-2 text-white" role="button"></i>
          </p>
          <p>
            <i class="fa-brands fa-linkedin fs-2 text-white" role="button"></i>
          </p>
          <p>
            <i
              class="fa-brands fa-square-whatsapp fs-2 text-white"
              role="button"
            ></i>
          </p>
          <p>
            <i class="fa-brands fa-telegram fs-2 text-white " role="button"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
