import React from 'react';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section social">
        <h3>SOCIAL</h3>
        <div className="social-icons">
            <Link href="#" className="me-4 icon">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link href="#" className="me-4 icon">
              <i className="bi bi-youtube"></i>
            </Link>
            <Link href="#" className="me-4 icon">
                  <i className="bi bi-tiktok"></i>
            </Link>
            <Link href="#" className="icon">
              <i className="bi bi-spotify"></i>
            </Link>
        </div>
      </div>
      <div className="footer-section events">
        <h3>UPCOMING EVENTS</h3>
        <ul>
          <li>Online Revival Miracle Meetings combined with the Slovakian event.</li>
          <li>Slovakia Revival Miracle Meetings 6 pm Fri July 12th, & 6 pm July 13th.</li>
        </ul>
      </div>
      <div className="footer-section navigation">
        <h3>NAVIGATION</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Podcasts</li>
          <li>Testimonies</li>
          <li>FAQs</li>
          <li>Schedule</li>
          <li>Donate</li>
        </ul>
      </div>
      <div className="footer-section contact">
        <h3>GET IN TOUCH</h3>
        <ul>
          <li>Testimonies</li>
          <li>Volunteer</li>
          <li>Prayer Requests</li>
          <li>Book Public Meeting</li>
          <li>Other</li>
        </ul>
      </div>
      
    </footer>
  );
};

export default Footer;


// import React from 'react';
// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <footer className="footer-container">
//       <div className="footer-section social">
//         <h3>SOCIAL</h3>
//         <div className="social-icons">
//           <Link href="https://www.facebook.com">
//             <a className="icon"><i className="bi bi-facebook"></i></a>
//           </Link>
//           <Link href="https://www.youtube.com">
//             <a className="icon"><i className="bi bi-youtube"></i></a>
//           </Link>
//           <Link href="https://www.tiktok.com">
//             <a className="icon"><i className="bi bi-tiktok"></i></a>
//           </Link>
//           <Link href="https://www.spotify.com">
//             <a className="icon"><i className="bi bi-spotify"></i></a>
//           </Link>
//         </div>
//       </div>
//       {/* Additional footer sections can follow the similar structure */}
      
//     </footer>
//   );
// };

// export default Footer;
