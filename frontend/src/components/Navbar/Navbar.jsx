import React from 'react'
import {useState} from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">@Parhlad_Singh</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menu.png")} alt="menu-button" onClick={()=>setMenuOpen(!menuOpen)} />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#achievement">Achievement</a></li>
                <li><a href="#contact">Contact-us</a></li>
            </ul>
            </div>
    </nav>
  )
}

export default Navbar;
