import { useState } from "react";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion } from "framer-motion";
const variants = {
  open: {
    clipPath: "circle(1000px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(20px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-white text-black"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        variants={variants}
        className="fixed top-0 left-0 bottom-0 mobile:w-[200px] w-[300px] bg-white text-black"
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
