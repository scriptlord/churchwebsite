import React from 'react';
import Image from 'next/image';
const FreeResources = () => {
  return (
    <div className="resources-container">
      <h1 className="resources-title">FREE RESOURCES</h1>
      <div className="resource-row">
        <div className="resource">
          <div className="podcast-image">
            <img src="/images/smile.svg"  alt="Podcast" />
          </div>
          <div className="podcast-content">
            <h2>JESUS ENCOUNTER MINISTRIES PODCAST</h2>
            <p>Tune in to the Jesus Encounter Ministries Podcast on Spotify now to listen to Apostle Mark's sermons on your daily commute.</p>
            <button className="pen-button-sm">LISTEN NOW!</button>
          </div>
        </div>
        <div className="resource">
            <div className="podcast-image">
                <img src="/images/dome.svg"  alt="Podcast" />
            </div>
            <div className="podcast-content">
                <h2>JESUS ENCOUNTER MINISTRIES PODCAST</h2>
                <p>Tune in to the Jesus Encounter Ministries Podcast on Spotify now to listen to Apostle Mark's sermons on your daily commute.</p>
                <button className="pen-button-sm">LISTEN NOW!</button>
            </div>
            </div>
      </div>
    </div>
  );
};

export default FreeResources;
