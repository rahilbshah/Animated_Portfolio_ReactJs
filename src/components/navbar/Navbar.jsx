import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="h-[100px] ">
      <Sidebar />
      <div className="max-w-[992px] m-auto flex items-center justify-between h-full ">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold uppercase"
        >
          Rahil Shah
        </motion.span>
        <div className="flex items-center justify-center gap-[20px]">
          <a href="">
            <img src="/facebook.png" className="w-[18px]" alt="" />
          </a>
          <a href="">
            <img src="/instagram.png" className="w-[18px]" alt="" />
          </a>
          <a href="">
            <img src="/youtube.png" className="w-[18px]" alt="" />
          </a>
          <a href="">
            <img src="/dribbble.png" className="w-[18px]" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
