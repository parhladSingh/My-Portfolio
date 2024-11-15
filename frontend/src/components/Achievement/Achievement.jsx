import React from 'react'
import styles from './Achievement.module.css'
import { getImageUrl } from '../../utils';

const Achievement = () => {
  return (
    <section className={styles.container} id='achievement'>
      <h2 className={styles.title}>My Achievement</h2>
      <div className={styles.content}>
        <img src={getImageUrl("achievement/hackUniv.png")} alt="Me sitting with a laptop" className={styles.AchievementImage} />
        <div className={styles.EducationItemText}>
          <h2 className={styles.Achievementheading}>Got 1st rank in hackUniv. </h2>
          <p className={styles.Achievementpara}> hackUniv, a inter university hackathon organized by Repozitory Technologies Pvt. Ltd.</p>
          <a href=" https://lnkd.in/gkQmA-ws" className={styles.Achievementbtn}>Know more</a>

        </div>
      </div>
    </section>
  )
}

export default Achievement




