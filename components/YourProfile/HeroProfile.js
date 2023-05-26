import React from "react";
import Styles from "../../styles/HeroSection.module.css";
function HeroProfile() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}>Your Profile</h1>
        <p className={Styles.colrgreen}>Home / Your profile</p>
      </div>
    </div>
  );
}

export default HeroProfile;
