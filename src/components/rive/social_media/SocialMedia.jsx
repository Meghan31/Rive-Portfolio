import React from "react";
import GitHub from "./GitHub";
import Linkedin from "./Linkedin";
import Resume from "./Resume";

export const SocialMedia = () => {
  return (
    <div>
      <div>
        <GitHub />
      </div>
      <div>
        <Linkedin />
      </div>
      <div>
        <Resume />
      </div>
    </div>
  );
};
