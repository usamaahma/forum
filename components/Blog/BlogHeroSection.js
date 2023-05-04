import React from "react";
import Styles from "../../styles/HeroSection.module.css";

function BlogHeroSection() {
  return (
    <div className={Styles.mainhero}>
      <div>
        <h1 className={Styles.centerhero}>Blog</h1>
        <p className={Styles.colrgreen}>Home / Network / Blog</p>
      </div>
    </div>
  );
}

export default BlogHeroSection;
