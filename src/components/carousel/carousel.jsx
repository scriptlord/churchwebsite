import React from 'react';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselComponent = () => {
  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={2000} 
      infinite={true}
      showDots={true}
      arrows={true}
      customTransition="transform 0.5s ease-in-out"
      transitionDuration={1000}
       containerClass="carousel-container"
      itemClass="carousel-slide"
    >
      <div >
        <Image src="/images/manslide.svg" alt="Slide 1" layout="fill" className="slide-image" />
      </div>
      <div >
        <Image src="/images/worship.svg" alt="Slide 1" layout="fill" className="slide-image" />
      </div>
      <div >
      <Image src="/images/pray.svg" alt="Slide 1" layout="fill" className="slide-image" />
      </div>
      <div>
      <Image src="/images/shesmile.svg" alt="Slide 1" layout="fill" className="slide-image" />
      </div>
      <div>
      <Image src="/images/worship.svg" alt="Slide 1" layout="fill" className="slide-image" />
      </div>
    </Carousel>
  );
};



export default CarouselComponent;


