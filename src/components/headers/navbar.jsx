import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => setIsActive(!isActive);

  return (
    <nav className="navbar-wrapper">
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="d-flex align-items-center">
          <span className="logo" style={{ position: 'relative', height: '50px' }}>
            <Image 
              src="/images/logo.svg" 
              alt="Logo" 
              fill
              style={{ objectFit: "contain" }}
            />
          </span>
          <p className="mb-0 ms-2 text-white fw-bold fs-3"> HOPFAN.<span className="fs-5">CH</span> </p>
        </div>
        <div className="d-none d-lg-flex align-items-center">
          <div className="d-flex gap-4 align-items-center">
            <Link href="/" className="text-white text-decoration-none fw-bold">HOME</Link>
            <Link href="#" className="text-white text-decoration-none fw-bold">ABOUT</Link>
            <Link href="/schedule" className="text-white text-decoration-none fw-bold">SCHEDULE</Link>
            <Link href="/faq" className="text-white text-decoration-none fw-bold">FAQS</Link>
            <Link href="/testimonies" className="text-white text-decoration-none fw-bold">TESTIMONIES</Link>
            <Link href="/contact" className="text-white text-decoration-none fw-bold">CONTACT US</Link>
            <Link  href="/donate" className="text-white text-decoration-none fw-bold">
            <button className="nav-button donate-button">Donate</button>
            </Link>
          </div>
        </div>
        <button className="d-lg-none menu-button" onClick={toggle}>
          {isActive ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
        </button>
      </div>
      <div
        className={`d-lg-none d-flex justify-content-lg-end align-items-center align-items-lg-start flex-column flex-lg-row gap-4 end-0 links-wrapper ${
          isActive ? "active" : ""
        }`}
      >
        <Link href="#">HOME</Link>
        <Link href="#">ABOUT</Link>
        <Link href="/schedule">SCHEDULE</Link>
        <Link href="/faq">FAQS</Link>
        <Link href="/testimonies">TESTIMONIES</Link>
        <Link href="/contact">CONTACT US</Link>
        <button className="nav-button">Volunteer</button>
        <button href="/donate" className="nav-button donate-button">Donate</button>
      </div>
    </nav>
  );
};

export default Navbar;
