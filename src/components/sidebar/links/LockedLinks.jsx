import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const LockedLinks = () => {
  const items = [
    "Home",
    // , "Projects", "Experience", "About", "Contact"
  ];

  return (
    <div>
      {/* <motion.div className="links" variants={variants}>
        {items.map((item) => (
          <motion.a
            href={`#${item}`}
            key={item}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {item}
          </motion.a>
        ))}
      </motion.div> */}
      <motion.div className="links" variants={variants}>
        <motion.img
          src="assets/images/Lockprojects.png"
          style={{ width: "190px", height: "70px" }}
          alt="Locked Projects"
          whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.9  }}
          whileTap={{ scale: 0.9, rotate: 30, rotateY: 180 }}
        ></motion.img>

        <motion.img
          src="assets/images/Lockexperience.png"
          style={{ width: "250px", height: "100px" }}
          alt="Locked Experience"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: -30, rotateX: 180 }}
        ></motion.img>

        <motion.img
          src="assets/images/Lockabout.png"
          style={{ width: "150px", height: "70px" }}
          alt="Locked About"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: 30, rotateY: 180 }}
        ></motion.img>
        <motion.img
          src="assets/images/Lockcontact.png"
          style={{ width: "170px", height: "70px" }}
          alt="Locked Contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: -30, rotateX: 180 }}
        ></motion.img>
      </motion.div>
    </div>
  );
};

export default LockedLinks;
