import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./hero3.module.css";
import LandingHero from "./LandingHero.webp";
import Signup from "../Signup";
import Login from "../Login";

function Hero() {
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
    const storedUser = storedUsers.find(
      (user) =>
        user.email === userObj.email && user.password === userObj.password
    );
    if (storedUser) {
      console.log("Login successful!");
      setLoginModal(false);
      navigate("/TodoList");
    } else {
      console.log("Invalid credentials");
    }
  };

  return (
    <div className={styles.herosect}>
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
          <img src={LandingHero} alt="LandingHero" />
        </div>
      </div>
      <Signup toggle={toggleSignup} modal={signupModal} save={saveUser} />
      <Login toggle={toggleLogin} modal={loginModal} login={loginUser} />
    </div>
  );
}

export default Hero;
