import React from "react";
import Styles from "../../styles/OpenDeshiShop.module.css";
function OpenDeshiShop() {
  return (
    <div className={Styles.bgdiv}>
      <div className={Styles.bgboxwhole}>
        <h2> Open Deshi Shop</h2>
        <br />
        <p>দেশী শপে দোকান খুলে পন্য ক্রয়-বিক্রয় করুন।</p>
        <button className={Styles.btngreen}>My Account</button>
      </div>
    </div>
  );
}

export default OpenDeshiShop;
