import React from 'react'
import styles from "./Hero/hero3.module.css";
import LandingHero from "./Hero/LandingHero.webp";
import hero1 from "../components/images/hero1.jpg";


const Aboutus = () => {
  return (
    <div className={styles.herosect} style={{ padding: "30px" }} id='aboutus'>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>About Us</h1>
          <p>
            SchedulePro is a web application inspired by the need to help users
            effectively manage their time, increase productivity, and reduce
            stress. Our app offers a clean and user-friendly features that allow
            users to organize their tasks, projects, and deadlines in one place,
            with the ability to easily create, edit and delete tasks as needed
            to help them work smarter.
          </p>
        </div>
        <div className={styles.heroImg}>
          <img src={hero1} alt="LandingHero" />
        </div>
      </div>
    </div>
  );
}

export default Aboutus