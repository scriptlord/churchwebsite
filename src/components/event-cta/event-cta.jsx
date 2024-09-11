import React from 'react';

const EventCTA = () => {
  return (
    <div className="cta-container">
      <h2 className="cta-text">PLANNING ON ATTENDING AN EVENT?</h2>
      <button className="pen-button" onClick={() => window.location.href = '/faqs'}>READ OUR FAQS</button>
    </div>
  );
};

export default EventCTA;
