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
    
    <div className="background-container">
    <div className="color-overlay"></div>
    <div className="overlay">
      <h1 className="overlay-title">OUR REVIVAL SERVICES AND MIRACLE MEETINGS</h1>
      <button className="pen-button">VIEW ALL EVENTS</button>
    </div>
  </div>

  );
};

export default EventCarousel;
