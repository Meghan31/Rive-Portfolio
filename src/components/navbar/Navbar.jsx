// import "./style.css";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, x: 10 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* MEGHASRIVARDHAN . P */}
        </motion.span>
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

export default Navbar;
