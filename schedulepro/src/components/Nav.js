import React from "react";
import styles from "./Navbar.module.css";
import Logo from "./logo.jpeg";

const Navbar = () => {
  return (
    <div className="container head">
      <nav className="navbar navbar-expand-lg bg-light fixed-top container fw-bolder text-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Logo} className={styles.logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav m-auto">
              <a className="nav-link mx-5" href="#hero">
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
    </div>
  );
};

export default Navbar;
