import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <h2 className='text-center py-5 text-white'>Want to get updates from us?</h2>
      <div className='d-flex flex-column justify-content-center align-items-center w-100 mb-5'>
        <div className="input-group w-50 mb-2">
          <input type="text" className="form-control no-outline" placeholder="Enter Email Address" aria-label="Email address" aria-describedby="basic-addon2"/>
          <button className="normal-btn py-3 px-4" type="button" id="button-addon2">Subscribe</button>
        </div>
        <small className="text-center text-white px-3">By subscribing to our Newsletter, you consent to receiving recurring automated messages (e.g. programme reminders) via automated technology</small>
      </div>
      <div className="container py-4 px-4 px-md-5">
        <div className="row">
          <div className="col-md-3 offset-md-1 text-white">
            <h3 className="fw-bold mb-3">UPCOMING EVENTS</h3>
            <p className="mb-2">Online Revival Miracle Meetings combined with the Slovakian event.</p>
            <p>Slovakia Revival Miracle Meetings:<br/>
               6pm Friday, July 12th &<br/>
               6pm Saturday, July 13th</p>
          </div>
          <div className="col-md-3 offset-md-1 text-white">
            <h3 className="fw-bold mb-3">NAVIGATION</h3>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">About</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Podcast</a></li>
              <li><a href="#" className="text-white text-decoration-none">Testimonies</a></li>
            </ul>
          </div>
          <div className="col-md-3 offset-md-1 text-white">
            <h3 className="fw-bold mb-3">GET IN TOUCH</h3>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Testimonies</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Volunteer</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Prayer Request</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Book Public Meeting</a></li>
              <li><a href="#" className="text-white text-decoration-none">Other</a></li>
            </ul>
          </div>
        </div>
      </div>
        <div className="container">
            <div className="d-flex align-items-center mx-auto justify-content-center">
              <div>
                  <div>
                    <p className="mb-0 ms-2 text-white fw-bold fs-3"> HOPFAN.<span className="fs-5">CH</span> </p>
                  </div>
              </div>
             <div className="social-icons p-3">
                <a href="#" className="text-white me-3"><i className="bi bi-facebook fs-4"></i></a>
                <a href="#" className="text-white me-3"><i className="bi bi-twitter fs-4"></i></a>
                <a href="#" className="text-white"><i className="bi bi-youtube fs-4"></i></a>
            </div>
            </div>
        </div>
      <p className="text-center text-white mb-0 copyright py-4 mt-5">
              © 2024. HOPFAN.CH All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;