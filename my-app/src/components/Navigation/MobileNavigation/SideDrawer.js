import React from 'react';
import { Link } from "react-router-dom";
import './SideDrawer.scss';
import { motion } from "framer-motion";


const sideDrawer = props => {

    let drawerClasses = 'sideDrawer';
        if (props.show) {
            drawerClasses = 'sideDrawer open'
        }

    return (
      <nav className={drawerClasses}>
        <div className="sideDrawer__content">
          <div className="sideDrawer__content--title">JOSH OGDEN</div>
        </div>
        <div className="sideDrawer__content--items">

          <motion.button
            className="sideDrawer__content--items--item"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/">Home</Link>
          </motion.button>

          <motion.button
            className="sideDrawer__content--items--item"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/portfolio">Portfolio</Link>
          </motion.button>
          <motion.button
            className="sideDrawer__content--items--item"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/aboutme">About Me</Link>
          </motion.button>
          <motion.button
            className="sideDrawer__content--items--item"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/contactme">Contact Me</Link>
          </motion.button>
        </div>
      </nav>
    );

};

export default sideDrawer;


