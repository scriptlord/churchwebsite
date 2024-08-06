import React from 'react';
import Image from 'next/image';

const EngagementOptions = () => {
  const cards = [
    {
      title: "Volunteer",
      imageUrl: "/images/slide1.jpg",
      description: "Join our volunteer team and make a difference."
    },
    {
      title: "Other",
      imageUrl: "/images/slide1.jpg",
      description: "Explore other ways to engage with our community."
    },
    {
      title: "Invite Apostle Mark to your city",
      imageUrl: "/images/slide1.jpg",
      description: "Bring the revival to your city by inviting Apostle Mark."
    },
    {
      title: "Testimony",
      imageUrl: "/images/slide1.jpg",
      description: "Share and read powerful testimonies from our community."
    },
    {
      title: "Prayer Requests",
      imageUrl: "/images/slide1.jpg",
      description: "Submit your prayer requests and pray for others."
    },
    {
      title: "Join Discipleship Group",
      imageUrl: "/images/slide1.jpg",
      description: "Join our discipleship groups and grow in faith."
    }
  ];

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        
        <div className='contact-card-item'>
         <Image src="/images/slide1.jpg" alt="Slide 1" layout="fill"   style={{objectFit: "cover"}}   />
         <p className="contact-card-title">{card.title}</p>
         <div className="overlay"></div>
        </div>
      ))}
    </div>
  );
};

export default EngagementOptions;   
