import "./projects.scss";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div>
      <div className="folders">
        <motion.div
          className="app"
          initial={{ opacity: 1, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>Flutter(App Dev)</p>
        </motion.div>
        <motion.div
          className="web"
          initial={{ opacity: 1, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>React (Web Dev)</p>
        </motion.div>
        <motion.div
          className="ml"
          initial={{ opacity: 1, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>Machine learning</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
