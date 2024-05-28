import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./ProjectCard.module.css";
const ProjectCard = ({projects:{title,imageSrc,description,skills,demo,source}}) => {
    
    return (
        <div className={styles.container} id='project'>
            <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image} />
            <h3 className={styles.title}>{title}</h3> 
            <div className={styles.links}>
                <a className={styles.link} href={demo}>Live link</a>
                <a className={styles.link} href={source}>Source Code</a>
            </div>
        </div>
    )
}

export default ProjectCard
