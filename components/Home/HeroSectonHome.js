import React from "react";
import Styles from "../../styles/HeroSectonHome.module.css";
function HeroSectonHome() {
  return (
    <div>
      <div className={Styles.herobg}>
        <h1 className={Styles.bigtext}>
          BIGGEST Online platform for <br />{" "}
          <a className={Styles.bigtext1}>BeNGALI COMMUNITY</a>
        </h1>
        <div>
          <button className={Styles.btnsign}>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSectonHome;
