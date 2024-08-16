import React from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Navbar() {
  return (
    <nav className="nav-dark d-flex align-items-center border-bottom pt-4 text-dark">
      <div className="container d-flex align-items-center justify-content-between  nav">
        <h2>
          Port<span className="text-warning">Folio</span>
        </h2>
        <div className="p-3 d-flex align-items-center justify-content-end gap-3 .links">
          <p className="fs-6 fw-2 ">
            <AnchorLink href="#home" className="link">Home</AnchorLink>
          </p>
          <p className="fs-6 fw-2 ">
            <AnchorLink href="#about" off-set="100" className="link">
              About
            </AnchorLink>
          </p>
          <p className="fs-6 fw-2 ">
            <AnchorLink href="#work" off-set="100" className="link">
              Portfolio
            </AnchorLink>
          </p>
          <p className="fs-6 fw-2 ">
            <AnchorLink href="#contact" off-set="100" className="link">
              Contact
            </AnchorLink>
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
