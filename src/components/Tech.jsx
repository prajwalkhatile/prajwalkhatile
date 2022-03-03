import React from "react";
import "../css/tech.css";
import js from "../icons/js.png";
import bootstrap from "../icons/bootstrap.jpg";
import css from "../icons/css.png";
import db from "../icons/db.png";
import ex from "../icons/express.jpg";
import git from "../icons/github.png";
import html from "../icons/html.png";
import ui from "../icons/materialui.png";
import node from "../icons/node.png";
import react from "../icons/react.png";
import git3 from "../icons/git3.png";
import cpp from "../icons/cpp.png";

const Tech = () => {
  return (
    <div>
      <div className=" title">
        <h1>Tech I'm familiar with</h1>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="d-flex skill">
              <img className="logo_style" src={cpp} alt="c" /> <p>C</p>
            </div>
            <div className="d-flex skill">
              <img className="logo_style" src={react} alt="react" />{" "}
              <p>React</p>
            </div>
            <div className="d-flex skill">
              <img className="logo_style" src={git} alt="git" /> <p>Github</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4  mt-md-0">
            <div className="d-flex skill">
              <img className="logo_style" src={js} alt="javascripr" />{" "}
              <p>Javascript</p>
            </div>
            <div className="d-flex skill">
              <img className="logo_style" src={node} alt="node" /> <p>Node</p>
            </div>
            <div className="d-flex skill">
              <img className="logo_style" src={bootstrap} alt="bs" />{" "}
              <p>Bootstrap</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4  mt-md-0">
            {" "}
            <div className="d-flex skill">
              <img className="logo_style" src={html} alt="html" /> <p>HTML</p>
            </div>
            <div className="d-flex skill">
              <img className="logo_style" src={ex} alt="Express" />{" "}
              <p>Express</p>
            </div>
            <div className="d-flex skill">
              <img className="logo_style" src={ui} alt="UI" />{" "}
              <p>Material UI</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4   mt-md-0">
            {" "}
            <div className="d-flex skill">
              <img className="logo_style" src={css} alt="css" /> <p>CSS</p>
            </div>
            <div className="d-flex skill">
              <img className="logo_style" src={db} alt="db" /> <p>MongoDB</p>
            </div>
            <div className="d-flex skill">
              <img className="logo_style" src={git3} alt="Figma" /> <p>git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
