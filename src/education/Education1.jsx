import React from "react";
import "./Edu.scss";

import SRM from "../components/rive/education/SRMButton";
import UCB from "../components/rive/education/UCBButton";

export const Education = () => {
  return (
    <div className="edu">
      <h1 className="heading">Education</h1>
      <div className="ucb">
        <UCB />
      </div>
      <div className="srm">
        <SRM />
      </div>
    </div>
  );
};
