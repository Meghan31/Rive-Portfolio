import React from "react";
import { motion } from "framer-motion";
import "./navbar.scss";
const Test = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <div className="wrapper">
        <span>MEGHASRIVARDHAN . P</span>
        <div className="header">
          <motion.a
            className="header1"
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            Home
          </motion.a>
          <motion.a
            className="header2"
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.4 }}
          >
            Projects
          </motion.a>
          <motion.a
            className="header3"
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.6 }}
          >
            Experience
          </motion.a>
          <motion.a
            className="header4"
            href="#"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          >
            About
          </motion.a>
          <motion.a
            className="header5"
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            Contact
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Test;
