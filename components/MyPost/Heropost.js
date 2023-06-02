import React from "react";
import Styles from "../../styles/HeroSection.module.css";
function HeroPost() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}>Your Post</h1>
        <p className={Styles.colrgreen}>Home / Post</p>
      </div>
    </div>
  );
}

export default HeroPost;
