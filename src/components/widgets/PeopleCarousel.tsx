import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// import image1 from '../../assets/images/1.jpg';
import classes from './style.module.css';
import './../../App.css';
import image1 from '../../assets/images/people1.jpg';
import image2 from '../../assets/images/people2.jpg';
import image3 from '../../assets/images/people3.jpg';

const PeopleCarousal: React.FC = () => {
  const imgHeight: string = '580px';

  return (
    <Carousel autoPlay infiniteLoop stopOnHover={false} dynamicHeight interval={4000} transitionTime={1000} showArrows={true} showThumbs={false}>
                <div>
                    <img src={image1} height={imgHeight} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={image2} height={imgHeight}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image3} height={imgHeight}/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
  );
}

export default PeopleCarousal;