import React from 'react'
import Styles from './Footer.module.css';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className={Styles.footer} id='footer'>
            <div className={Styles.topSection}>
                <div className={Styles.leftSide}>
                  <p className={Styles.para1}>Interested to work with me?</p>
                    <p className={Styles.para2}>Just drop an email : <a className={Styles.para3} href="mailto:parhladsingh760@gmail.com">parhladsingh760@gmail.com</a></p>
                </div>
                <div className={Styles.rightSide}>
                    <p className={Styles.para4}>Connect with me:</p>
                    <div className={Styles.socialIcons}>
                        <a href="https://www.linkedin.com/in/parhlad-singh" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://github.com/parhladSingh" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://x.com/Parhlad_Panghal" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://www.instagram.com/international_villager009?igsh=ZHpkOXk5bTVqbmI1" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="mailto:parhladsingh760@gmail.com"><FaEnvelope /></a>
                    </div>
                </div>
            </div>
            <hr className={Styles.divider} />
            <div className={Styles.bottomSection}>
                <p className={Styles.para5}>© All Rights Reserved</p> 
                <p className={Styles.para6}>Designed by Parhlad Singh</p>
            </div>
        </footer>
    );
}

export default Footer;
