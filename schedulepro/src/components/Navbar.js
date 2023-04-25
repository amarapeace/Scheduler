import React from 'react'
import styles from './Navbar.module.css'
import Logo from './logo.jpeg'
const Navbar = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg bg-light fixed-top container fw-bolder text-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={Logo} className={styles.logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" href="#hero">
                Home
              </a>
              <a class="nav-link" href="#services">
                Services
              </a>
              <a class="nav-link" href="#aboutus">
                About Us
              </a>
              <a class="nav-link" href="#contactus">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar