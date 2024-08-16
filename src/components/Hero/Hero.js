import React from "react";
import index from "../../Images/index.png";
import "./Hero.css";
function Hero() {
  return (
    <div className="container-fluid hero-dark text-dark p-5" id="home">
      <div className="container">
        <div className="row pt-5 d-flex align-items-center hero justify-content-between">
          <div className="col-md-6">
            <h2 className="hero-h2">I'am Indalu Kelbesa</h2>
            <h1 className="hero-h1">
              A web <span className="text-warning">Developer</span>
            </h1>
            <p className="lh-5 hero-p">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <p className="hero-btn">
              <button className="btn btn-primary mb-5 ">Download CV</button>
            </p>
          </div>
          <div className="col-md-6 img-container d-flex justify-content-center">
            <img src={index} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
