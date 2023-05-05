import React from "react";
import Styles from "../../styles/FeaturedPost.module.css";
import Imag from "../../public/images/Rectangle 4641.png";
import Image from "next/image";
function FeaturedPost() {
  return (
    <div>
      <div className={Styles.boxsmall}>
        <Image className={Styles.img} src={Imag} alt="abc" />
        <div className={Styles.padding}>
          <div className={Styles.boxflex}>
            <button className={Styles.btn}>Business </button>
            <p className={Styles.smalltext}>22 Jan, 2023</p>
          </div>
          <p className={Styles.textin}>
            Interview Question: Why Dont <br />
            You Have Food?
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPost;
