import React from 'react';

// Individual Info Column Component
const InfoColumn = ({ title, content }) => (
  <div className="info-column">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

// Main Section Component
const InfoSection = () => {
  const infoData = [
    {
      title: "LOVE OFFERING",
      content: "No entrance fee is charged at any meetings. Thank you for your financial support of the ministry which operates by faith in Jesus. A love offering is received online here."
    },
    {
      title: "ONLINE MEETINGS",
      content: "Most physical events are now combined with the online meetings with breakout rooms with prayer helpers who pray for everyone. Apostle Mark receives testimonies from those online, as well as praying corporately for the online attendees."
    },
    {
      title: "PREPARE",
      content: "For the event please watch some of the testimonies and teachings on the Jesus Encounter Ministries YouTube channel. Read the FAQS page on this website before attending. It contains important information regarding registration for meetings, filming of the meetings, special needs children, who Pastor Mark prays for, power manifestations, and more."
    }
  ];

  return (
    <div className="info-section">
      {infoData.map((info, index) => (
        <InfoColumn key={index} title={info.title} content={info.content} />
      ))}
    </div>
  );
};

export default InfoSection;
