// import React from 'react';
// import skills from "../../data/skills.json";
// import  getImageURL  from "../../utils";

// const Experience = () => {
//   return (
//     <section id='experience'>
//         <h2>Experience</h2>
//         <div>
//             <div>
//                {skills.map((skill,id) => {
//                     return (
//                     <div key={id}>
//                         <div><img src={getImageURL(skill.imageSrc)} alt={skills.title} /></div>
//                         <p>{skill.title}</p>
//                     </div>
//                     );
//                 })
//                 }

//             </div>
//         </div>

//     </section>
//   )
// }

// export default Experience;
import React from 'react';
import skills from "../../data/skills.json";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils"; // Correct import

const Experience = () => {
  return (
    <section id='skills' className={styles.container}>
      <h2 className={styles.title}>My Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img 
                  src={getImageUrl(skill.imageSrc)} 
                  alt={skill.title} 
                //   style={{ width: skill.width }} // Dynamically set width
                />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
