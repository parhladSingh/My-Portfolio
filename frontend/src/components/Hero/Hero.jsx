import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"
const Hero = () => {
    return (

        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hello,I'm Parhlad Singh</h1>
                <p className={styles.description}>🎓A pre-final year Computer Science Engineering student at BRCM College of Engineering and Technology, Bahal. And an enthusiastic tech lover on a mission to dive deeper into Full Stack Development.💻</p>
                <a className={styles.contactBtn} href="mailto:parhladsingh760@gmail.com">Contact Me</a>
            </div>
            <img src={getImageUrl("hero/myimg.jpg")} alt="Hero image of me" className={styles.heroImg} />
            <div className={StyleSheet.topBlur}/>
            <div className={StyleSheet.bottomBlur}/>
        </section>
    )
}

export default Hero
