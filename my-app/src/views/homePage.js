import React, { Component } from 'react';
import './homePage.scss';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/images/Lost in Koh Mak.jpg';
import SecondImage from '../assets/images/punta-cana-dominican-republic-gettyimages-684829920_0.jpg';
import Video from '../assets/video/Background-Video-High.mp4';



class Home extends Component {
    render() {
        return (
          <div className="homePage">
            <div className="homePage__content">
              <div className="homePage__content--section">
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="auto"
                  className="test"
                  poster="../assets/images/Lost in Koh Mak.jpg"
                >
                  <source src={Video} type="video/mp4" />
                </video>
                <div className="homePage__content--section--textWrapper">
                  <h1 className="homePage__content--section--textWrapper--title">
                    JOSH OGDEN
                  </h1>
                  <h3 className="homePage__content--section--textWrapper--subtitle">
                    Create your own reality
                  </h3>
                  <button className="homePage__content--section--textWrapper--button">
                    <a
                      href="https://www.youtube.com/joshogdenn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch More
                    </a>
                  </button>
                </div>
              </div>
              <div className="homePage__content--section">
                <img
                  className="homePage__content--section--backgroundImage"
                  src={HeroImage}
                  alt="A young lady, exploring a lush green tropical forrest whilst riding on a retro moped."
                  height="100%"
                  width="100%"
                ></img>

                <div className="homePage__content--section--textWrapper">
                  <h3 className="homePage__content--section--textWrapper--paragraphTitle">
                    What can I do for you?
                  </h3>

                  <p className="homePage__content--section--textWrapper--paragraph">
                    Hey there, my name is Josh and this is just a brief
                    introduction to myself and my brand new website, which I
                    have recently created. This website is here just to be a bit
                    of a portfolio about myself and a way for possible clients
                    to see all of my best work. I have worked with a few clients
                    before but I mainly create videos for myself and my Social
                    Channels, but I would like to expand my knowledge and
                    portfolio by working with other companies and brands to help
                    promote thier buisness needs.
                  </p>
                  <p className="homePage__content--section--textWrapper--paragraph">
                    Feel free to browse my site and my social channels to see
                    more of the work I do and if you like what you see and would
                    like to colaberate or work with me. Feel free to send me a
                    message from the <Link to="/contactMe">Contact Me </Link>
                    page. I am looking forward to working with lots of new
                    people!
                  </p>
                </div>
              </div>

              <div className="homePage__content--section">
                {/* <img className="homePage__content--header--backgroundImage" src={SecondImage} alt="A young girl on a moped, exploring a lush green tropical forrest." height="100%" width="100%">
                </img>  */}

                <img
                  className="homePage__content--section--backgroundImage"
                  src={SecondImage}
                  alt="A young lady, exploring a lush green tropical forrest whilst riding on a retro moped."
                  height="100%"
                  width="100%"
                ></img>

                <div className="homePage__content--section--textWrapper">
                  <h3 className="homePage__content--section--textWrapper--paragraphTitle">
                    Testemonials
                  </h3>

                  <p className="homePage__content--section--textWrapper--paragraph">
                    "I am amazing" - Josh Ogden
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Home;