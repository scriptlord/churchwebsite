import Image from 'next/image';

const EnquirySection = () => {
  return (
    <div className="enquiry-section">
      <div className="header-image">
        <Image
          src="/images/slide1.jpg"
          alt="Stunning Space Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="enquiry-text">
        CHOOSE ENQUIRY
      </div>
    </div>
  );
};

export default EnquirySection;
