import React from "react";
import motion from "framer-motion";

const Stairs = ({ children }) => {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const expand = {
    intial: {
      top: 0,
    },
    enter: {
      top: "100%",
      transition: {
        duration: 0.4,
      },
    },
  };

  const nbOfColumns = [1, 2, 2, 2, 2];

  return (
    <>
      <div className="inner stairs">
        <div className="transition-container">
          {nbOfColumns.map((item, i) => {
            return (
              <motion.div
                {...anim(expand)}
                key={i}
                className="text-white"
              ></motion.div>
            );
          })}
        </div>
        {children}
      </div>
    </>
  );
};

export default Stairs;
