import React from "react";
import Styles from "../../styles/LeftSectionOfDeshi.module.css";
import Right from "../../public/images/Right-arrow.png";
import Image from "next/image";
import { RightOutlined } from "@ant-design/icons";
function LeftSectionOfDeshi() {
  return (
    <div>
      <div className={Styles.greybox}>
        <div className={Styles.greysmll}>
          <h3>Shops</h3>
        </div>
        <div className={Styles.greysmll}>
          <p className={Styles.text}>Consumer Food</p>
          <RightOutlined className={Styles.text1} />
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div className={Styles.greysmll}>
          <p className={Styles.text}>Men’s Clothing</p>
          <RightOutlined className={Styles.text1} />
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div className={Styles.greysmll}>
          <p className={Styles.text}>Women’s Clothing</p>
          <RightOutlined className={Styles.text1} />
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div className={Styles.greysmll}>
          <p className={Styles.text}>Fashion & Beauty</p>
          <RightOutlined className={Styles.text1} />
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div className={Styles.greysmll}>
          <p className={Styles.text}>Home & Living</p>
          <RightOutlined className={Styles.text1} />
        </div>
      </div>
    </div>
  );
}

export default LeftSectionOfDeshi;
