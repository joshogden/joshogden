import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import DrawerToggleButton from './MobileNavigation/DrawerToggleButton';


class Navigation extends Component{

  componentDidMount() {
    console.log(this.props);
    window.addEventListener('scroll', () => {
      console.log(window);
    })
  }

  render() {
    return(
      
      <header className = "header" >
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
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/portfolio">Portfolio</Link>
          </div>
          <div>
            <Link to="/aboutme">About Me</Link>
          </div>
          <div>
            <Link to="/contactme">Contact Me</Link>
          </div>
        </nav>
      </div>
      </header >
    )
  }
 
};

export default Navigation;