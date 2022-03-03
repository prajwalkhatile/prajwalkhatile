import React from "react";
import "../css/body.css";
import prajwal from "../images/prajwal.jpg";
import resume from "../pdfFolder/myResume.pdf";

const Body = () => {
  return (
    <div className="container">
      <div className="row vertical-center">
        <div className="col-lg-8 col-md-6 col-sm-12 ">
          <div className="inner_container">
            <h1>Prajwal khatile</h1>
            <p>
              {" "}
              I am a web developer with a good knowledge in front end and back
              end languages, responsive frameworks, databases, and best code
              practices.
            </p>

            <a href={resume} download="Resume.pdf">
              <button type="button" type="submit" className="btn btn-secondary">
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="inner_container2">
            <img src={prajwal} alt="prajwal" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
