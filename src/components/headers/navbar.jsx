// import React, { useState } from "react";
// import styles from "./Navbar.module.scss";

// function Navbar() {
//   const [active, setActive] = useState(styles.nav__menu);
//   const [icon, setIcon] = useState(styles.nav__toggler);

//   const navToggle = () => {
//     if (active === styles.nav__menu) {
//       setActive(`${styles.nav__menu} ${styles.nav__active}`);
//     } else setActive(styles.nav__menu);

//     // Icon Toggler
//     if (icon === styles.nav__toggler) {
//       setIcon(`${styles.nav__toggler} ${styles.toggle}`);
//     } else setIcon(styles.nav__toggler);
//   };

//   return (
//     <nav className={styles.nav}>
//       <a href="#" className={styles.nav__brand}>
//         herdoy
//       </a>
//       <ul className={active}>
//         <li className={styles.nav__item}>
//           <a href="#" className={styles.nav__link}>
//             Home
//           </a>
//         </li>
//         <li className={styles.nav__item}>
//           <a href="#" className={styles.nav__link}>
//             About
//           </a>
//         </li>
//         <li className={styles.nav__item}>
//           <a href="#" className={styles.nav__link}>
//             Schedule
//           </a>
//         </li>
//         <li className={styles.nav__item}>
//           <a href="#" className={styles.nav__link}>
//             FAQS
//           </a>
//         </li>
//         <li className={styles.nav__item}>
//           <a href="#" className={styles.nav__link}>
//             Testimonies
//           </a>
//         </li>
//         <li className={styles.nav__item}>
//           <a href="#" className={styles.nav__link}>
//             Contact Us
//           </a>
//         </li>
//         <li className={styles.nav__item}>
//           <a href="#" className={styles.nav__link}>
//             Donate
//           </a>
//         </li>
//       </ul>
//       <div onClick={navToggle} className={icon}>
//         <div className={styles.line1}></div>
//         <div className={styles.line2}></div>
//         <div className={styles.line3}></div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import React, { useState } from "react";
import styles from "./Navbar.module.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const navToggle = () => setActive(!active);

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__top}>
        <a href="#" className={styles.nav__brand}>
          <img src="logo.png" alt="JEM Logo" className={styles.nav__logo} />
        </a>
        <div className={styles.nav__actions}>
          <button className={styles.nav__volunteer}>Volunteer</button>
          <button className={styles.nav__donate}>Donate</button>
          <div className={styles.nav__socials}>
            <a href="#" className={styles.nav__social}><i className="fab fa-facebook"></i></a>
            <a href="#" className={styles.nav__social}><i className="fab fa-youtube"></i></a>
            <a href="#" className={styles.nav__social}><i className="fab fa-tiktok"></i></a>
            <a href="#" className={styles.nav__social}><i className="fab fa-spotify"></i></a>
          </div>
        </div>
        <div onClick={navToggle} className={`${styles.nav__toggler} ${active ? styles.toggle : ""}`}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
      </div>
      <div className={`${styles.nav__bottom} ${active ? styles.nav__active : ""}`}>
        <ul className={styles.nav__menu}>
          <li className={styles.nav__item}>
            <a href="#" className={styles.nav__link}>
              Home
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#" className={styles.nav__link}>
              About
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#" className={styles.nav__link}>
              Schedule
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#" className={styles.nav__link}>
              FAQs
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#" className={styles.nav__link}>
              Resources
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#" className={styles.nav__link}>
              Testimonies
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#" className={styles.nav__link}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
