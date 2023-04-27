import React from "react";
import styles from "./Navbar.module.css";
import Logo from "./logo.jpeg";

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-light fw-bolder text-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#hero">
            <img src={Logo} className={styles.logo} alt="" />
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav m-auto">
              <a className="nav-link mx-5" aria-current='page' href="#hero">
                Home
              </a>
              <a className="nav-link mx-5" href="#services">
                Services
              </a>
              <a className="nav-link mx-5" href="#aboutus">
                About Us
              </a>
              <a className="nav-link mx-5" href="#contactus">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
