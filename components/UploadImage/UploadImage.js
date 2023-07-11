import React from "react";
import Styles from "../../styles/BusinessInfo.module.css";
import { Form, Input } from "antd";

function UploadImage({ next }) {
  return (
    <div className={Styles.centerwholediv}>
      <div className={Styles.whitediv}>
        <h2 className={Styles.textlet}>
          Let’s Complete Your Profile And Connect With Deshi
          <br /> Community Network
        </h2>
        <hr style={{ border: "solid 1px  #D0D0D0", marginBottom: "2rem" }} />
        <div></div>
      </div>
    </div>
  );
}

export default UploadImage;
