import React, { Component } from 'react';
import './homePage.scss';
import HeroImage from '../assets/images/Lost in Koh Mak.jpg';
import SecondImage from '../assets/images/Top-Travel-Couples-Lebuzz-Header-1920x1126.jpg';


class Home extends Component {
    render() {
        return (
          <div className="homePage">
            <div className="homePage__content">
              <div className="homePage__content--header">  
                  <img className="homePage__content--header--backgroundImage" src={HeroImage} alt="A young lady, exploring a lush green tropical forrest whilst riding on a retro moped." height="100%" width="100%">
                  </img>
                 
                  <div className="homePage__content--header--textWrapper">
                    <h1 className="homePage__content--header--textWrapper--title">
                      JOSH OGDEN
                    </h1>
                    <h3 className="homePage__content--header--textWrapper--subtitle">
                      Create your own reality
                  </h3>
                </div>
              </div>
              <img className="homePage__content--header--backgroundImage" src={SecondImage} alt="A young girl on a moped, exploring a lush green tropical forrest." height="100%" width="100%">
                </img> 
            </div>
          </div>
        );
    }
}

export default Home;