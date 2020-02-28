import React, { Component } from "react";
import './portfolio.scss';
import Gallery from "react-photo-gallery";
import PuntaCanaImage from "../assets/images/punta-cana-dominican-republic-gettyimages-684829920_0.jpg";
import CouplesImage from "../assets/images/Top-Travel-Couples-Lebuzz-Header-1920x1126.jpg";
import CocaCola from "../assets/images/coca-cola.jpg";
import CocaCola2 from "../assets/images/coca-cola2.jpg";
import Bike from "../assets/images/bike.jpg";
import HangingMan from "../assets/images/hanging-man.jpg";
import Sunset from "../assets/images/sunset.jpg";
import TanishaBench from "../assets/images/tanisha-bench.jpg";
import TomCath from "../assets/images/tom&cath.jpg";

import BeforeAfterSlider from 'react-before-after-slider'





class Portfolio extends Component {
  render() {

    const before = '../assets/images/bike.jpg'
    const after = '../assets/images/coca-cola.jpg'

    return (
      <div className="portfolio">
        <div className="portfolio__content">
          <div className="portfolio__content--header">
            <h1 className="portfolio__content--header--title">PORTFOLIO</h1>
          </div>

          <div className="portfolio__content--imageGallery">
            <Gallery photos={PHOTO_SET} direction="column" columns={columns} />
          </div>
          <div className="portfolio__content--youtubeVideo">
            <iframe title="48 Hours In Prauge" width="560" height="315" src="https://www.youtube.com/embed/Fz95ixvxfIU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>

            
            
          </div>
          <BeforeAfterSlider
              before={before}
              after={after}
              width={640}
              height={480}
              className="beforeAfterSlider"
            />
        </div>
      </div>
    );
  }

  
}


  const PHOTO_SET = [
    {
      src: PuntaCanaImage,
      width: 4,
      height: 3
    },
    {
      src: CouplesImage,
      width: 16,
      height: 9
    },
    {
      src: CocaCola,
      width: 16,
      height: 11
    },
    {
      src: Bike,
      width: 4,
      height: 3
    },
    {
      src: HangingMan,
      width: 10,
      height: 16,
      
    },
    {
      src: Sunset,
      width: 4,
      height: 3
    },
    {
      src: TomCath,
      width: 16,
      height: 10
    },
    {
      src: TanishaBench,
      width: 16,
      height: 11
    },
    {
      src: CocaCola2,
      width: 16,
      height: 10
    },
  ];

  

  function columns(containerWidth) {
    let columns = 1;
    if (containerWidth >= 500) columns = 2;
    if (containerWidth >= 900) columns = 3;
    if (containerWidth >= 1500) columns = 4;
    return columns;
  }



export default Portfolio;


