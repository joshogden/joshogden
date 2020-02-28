import React, { Component }from 'react';
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

  // constructor(props) {
  //   super(props);
  //   this.state = { showNav: false };
  // }

  // componentDidMount() {
    
  //   window.addEventListener('scroll', () => {
      
  //     if(window.pageYOffset > 200 && {showNav:false}){
  //       this.setState({showNav: true})
  //     }
  //     if (window.pageYOffset < 200 && { showNav: true }){
  //       this.setState({showNav: false})
  //     }
  //   })
  // }

  render() {
    return(
      
      // !this.state.showNav ? null : 
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