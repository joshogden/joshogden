import React, { Component } from "react";
import './aboutMe.scss';
import { Parallax } from "react-parallax";




class About extends Component {
  render() {
    return (
      <div className="aboutMe">
        <div className="aboutMe__content">
          <div className="aboutMe__content--header">
            <h1 className="aboutMe__content--header--title">ABOUT ME</h1>
          </div>

          <section className="aboutMe__content--ParallaxSection">
            <Parallax
              className="aboutMe__content--ParallaxSection--image"
              blur={0}
              bgImage={require("../assets/images/bike.jpg")}
              bgImageAlt="the cat"
              strength={600}
            >
              <h1 className="aboutMe__content--ParallaxSection--imageText">
                This
              </h1>
            </Parallax>
          </section>
          <section className="aboutMe__content--TextSection">
            <h2>Who am I..?</h2>
            <p>
              Hey, I'm Josh, I am currently 20 years old and live in a small
              town in Cheshire, England. I have a few interests which I really
              enjoy, these includ filming things and taking photos, I love to go
              on a good adventure, even if I do moan and complain the whole way.
              I love to explore new places and try to push myself to do new
              things (emphasis on the 'try'), I usually need a good shove to
              help me though.
            </p>
          </section>
          <section className="aboutMe__content--ParallaxSection">
            <Parallax
              className="aboutMe__content--ParallaxSection--image"
              blur={0}
              bgImage={require("../assets/images/tom&cath.jpg")}
              bgImageAlt="the cat"
              strength={600}
            >
              <h1 className="aboutMe__content--ParallaxSection--imageText">
                is
              </h1>
            </Parallax>
          </section>
          <section className="aboutMe__content--TextSection">
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
          </section>
          <section className="aboutMe__content--ParallaxSection">
            <Parallax
              className="aboutMe__content--ParallaxSection--image"
              blur={0}
              bgImage={require("../assets/images/New Zealand Coast.jpg")}
              bgImageAlt="the cat"
              strength={600}
            >
              <div style={{ height: 700 }}>
                <h1 className="aboutMe__content--ParallaxSection--imageText">
                  the Life
                </h1>
              </div>
            </Parallax>
          </section>
          <section className="aboutMe__content--TextSection">
            <h2>Future</h2>
            <p>
              To be honest, I don't know what my future will hold, I mean who
              does? No one. I just have a few things I guess I would like to
              accomplish in the near future at least. First of all I really want
              to learn how to SKydive on my own!! I have done a Tandem Skydive
              when I was in New Zealand but I want to take it to the next level
              and do my AFF Skydiving Course.
            </p>
          </section>
        </div>
      </div>
    );
    

  }

  
}


export default About;
