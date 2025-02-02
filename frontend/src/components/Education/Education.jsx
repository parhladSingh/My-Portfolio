import React from 'react'
import styles from './Education.module.css';
import { getImageUrl } from '../../utils';

const Education = () => {
    return (

        <section className={styles.container} id='education'>
            <h2 className={styles.title}>Education</h2>
            <div className={styles.content}>

                <ul className={styles.EducationItems}>
                    <li className={styles.EducationItem}><img src={getImageUrl("education/brcmlogo.png")} alt="Cursor icon" />
                        <div className={styles.EducationItemText}>
                            <h2>BRCM college of Engineering and Technology , Bahal</h2>
                            <h3>Bachelor of Technology - BTech,<br />Computer Science</h3>
                            <br />
                            <h5>Oct 2021 - Present(Expected: May 2025)</h5>
                            <br />
                            <p>Grade : Current CGPA - 8.83</p>
                        </div>
                    </li>

                    <li className={styles.EducationItem}><img src={getImageUrl("education/School.png")} alt="" />
                        <div className={styles.EducationItemText}>
                            <h2>PS Navyug Senior Secondary School ,Tosham</h2>
                            <h3>12th Non Medical (PCM)</h3>
                            <br />
                            <h5>April 2019 - May 2020</h5>
                            <br />
                            <p>Grade :87% in 12th (HBSE)</p>
                        </div>
                    </li>

                    <li className={styles.EducationItem}><img src={getImageUrl("education/School.png")} alt="Cursor icon" />
                        <div className={styles.EducationItemText}>
                            <h2>Captain High School ,<br /> Tosham</h2>
                            <h3>10th</h3>
                            <br />
                            <h5>April 2017 - May 2018</h5>
                            <br />
                            <p>Grade :89% in 10th (HBSE)</p>
                        </div>
                    </li>
                </ul>

                <div className={styles.EducationRight}>
                    <img src={getImageUrl("education/parhlad.png")} alt="Me sitting with a laptop" className={styles.EducationImage} />
                    <a href='https://drive.google.com/drive/folders/1xx915An3P2MWO_V-aqJkPoRwUVbOGuSt?usp=drive_link' className={styles.DownloadBtn} target='_blank'>Download Resume</a>
                </div>
            </div>
        </section>
    )
}

export default Education
