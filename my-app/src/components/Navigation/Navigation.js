import React, { Component, props}from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import DrawerToggleButton from './MobileNavigation/DrawerToggleButton';


class Navigation extends Component{

  // let last_known_scroll_position = 0;
  // let ticking = false;

  // function doSomething(scroll_pos) {
  // // Do something with the scroll position
  // }

  // window.addEventListener('scroll', function (e) {
  // last_known_scroll_position = window.scrollY;

  // if (!ticking) {
  //   window.requestAnimationFrame(function () {
  //     doSomething(last_known_scroll_position);
  //     ticking = false;
  //   });

  //   ticking = true;
  // }
  // }

  componentDidMount() {
    console.log("hello", window);
    window.addEventListener('scroll', () => {
      console.log("test");
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

  // const navigation = props => (

  //     <header className="header">
  //       <div className="header__container">
  //         <Link to="/">
  //           <h2 className="header__container--title">JOSH OGDEN</h2>
  //         </Link>

  //         <div className="header__container--mobileNav">
  //           <DrawerToggleButton click={props.drawerClickHandler} />
  //         </div>
  //       </div>

  //       <div className="nav">
  //         <nav className="nav__bar">
  //           <div>
  //             <Link to="/">Home</Link>
  //           </div>
  //           <div>
  //             <Link to="/portfolio">Portfolio</Link>
  //           </div>
  //           <div>
  //             <Link to="/aboutme">About Me</Link>
  //           </div>
  //           <div>
  //             <Link to="/contactme">Contact Me</Link>
  //           </div>
  //         </nav>
  //       </div>
  //     </header>
  //   );
  // };




export default Navigation;