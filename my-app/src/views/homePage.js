import React, { Component } from 'react';
import './homePage.scss';
import HeroImage from '../assets/images/Lost in Koh Mak.jpg';


class Home extends Component {
    render() {
        return (
          <div className="homePage">
            <div className="homePage__content">
              {/* <div className="home-page__content--header"> */}
                {/* <h1 className="home-page__content--header--title">
                  JOSH OGDEN
                </h1> */}
                {/* <h3 className="home-page__content--header--subtitle">
                  Create your own reality
                </h3>
              </div> */}

              {/* <div className="home-page__content--backgroundImage">
                <img src={HeroImage} alt="" height="100%" width="100%"></img>
                <h1 className="home-page__content--header--title">
                  JOSH OGDEN
                </h1>
              </div> */}
              

              <div className="homePage__content--header">
                
                  <img className="homePage__content--header--backgroundImage" src={HeroImage} alt="" height="100%" width="100%"></img>
                  
                  <div className="homePage__content--header--textWrapper">
                  <h1 className="homePage__content--header--textWrapper--title">
                    JOSH OGDEN
                  </h1>
                  <h3 className="homePage__content--header--textWrapper--subtitle">
                    Create your own reality
                </h3>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Home;