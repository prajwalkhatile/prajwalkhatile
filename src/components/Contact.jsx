import React from "react";
import "../css/contact.css";
import insta from "../icons/instagram.png";
import mail from "../icons/gmail.png";
// import link from "../icons/linkedin.png";
import git from "../icons/github2.png";

const Contact = () => {
  return (
    <div>
      <div className="title">
        <h1>Contact</h1>

        <h4 className="my-3 px-5">Let's connect on</h4>
      </div>

      <div className="connection d-flex mb-5">
        <div className="style_img">
          <a href="https://www.instagram.com/prajwalkhatile/" target="_blank">
            <img src={insta} alt="instagrma" />
          </a>
        </div>
        <div className="style_img">
          <a href="mailto:prajwalkhatile@gmial.com" target="_blank">
            <img src={mail} alt="gmail" />
          </a>
        </div>
        <div className="style_img">
          <a href="https://www.github.com/prajwalkhatile/" target="_blank">
            <img src={git} alt="github" />
          </a>
        </div>
        {/* <div className="style_img">
          <a
            href="https://www.linkedin.com/in/tingu-ram-030087207/"
            target="_blank"
          >
            <img src={link} alt="linkedin" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
