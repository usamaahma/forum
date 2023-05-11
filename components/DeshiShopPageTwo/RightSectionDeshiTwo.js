import React from "react";
import Styles from "../../styles/DeshiShopPageTwoRight.module.css";
import Gallery from "./Carouseldeshitwo";

function RightSectionDeshiTwo() {
  return (
    <div>
      <div>
        <img
          className={Styles.imagethirt}
          alt="abc"
          src="../images/thirtyoff.png"
        />
      </div>
      <div className={Styles.divfontv}>
        <p className={Styles.Populartxt}>Popular Products</p>
        <a className={Styles.viwall}>View All</a>
      </div>
      <div className={Styles.blackline}>
        {" "}
        <img
          className={Styles.greenlines}
          alt="abc"
          src="../images/greenline.png"
        />
      </div>
      <div>
        <Gallery />
      </div>
    </div>
  );
}

export default RightSectionDeshiTwo;
