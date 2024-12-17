import React from "react";
import "./Education.scss";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import EducationButton from "../components/rive/education/EducationButton";

export const Educationexample = () => {
  return (
    <div className="edu">
      {/* <EducationButton /> */}
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.2 }}
        className="education"
      >
        <div className="forrow">
          <p className="clgname">University of Colorado Boulder</p>
          <p className="place"> Boulder, CO</p>
        </div>
        <div className="forrow1">
          <p className="degree">Master of Science in Computer Science</p>

          <p className="time">Aug 2024 - Current</p>
        </div>
        <p className="cgpa">CGPA: 3.5</p>
        <p className="courses">
          Courses: Data Structures, Algorithms, Database Systems, Machine
          Learning, Natural Language Processing, Computer Vision
        </p>
      </motion.div>
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.2 }}
        className="education"
      >
        <div className="forrow">
          <p className="clgname">SRM University</p>
          <p className="place">KTR, Chennai</p>
        </div>
        <div className="forrow1">
          <p className="degree">Bachelor of Technology in Computer Science</p>

          <p className="time">Sep 2020 - Jun 2024</p>
        </div>
        <p className="cgpa">CGPA: 3.5</p>
        <p className="courses">
          Courses: Data Structures, Algorithms, Database Systems, Machine
          Learning, Natural Language Processing, Computer Vision
        </p>
      </motion.div>
    </div>
  );
};
