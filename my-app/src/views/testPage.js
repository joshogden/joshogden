import React, { Component } from "react";
import './aboutMe.scss';
import {Parallax} from 'react-parallax';



class AboutCopy extends Component {
  render() {
    return (
      <div className="aboutMe">
        <div className="aboutMe__content">
          <div className="aboutMe__content--header">
            <h1 className="aboutMe__content--header--title">ABOUT ME</h1>
          </div>

          <div className="aboutMe__content--ParallaxSection">
            <Parallax
              className="aboutMe__content--ParallaxSection--image"
              blur={0}
              bgImage={require("../assets/images/bike.jpg")}
              bgImageAlt="the cat"
              strength={900}
            >
              <h1 className="aboutMe__content--ParallaxSection--imageText">
                "I am amazing" - Josh Ogden
              </h1>
            </Parallax>
          </div>
          <div className="aboutMe__content--TextSection">
            <h2>Leaving the nest</h2>
            <p>
              I grew up in the small town of Congleton and have since been all
              around the world. Just a few years ago I made the big decision to
              not go to University and to travel around Australasia and South
              East Asia for 4 months with some close friends. This was an
              incredible experience which I documented on my YouTube Channel{" "}
              <a
                href="https://www.youtube.com/user/SpaceJumpFilms/playlists"
                target="blank"
              >
                here
              </a>
              .{" "}
            </p>
            <p>
              We tried to make the most of our time travelling by splitting up
              the time in a few countires that we all wanted to visit. We spent
              1 month in New Zealand and another month on the east coast of
              Australia, this was by far the most expensive 2 months and a lot
              of travelling around was done in order to try and see everything.
              For the remainder of the trip we took things a little slower and
              travelled to Bali, Singapore, Thailand and Sri Lanka. These were
              some incredible countires and I wish I had some more time to
              explore them deeper, as theyhave so much to offer.
            </p>
          </div>
          <div className="aboutMe__content--ParallaxSection">
            <Parallax
              className="aboutMe__content--ParallaxSection--image"
              blur={0}
              bgImage={require("../assets/images/tom&cath.jpg")}
              bgImageAlt="the cat"
              strength={900}
            >
              <h1 className="aboutMe__content--ParallaxSection--imageText">
                "I am amazing" - Josh Ogden
              </h1>
            </Parallax>
          </div>
          <div className="aboutMe__content--TextSection">
            <h2>Leaving the nest</h2>
            <p>
              I grew up in the small town of Congleton and have since been all
              around the world. Just a few years ago I made the big decision to
              not go to University and to travel around Australasia and South
              East Asia for 4 months with some close friends. This was an
              incredible experience which I documented on my YouTube Channel{" "}
              <a
                href="https://www.youtube.com/user/SpaceJumpFilms/playlists"
                target="blank"
              >
                here
              </a>
              .{" "}
            </p>
            <p>
              We tried to make the most of our time travelling by splitting up
              the time in a few countires that we all wanted to visit. We spent
              1 month in New Zealand and another month on the east coast of
              Australia, this was by far the most expensive 2 months and a lot
              of travelling around was done in order to try and see everything.
              For the remainder of the trip we took things a little slower and
              travelled to Bali, Singapore, Thailand and Sri Lanka. These were
              some incredible countires and I wish I had some more time to
              explore them deeper, as theyhave so much to offer.
            </p>
          </div>
          <div className="aboutMe__content--ParallaxSection">
            <Parallax
              className="aboutMe__content--ParallaxSection--image"
              blur={0}
              bgImage={require("../assets/images/New Zealand Coast.jpg")}
              bgImageAlt="the cat"
              strength={900}
            >
              <h1 className="aboutMe__content--ParallaxSection--imageText">
                "I am amazing" - Josh Ogden
              </h1>
            </Parallax>
          </div>
          <div className="aboutMe__content--TextSection">
            <h2>Leaving the nest</h2>
            <p>
              I grew up in the small town of Congleton and have since been all
              around the world. Just a few years ago I made the big decision to
              not go to University and to travel around Australasia and South
              East Asia for 4 months with some close friends. This was an
              incredible experience which I documented on my YouTube Channel{" "}
              <a
                href="https://www.youtube.com/user/SpaceJumpFilms/playlists"
                target="blank"
              >
                here
              </a>
              .{" "}
            </p>
            <p>
              We tried to make the most of our time travelling by splitting up
              the time in a few countires that we all wanted to visit. We spent
              1 month in New Zealand and another month on the east coast of
              Australia, this was by far the most expensive 2 months and a lot
              of travelling around was done in order to try and see everything.
              For the remainder of the trip we took things a little slower and
              travelled to Bali, Singapore, Thailand and Sri Lanka. These were
              some incredible countires and I wish I had some more time to
              explore them deeper, as theyhave so much to offer.
            </p>
          </div>
        </div>
      </div>
    );
  }
}


export default AboutCopy;
