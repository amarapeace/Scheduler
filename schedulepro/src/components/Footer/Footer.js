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
    <div className={styles.footerContainer} id='contactus'>
      <div className={`${styles.footer} lpContainer`}>
        <div className={styles.brandSocials}>
          <div className={styles.socialslogo}>
            <img src={Logo} alt="brand logo" />
          </div>
          <p>
            SchedulePro is a task manager app that is committed to making you
            stay organized and on top of your to-do list, so you can work
            smarter and more efficiently.
          </p>
          <p>Follow us on all social media platforms</p>
          <div className={styles.socials}>
            <img src={facebook} alt="facebook logo" />
            <img src={twitter} alt="twitter logo" />
            <img src={instagram} alt="instagram logo" />
          </div>
        </div>

        <div className={styles.product}>
          <p>Product</p>
          <Link to="teams-page" className={styles.link}>
            Team
          </Link>
        </div>

        <div className={styles.company}>
          <p>Company</p>
          <Link to="/" className={styles.link}>
            About
          </Link>
          <Link to="blog-page" className={styles.link}>
            Blog
          </Link>
          <Link to="pricing-page" className={styles.link}>
            Pricing
          </Link>
        </div>

        <div className={styles.devAsk}>
          <p>More on DevAsk</p>
          <Link to="/" className={styles.link}>
            Privacy Policy
          </Link>
          <Link to="terms-of-use" className={styles.link}>
            Terms of Use
          </Link>
          <Link to="cookie-policy" className={styles.link}>
            Cookie Policy
          </Link>
        </div>

        <div className={styles.support}>
          <p>Support</p>
          <Link to="how-it-works" className={styles.link}>
            How it Works
          </Link>
          <Link to="help-center" className={styles.link}>
            Help Centre
          </Link>
        </div>
      </div>
    </div>
  );
}
