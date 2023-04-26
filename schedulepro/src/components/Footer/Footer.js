import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.jpeg'
// import brandLogo from '../../assets/footer-images/BrandLogo.svg';
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import styles from './footer.module.css';

export default function Footer() {
	// footer component for external pages

	return (
    <div className={styles.footerContainer} id="contactus">
      <div className={styles.socialslogo}>
        <img src={Logo} alt="brand logo" />
      </div>
      <div className={`${styles.footer} lpContainer`}>
        <div className={styles.brandSocials}>
          <div>
            <p>
            
              SchedulePro is a task manager app that is committed to making you
              stay organized and on top of your to-do list, so you can work
              smarter and more efficiently.
            </p>
            <p>Follow us on all social media platforms</p>
            <div className={styles.socials}>
              <a href="https://github.com/amarapeace/Scheduler">
                {" "}
                <img src={facebook} alt="facebook logo" />
              </a>
              <a href="https://github.com/amarapeace/Scheduler">
                {" "}
                <img src={twitter} alt="twitter logo" />
              </a>
              <a href="https://github.com/amarapeace/Scheduler">
                {" "}
                <img src={instagram} alt="instagram logo" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.devAsk}>
          <p>More on ShedulePro</p>
          <Link to="/coming" className={styles.link}>
            Privacy Policy
          </Link>
          <Link to="/coming" className={styles.link}>
            Terms of Use
          </Link>
          <Link to="/coming" className={styles.link}>
            Cookie Policy
          </Link>
        </div>

        <div className={styles.support}>
          <p>Support</p>
          <Link to="/coming" className={styles.link}>
            How it Works
          </Link>
          <Link to="/coming" className={styles.link}>
            Help Centre
          </Link>
        </div>
      </div>
    </div>
  );
}
