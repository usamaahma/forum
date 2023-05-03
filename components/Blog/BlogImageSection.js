import React from "react";
import Image from "next/image";
import Bottle from "../../public/images/Rectangle 45.png";
import Shoes from "../../public/images/Rectangle 46 (1).png";
import Styles from "../../styles/BlogImageSection.module.css";
import { Col, Row } from "antd";

function BlogImageSection() {
  return (
    <div className={Styles.mainboxdivv22}>
      <div className={Styles.divpos}>
        <p className={Styles.protext}>Product Name</p>
        <p className={Styles.protext1}>From $650</p>
        <p className={Styles.protext2}>Shop Product Link</p>
      </div>
      <div className={Styles.boxflex11}>
        <Image className={Styles.imgsize11} src={Bottle} alt="abc" />
        <Image className={Styles.imgsize11} src={Shoes} alt="abc" />
      </div>
      <div className={Styles.divpos1}>
        <p className={Styles.protext}>Product Name</p>
        <p className={Styles.protext1}>From $650</p>
        <p className={Styles.protext3}>Shop Product Link</p>
      </div>
      <div></div>
    </div>
  );
}

export default BlogImageSection;
