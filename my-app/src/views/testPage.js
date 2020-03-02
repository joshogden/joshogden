import React, { useRef } from "react";
import './testPage.scss';
import { motion, useMotionValue, useTransform } from "framer-motion";




const TestPage = () => {

  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const rotateY = useTransform(x, [-200, 0, 200], [-45, 0, 45], {
  clamp: false

  

});

    return (
      <div className="testPage">
        <div className="testPage__content">
          <div className="testPage__content--header">
            <h1 className="testPage__content--header--title">Test Page</h1>
          </div>
          <div>
            <motion.div
              className="testcontainer"
              ref={constraintsRef}
              style={{ rotateY }}
            >
              <motion.div
                className="testitem"
                drag="x"
                dragConstraints={constraintsRef}
                style={{ x }}
              />
            </motion.div>

            <motion.button
              className="testbutton"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            >
              Hello
            </motion.button>
          </div>
        </div>
      </div>
    );
  
}



export default TestPage;

