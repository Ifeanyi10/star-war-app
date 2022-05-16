import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// import image4 from '../../../assets/images/people1.jpg';
import classes from './style.module.css';
import './../../../App.css';
import image1 from '../../../assets/images/people1.png';
import image2 from '../../../assets/images/people2.png';
import image3 from '../../../assets/images/people3.png';



const PeopleCarousal: React.FC = () => {
  const imgHeight: string = '580px';

  return (
    <Carousel autoPlay infiniteLoop dynamicHeight interval={4000} transitionTime={1000} showArrows={true} showThumbs={false}>
                <div>
                    <img src={image1} height={imgHeight} />
                    <p className="legend">There is beauty in being around community.</p>
                </div>
                <div>
                    <img src={image2} height={imgHeight}/>
                    <p className="legend">There is beauty in our diversity.</p>
                </div>
                <div>
                    <img src={image3} height={imgHeight}/>
                    <p className="legend">There is beauty in friendships.</p>
                </div>
            </Carousel>
  );
}

export default PeopleCarousal;