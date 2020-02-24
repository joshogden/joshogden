import React, { Component } from "react";
import './contactMe.scss';


class Contact extends Component {
  render() {
    return (
      <div className="contactMe">
        <div className="contactMe__content">
          <div className="contactMe__content--header">
            <h1 className="contactMe__content--header--title">CONTACT ME</h1>
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

          {/* <div className="portfolio__content--image">
            <Gallery photos={PHOTO_SET} direction="column" columns={columns} />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Contact;
