import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
export const Hero = () => {
  return  (
    <section className={styles.container} id="home">
      <div className={styles.content}> 
        <h1 className={styles.title}>Hi, I'm P Sreenidhi</h1>
        <p className={styles.description}>
        Open Source Contributor | Proficient in Java, Python, SQL, Web Dev, React Js and Data Science | Leader Enthusiast | IT Student at Anurag University
        </p>
        <a href="/Resume_Sreenidhi.pdf" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
     
      <img
        src={getImageUrl("hero/imagedemo.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
        
    </section>
  );
};

export default Hero;
