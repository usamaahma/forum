import React from "react";
import Styles from "../../styles/HeroSection.module.css";

function EventHeroSection() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}>Events</h1>
        <p className={Styles.colrgreen}>Home / Network / Events</p>
      </div>
    </div>
  );
}

export default EventHeroSection;
