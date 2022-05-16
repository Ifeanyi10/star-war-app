import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// import image1 from '../../assets/images/1.jpg';
import classes from './style.module.css';
import './../../../App.css';
import image1 from '../../../assets/images/planet1.png';
import image2 from '../../../assets/images/planet2.png';
import image3 from '../../../assets/images/planet3.png';

const PlanetCarousal: React.FC = () => {
  const imgHeight: string = '580px';

  return (
    <Carousel autoPlay infiniteLoop dynamicHeight interval={4000} transitionTime={1000} showArrows={true} showThumbs={false}>
                <div>
                    <img src={image1} height={imgHeight} />
                    <p className="legend">Improving the technology of recording video.</p>
                </div>
                <div>
                    <img src={image2} height={imgHeight}/>
                    <p className="legend">Find time to relax with a movie.</p>
                </div>
                <div>
                    <img src={image3} height={imgHeight}/>
                    <p className="legend">There are lots of beautiful cinimas in town.</p>
                </div>
            </Carousel>
  );
}

export default PlanetCarousal;