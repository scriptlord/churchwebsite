import React, { useState } from "react";
import styles from "./Navbar.module.scss";

function Navbar() {
  const [active, setActive] = useState(styles.nav__menu);
  const [icon, setIcon] = useState(styles.nav__toggler);

  const navToggle = () => {
    if (active === styles.nav__menu) {
      setActive(`${styles.nav__menu} ${styles.nav__active}`);
    } else setActive(styles.nav__menu);

    // Icon Toggler
    if (icon === styles.nav__toggler) {
      setIcon(`${styles.nav__toggler} ${styles.toggle}`);
    } else setIcon(styles.nav__toggler);
  };

  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.nav__brand}>
        herdoy
      </a>
      <ul className={active}>
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
            Portfolio
          </a>
        </li>
        <li className={styles.nav__item}>
          <a href="#" className={styles.nav__link}>
            Skills
          </a>
        </li>
        <li className={styles.nav__item}>
          <a href="#" className={styles.nav__link}>
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
    </nav>
  );
}

export default Navbar;
