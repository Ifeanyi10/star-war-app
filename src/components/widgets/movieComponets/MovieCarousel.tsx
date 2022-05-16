import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import image4 from '../../../assets/images/movie1.png';
import './../../../App.css';
import image1 from '../../../assets/images/movie1.png';
import image2 from '../../../assets/images/movie2.png';
import image3 from '../../../assets/images/movie3.png';

const MovieCarousal: React.FC = () => {
  const imgHeight: string = '580px';

  return (
    <Carousel autoPlay infiniteLoop dynamicHeight interval={4000} transitionTime={1000} showArrows={true} showThumbs={false}>
                <div>
                    <img src={image1} height={imgHeight} />
                    <p className="legend">The earth always revolves around the sun.</p>
                </div>
                <div>
                    <img src={image2} height={imgHeight}/>
                    <p className="legend">Nature is beautiful when is been preserved.</p>
                </div>
                <div>
                    <img src={image3} height={imgHeight}/>
                    <p className="legend">Let us join hands to make our wolrd a better place.</p>
                </div>
            </Carousel>
  );
}

export default MovieCarousal;