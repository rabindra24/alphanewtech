import React from "react";
import { motion } from "framer-motion";

const Stairs = ({ children }) => {
  //   const anim = (variants, custom) => {
  //     return {
  //       initial: "initial",
  //       animate: "enter",
  //       exit: "exit",
  //       variants,
  //       custom,
  //     };
  //   };

  //   const expand = {
  //     intial: {
  //       bottom: 0,
  //     },
  //     enter: (i) => ({
  //       bottom: "100%",
  //       transition: {
  //         duration: 0.4,
  //         delay: i,
  //       },
  //       transitionEnd: {
  //         height: 0,
  //         bottom: 0,
  //       },
  //     }),
  //     exit: (i) => ({
  //       height: "100%",
  //       transition: {
  //         duration: 0.4,
  //         delay: i,
  //       },
  //     }),
  //   };

  const anim = (variants, custom) => {
    return {
      initial: "initial",
      animate: "entry",
      exit: "exit",
      variants,
      custom,
    };
  };

  const gridAnimation = {
    intial: {
      bottom: 0,
    },
    entry: (i) => ({
      bottom: "100%",
      transition: {
        duration: 0.5,
        delay: i,
      },
      transitionEnd: {
        height: 0,
        bottom: 0,
      },
    }),
    exit: (i) => ({
      height: "100%",
      transition: {
        duration: 0.5,
        delay: i,
      },
    }),
  };

  const nbOfColumns = [0.35, 0.05, 0.45, 0.15, 0.3, 0.1, 0.25, 0.4, 0.2];

  return (
    <>
      <div className="inner stairs relative  top-0 ">
        <div className="transition-container pointer-events-none  flex w-full h-screen  fixed top-0 left-0 z-[1000]">
          {nbOfColumns.map((item, i) => {
            return (
              <motion.div
                {...anim(gridAnimation, nbOfColumns[i])}
                key={i}
                className={`bg-white  border-primary  w-full relative z-20 bottom-0`}
              />
            );
          })}
        </div>
        <div className="relative">{children}</div>
      </div>
    </>
  );
};

export default Stairs;
