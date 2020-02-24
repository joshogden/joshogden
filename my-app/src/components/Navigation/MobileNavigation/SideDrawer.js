import React from 'react';
import { Link } from "react-router-dom";
import './SideDrawer.scss';


const sideDrawer = props => {

    let drawerClasses = 'sideDrawer';
        if (props.show) {
            drawerClasses = 'sideDrawer open'
        }

    return (
    <nav className={drawerClasses}>
        <div className="sideDrawer__title">JOSH OGDEN</div>

        <div className="sideDrawer__items">
        <Link className="sideDrawer__items--item" to="/" >
            Home
        </Link>

        <Link className="sideDrawer__items--item" to="/portfolio">
            Portfolio
        </Link>

        <Link className="sideDrawer__items--item" to="/aboutme">
            About Me
        </Link>

        <Link className="sideDrawer__items--item" to="/contactme">
            Contact Me
        </Link>
        </div>
    </nav>
    );

};

export default sideDrawer;