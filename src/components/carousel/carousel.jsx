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
    //   autoPlay={true}
    //   autoPlaySpeed={2000} 
      infinite={true}
      showDots={true}
      arrows={true}
    //   customTransition="all .5"
    //   transitionDuration={1000}
    containerClass="carousel-container"
      itemClass="carousel-slide"
    >
      <div  style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Image src="/images/slide1.jpg" alt="Slide 1" layout="fill" className="slide-image" />
      </div>
      <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#e0e0e0' }}>
        <Image src="/images/slide2.jpg" alt="Slide 1" layout="fill" className="slide-image" />
      </div>
      <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#d5d5d5' }}>
      <Image src="/images/slide1.jpg" alt="Slide 1" layout="fill" className="slide-image" />
      </div>
      <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#c0c0c0' }}>
      <Image src="/images/slide2.jpg" alt="Slide 1" layout="fill" className="slide-image" />
      </div>
      <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#b5b5b5' }}>
      <Image src="/images/slide1.jpg" alt="Slide 1" layout="fill" className="slide-image" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
