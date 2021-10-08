import React from "react";
import "../css/about.css";

const About = () => {
  return (
    <div container>
      <div className="title">
        <h1>About me</h1>
      </div>
      <div className="row mt-5 ">
        <div className="left_container col-lg-6">
          <h2>Hello!</h2>
          <div className="mt-5">
            <p>
              My name is Prajwal. I’m from Maharashtra,IN. I'm student of
              Computer science and Engineering💻. I'm deeply passionate about
              web development . Currently looking for opportunity to serve as
              web development intern.
            </p>
          </div>
        </div>
        <div className="skill_title col-lg-6 ">
          <h2>My Skills</h2>
          <div className="skill_container my-5">
            <div className="my-3">
              {" "}
              <h5>Frontend</h5>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="my-3">
              {" "}
              <h5> Backend</h5>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            <div className="my-3">
              {" "}
              <h5> Git & Github</h5>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
