import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="h-[calc(100vh-100px)] bg-gradient-to-b from-[#0c0c1d] relative to-[#111132] overflow-hidden">
      <div className="max-w-[992px] h-full m-auto ">
        <motion.div
          className="h-full flex flex-col justify-center gap-[20px] w-[50%]"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            variants={textVariants}
            className="text-[30px] text-[#663399] tracking-[5px] font-bold"
          >
            RAHIL SHAH
          </motion.h2>
          <motion.h1 variants={textVariants} className="text-[48px] font-bold">
            From Frontend to Backend: Showcasing My Full-Stack Expertis
          </motion.h1>
          <motion.div variants={textVariants} className="flex gap-[15px]">
            <motion.button
              className="p-[10px] border-[1px] cursor-pointer font-light rounded-[10px] bg-transparent text-white "
              variants={textVariants}
            >
              See the Latest Works
            </motion.button>
            <motion.button
              className="p-[10px] border-[1px] cursor-pointer font-normal rounded-[10px] bg-white text-black "
              variants={textVariants}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
            className="w-[50px]"
          />
        </motion.div>
      </div>
      <motion.div
        className="absolute text-[50vh] bottom-[-120px] whitespace-nowrap text-[#ffffff09] w-[50%] font-bold "
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Full Stack Developer
      </motion.div>
      <div className="h-full absolute top-0 right-0">
        <img src="/hero.png" alt="hero" className="h-full" />
      </div>
    </div>
  );
};

export default Hero;
