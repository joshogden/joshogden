import React, { Component } from "react";
import './contactMe.scss';
import Image from '../assets/images/josh.jpg'



class Contact extends Component {
  render() {
    return (
      <div className="contactMe">
        <div className="contactMe__content">
          <div className="contactMe__content--header">
            <h1 className="contactMe__content--header--title">CONTACT ME</h1>
          </div>
          <div className="contactMe__content--formWrapper">
            <form className="contactMe__content--formWrapper--form">
              <label className="contactMe__content--formWrapper--form--field">
                <input type="text" name="name" placeholder="Your Name" />
              </label>
              <label className="contactMe__content--formWrapper--form--field">
                <input type="text" name="email" placeholder="Your Email" />
              </label>
              <label className="contactMe__content--formWrapper--form--textarea">
                <textarea
                className=""
                  type="text"
                  name="textarea"
                  placeholder="Your Message"
                ></textarea>
              </label>

              <input
                type="submit"
                value="Submit"
                className="contactMe__content--formWrapper--form--submit"
              />
            </form>

            <img
              className="contactMe__content--formWrapper--image"
              src={Image}
              alt=""
              width="300px"
            ></img>
          </div>

          <h3>Follow Me on Social Media</h3>
          <li>
            <a
              href="https://www.youtube.com/joshogdenn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/_joshogden"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/_joshogden"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </div>
      </div>
    );
  }
}

export default Contact;
