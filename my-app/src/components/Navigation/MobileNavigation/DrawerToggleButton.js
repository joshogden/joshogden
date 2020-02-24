import React from 'react';
import './DrawerToggleButton.scss';

const drawerToggleButton = props => (
  <button className="toggleButton" onClick={props.click}>
    <div className="toggleButton__line" />
    <div className="toggleButton__line" />
    <div className="toggleButton__line" />
  </button>
);

export default drawerToggleButton;