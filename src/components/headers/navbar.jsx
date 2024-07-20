import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => setIsActive(!isActive);

  return (
    <nav className="navbar-wrapper">
      <div className="d-flex justify-content-between align-items-center">
        <span className={`d-inline-block position-relative logo`}>
          <Image src="/images/logo.webp" alt="" fill  style={{objectFit: "cover"}}/>
        </span>
        <button className="d-lg-none menu-button" onClick={toggle}>
          {isActive ? <i class="bi bi-x"></i> : <i class="bi bi-list"></i>}
        </button>
        <div className="d-none d-lg-flex align-items-center gap-3">
          <button className="nav-button volunteer-button">Volunteer</button>
          <button className="nav-button donate-button">Donate</button>
          <div>
            <Link href="#" className="me-4 social-icon">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link href="#" className="me-4 social-icon">
              <i className="bi bi-youtube"></i>
            </Link>
            <Link href="#" className="me-4 social-icon">
                  <i class="bi bi-tiktok"></i>
            </Link>
            <Link href="#" className="social-icon">
              <i class="bi bi-spotify"></i>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`d-flex justify-content-lg-end align-items-center align-items-lg-start flex-column flex-lg-row gap-4 end-0 links-wrapper ${
          isActive ? "active" : ""
        }`}
      >
        <Link href="#">HOME</Link>
        <Link href="#">ABOUT</Link>
        <Link href="#">SCHEDULE</Link>
        <Link href="#">FAQS</Link>
        <Link href="/testimonies">TESTIMONIES</Link>
        <Link href="/contact">CONTACT US</Link>
        <button className="d-inline d-lg-none nav-button">Volunteer</button>
        <button className="d-inline d-lg-none nav-button donate-button">Donate</button>
      </div>
    </nav>
  );
};

export default Navbar;
