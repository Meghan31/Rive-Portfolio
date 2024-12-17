import React from "react";
import Name from "../rive/home/Name";
import { SocialMedia } from "../rive/social_media/SocialMedia";
import GitHub from "../rive/social_media/GitHub";
import Linkedin from "../rive/social_media/Linkedin";
import Resume from "../rive/social_media/Resume";
import "./details.scss";

const Details = () => {
  return (
    <div className="right-section">
      {/* <p class="section-text-p1">Hello, I'm</p> */}
      <img src="assets/images/Whitehello.jpg" alt="Logo" className="hello-im" />
      <Name />
      <p class="section-text-p2">I'm a Developer / Designer / Student</p>
      {/* <SocialMedia />
      <GitHub />
      <Linkedin />
      <Resume /> */}
      <div className="buttons">
        <GitHub />
        <Linkedin />
        <Resume />
      </div>
    </div>
  );
};

export default Details;
