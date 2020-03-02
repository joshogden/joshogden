import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import DrawerToggleButton from './MobileNavigation/DrawerToggleButton';
import { motion } from "framer-motion";



class Navigation extends Component{



  render() {
    return (
      // !this.state.showNav ? null :
      <header className="header">
        <div className="header__container">
          <Link to="/">
            <h2 className="header__container--title">JOSH OGDEN</h2>
          </Link>

          <div className="header__container--mobileNav">
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
        </div>

        <div className="nav">
          <nav className="nav__bar">
            <motion.button
              className="item"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/">Home</Link>
            </motion.button>

            <motion.button
              className="item"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/portfolio">Portfolio</Link>
            </motion.button>
            <motion.button
              className="item"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/aboutme">About Me</Link>
            </motion.button>
            <motion.button
              className="item"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/contactme">Contact Me</Link>
            </motion.button>
          </nav>
        </div>
      </header>
    );
  }
 
};

export default Navigation;