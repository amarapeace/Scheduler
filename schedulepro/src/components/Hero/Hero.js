import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./hero3.module.css";
// import LandingHero from "./LandingHero.webp";
// import hero1 from "../images/hero1.jpg";
// import hero2 from "../images/hero2.jpg";
import hero4 from "../images/hero4.jpg";
import Signup from "../Signup";
import Login from "../Login";

const Hero = () => {
  const navigate = useNavigate();

  const [signupModal, setSignupModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [userList, setUserList] = useState([]);

  const toggleSignup = () => {
    setSignupModal(!signupModal);
  };
  const toggleLogin = () => {
    setLoginModal(!loginModal);
  };

  const saveUser = (userObj) => {
    let tempList = userList;
    tempList.push(userObj);
    localStorage.setItem("userList", JSON.stringify(tempList));
    setUserList(userList);
    setSignupModal(false);
  };

  const loginUser = (userObj) => {
    const storedUsers = JSON.parse(localStorage.getItem("userList"));
    if (storedUsers) {
      const storedUser = storedUsers.find(
        (user) =>
          user.email === userObj.email && user.password === userObj.password
      );
      if (storedUser) {
        console.log("Login successful!");
        setLoginModal(false);
        navigate('/todolist');
      }
      else {
        alert("Invalid credentials");
      }
    } else {
      alert("No user data found. Please sign up to continue.");
    }};

  return (
    <div className={styles.herosect} style={{ padding: "30px" }} id='hero'>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Manage your daily activity so easy</h1>
          <p>
            Enhance your productivity by tracking your schedule. The goal of
            SchedulePro is to create a seamless tracking experience of the daily
            tasks for both individuals and teams.
          </p>
          <p>New to the platform?</p>
          <button
            style={{ cursor: "pointer" }}
            type="button"
            onClick={() => setSignupModal(true)}
          >
            Get Started
          </button>
          <br />
          <br />
          <p>Already has an account? </p>
          <button
            style={{ cursor: "pointer" }}
            type="button"
            onClick={() => setLoginModal(true)}
          >
            Login
          </button>
        </div>
        <div className={styles.heroImg}>
          <img src={hero4} alt="LandingHero" />
        </div>
      </div>
      <Signup toggle={toggleSignup} modal={signupModal} save={saveUser} />
      <Login toggle={toggleLogin} modal={loginModal} login={loginUser} />
    </div>
  );
}

export default Hero;
