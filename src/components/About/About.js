import React from "react";
import "./About.css";
function About() {
  return (
    <div className="container-fluid about-dark" id="about">
      <div className="container  about-dark text-dark rounded pt-5 p-3">
        <h2 className="text-center mb-5 mt-5 border-bottom py-3 about-h2 text-warning">About</h2>
        <div className="row">
          <div className="col-md-6 about-section">
            <p>
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>

            <p>
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>

            <p>
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
          </div>
          <div className="col-md-6 skill rounded p-3">
            <h2 className="text-center mb-5">My Skill</h2>
            <div className="row m-3 d-flex align-items-center justify-content-between">
              <div className="col-1">HTML</div>
              <div className="col-10">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Animated striped example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="row m-3 d-flex align-items-center justify-content-between">
              <div className="col-1">CSS</div>
              <div className="col-10">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Animated striped example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="row m-3 d-flex align-items-center justify-content-between">
              <div className="col-1">REACT</div>
              <div className="col-10">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Animated striped example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="row m-3 d-flex align-items-center justify-content-between">
              <div className="col-1">JAVA</div>
              <div className="col-10">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Animated striped example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="row m-3 d-flex align-items-center justify-content-between">
              <div className="col-1">NODE Js</div>
              <div className="col-10">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Animated striped example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="row m-3 d-flex align-items-center justify-content-between">
              <div className="col-1">PYTHON </div>
              <div className="col-10">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Animated striped example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="row m-3 d-flex align-items-center justify-content-between">
              <div className="col-1">GIT</div>
              <div className="col-10">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Animated striped example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
