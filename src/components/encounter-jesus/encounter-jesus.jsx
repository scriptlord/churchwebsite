import React from 'react';

const videos = [
  {
    id: 1,
    title: "HEALED OF SEVERE ALZHEIMER'S. Ha...",
    url: "https://www.youtube.com/embed/qUVgAih13sg?si=yVmbLp3JhBVq1LC_",
  },
  {
    id: 2,
    title: "CONFESSION PROSTITUTION",
    url: "https://www.youtube.com/embed/1KiZZKWf3y0",
  },
  {
    id: 3,
    title: "PASTOR ASKS FOR PRAYER GROUP HEALED OF CANCER!",
    url: "https://www.youtube.com/embed/7M47fc_GB_4",
  },
  {
    id: 4,
    title: "BARREN 7 YEARS",
    url: "https://www.youtube.com/embed/p8VF6yUj3Cw",
  }
];

const VideoGallery = () => {
  return (
    <div className="video-gallery">
      <h2 className="video-gallery-title">AN ENCOUNTER WITH JESUS IS LIFE CHANGING</h2>
      <div className="video-gallery-videos">
        {videos.map((video) => (
          <div key={video.id} className="video-gallery-video">
            <iframe
              src={video.url}
              title={video.title}
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;

