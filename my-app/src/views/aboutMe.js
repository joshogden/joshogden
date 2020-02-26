import React, { Component } from "react";
import './aboutMe.scss';



class About extends Component {
  render() {
    return (
      <div className="aboutMe">
        <div className="aboutMe__content">
          <div className="aboutMe__content--header">
            <h1 className="aboutMe__content--header--title">ABOUT ME</h1>
          </div>

          <section class="module parallax parallax-1">
            <div class="container">
              <h1>This</h1>
            </div>
          </section>
          {/* <!--first section --> */}
          <section class="module content">
            <div class="container">
              <h2>Who are you..?</h2>
              <p>
                Hey, I'm Josh, I am currently 20 years old and live in a small town in Cheshire, England. I have a few interests which I really enjoy, these includ filming things and taking photos, I love to go on a good adventure, even if I do moan and complain the whole way. I love to explore new places and try to push myself to do new things (emphasis on the 'try'), I usually need a good shove to help me though. 
              </p>
            </div>
          </section>
          {/* <!--Grand Canyon content --> */}

          <section class="module parallax parallax-2">
            <div class="container">
              <h1>Is</h1>
            </div>
          </section>
          {/* <!-- end of rocky mountains --> */}

          <section class="module content">
            <div class="container">
              <h2>Leaving the nest</h2>
              <p>
                I grew up in the small town of Congleton and have since been all around the world. Just a few years ago I made the big decision to not go to University and to travel around Australasia and South East Asia for 4 months with some close friends. This was an incredible experience which I documented on my YouTube Channel <a href="https://www.youtube.com/user/SpaceJumpFilms/playlists" target="blank">here</a>.  </p>
                <p>We tried to make the most of our time travelling by splitting up the time in a few countires that we all wanted to visit. We spent 1 month in New Zealand and another month on the east coast of Australia, this was by far the most expensive 2 months and a lot of travelling around was done in order to try and see everything. For the remainder of the trip we took things a little slower and travelled to Bali, Singapore, Thailand and Sri Lanka. These were some incredible countires and I wish I had some more time to explore them deeper.
              </p>
            </div>
          </section>
          {/* <!-- end Rocky Mountain content --> */}

          <section class="module parallax parallax-3">
            <div class="container">
              <h1>Me.</h1>
            </div>
          </section>

          <section class="module content">
            <div class="container">
              <h2>Future</h2>
              <p>
                Niagara Falls is the collective name for three waterfalls that
                straddle the international border between Canada and the United
                States; more specifically, between the province of Ontario and
                the state of New York. They form the southern end of the Niagara
                Gorge.
              </p>
            </div>
          </section>
        </div>
      </div>
    );
    

  }

  
}


export default About;
