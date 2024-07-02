import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <p>
              Ambitious engineering student specializing in IT with a knack for problem-solving, leadership, and effective communication.</p>
              <p>Proactive and responsible, seeking opportunities to tackle new challenges and grow professionally. </p>
              <p>
                Driven by determination and optimism, committed to personal and professional development.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};