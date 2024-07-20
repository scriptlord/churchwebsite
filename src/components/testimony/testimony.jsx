import React from 'react';
import PropTypes from 'prop-types';

const Testimony = ({ quote, author, occupation, videoUrl }) => {
  return (
    <div className="testimony-wrapper my-5">
      <div className="testimony-box pt-5">
        <div>
          <p>{quote}</p>
          <h5>{author}</h5>
          <small>{occupation}</small>
        </div>
      </div>
      <div className="testimony-box">
        <div className="video-gallery-video" style={{ width: '100%', height: '18.75rem', maxWidth: '43.75rem', margin: '0 auto' }}>
          <iframe
            src={videoUrl}
            title={author}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ width: '100%', height: '100%' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

Testimony.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
};

export default Testimony;
