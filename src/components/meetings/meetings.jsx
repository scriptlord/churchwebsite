const responsive = {
    superLargeDesktop: {
      // For very large screens
      breakpoint: { max: 4000, min: 3000 },
      items: 3  // Display 3 items
    },
    desktop: {
      // For standard desktop screens
      breakpoint: { max: 3000, min: 1024 },
      items: 3  // Display 3 items
    },
    tablet: {
      // For tablets
      breakpoint: { max: 1024, min: 464 },
      items: 2  // Display 2 items
    },
    mobile: {
      // For mobile devices
      breakpoint: { max: 464, min: 0 },
      items: 1  // Display 1 item
    }
  };
  

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

const EventCarousel = () => {
  const events = [
    {
      id: 1,
      city: "Croatia",
      imageUrl: "/images/slide2.jpg",
      description: "Croatia Revival Miracle Meetings.",
      link: "https://example.com/register/croatia"
    },
    {
      id: 2,
      city: "Melbourne",
      imageUrl: "/images/slide2.jpg",
      description: "Melbourne (West) Revival Miracle Meetings.",
      link: "https://example.com/register/melbourne"
    },
    {
      id: 3,
      city: "Gold Coast",
      imageUrl: "/images/slide2.jpg",
      description: "Gold Coast Revival Miracle Meetings.",
      link: "https://example.com/register/gold-coast"
    },
  ];

  return (
    <div>
      <h1 className="carousel-title">PHYSICAL & ONLINE REVIVAL MIRACLE MEETINGS</h1>
      <Carousel
        responsive={responsive}
        ssr
        infinite
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 0.5s ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
      >
        {events.map(event => (
          <div key={event.id} className="carousel-item">
            <Image src={event.imageUrl} alt={event.city} width={800} height={500} layout='responsive' />
            <div className="event-info">
              <h2>{event.city}</h2>
              <p>{event.description}</p>
              <a href={event.link} className="details-register">Details & Register</a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default EventCarousel;
