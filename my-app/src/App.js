import React, { Component } from 'react';

import Main from './main';
import Navigation from './components/Navigation/Navigation';
import SideDrawer from './components/Navigation/MobileNavigation/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';




class App extends Component{

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render(){
    
    let backDrop = null;

    if (this.state.sideDrawerOpen){
        backDrop = <Backdrop click={this.backDropClickHandler}/>;
      }


    return (
      <div style={{ height: "100%" }} className="App">
        <Navigation drawerClickHandler={this.drawerToggleClickHandler} className="App__nav" />
        
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backDrop}

        
      
        <Main />
      </div>
    );
  }
  
}

export default App;
