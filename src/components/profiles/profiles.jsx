import React from 'react';

const ProfileCard = ({ name, description, imageSrc, imgHeight, marginBottom, backgroundColor }) => {
  return (
    <div className="profile">
      <img src={imageSrc} alt={name} style={{ height: imgHeight, width: '100%', marginBottom, objectFit: 'cover',  borderRadius: '10px'  }} />
      <h2 className='white'>{name}</h2>
      <hr className='profile-underline' />
      <p className='white'>{description}</p>
    </div>
  );
};

const ProfileGallery = () => {
  return (
    <div className="profile-container">
      <ProfileCard
        name="Apostle Mark Hemans"
        description="It is my passion that people have a life changing encounter with Jesus Christ in the power of His Holy Spirit. Jesus Encounter Ministries was established in 2004 by myself in response to a divine dream to go to Borneo."
        imageSrc="/images/pastor.jpeg"
        imgHeight="500px"
        marginBottom="2rem"
        
      />
      <ProfileCard
        name="Sarah Hemans"
        description="Sarah Hemans is an anointed Worship Minister, set on glorifying the name of Jesus Christ through triumphant praise and Spirit-filled, intimate worship. Her passion in life is to live a life holy and pleasing unto the Lord."
        imageSrc="/images/pastor.jpeg"
        imgHeight="500px"
        marginBottom="2rem"
        
      />
    </div>
  );
};

export default ProfileGallery;
