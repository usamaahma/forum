import React from "react";
import Styles from "../styles/Community.module.css";
import Image from "next/image";
import Boy from "../public/images/Ellipse 9.png";
import Bag from "../public/images/Group (2).png";
import Locatin from "../public/images/Locatin.png";
function Community() {
  return (
    <div>
      <div className={Styles.flexdiv}>
        <div>
          <Image src={Boy} />
        </div>
        <div>
          <p className={Styles.annetext}>Anne Mark</p>
          <div className={Styles.rowflex}>
            <Image src={Bag} />
            <p className={Styles.amtext}>Accountant</p>
          </div>
          <div className={Styles.rowflex}>
            <Image src={Locatin} />
            <p className={Styles.amtext}>Location Here</p>
          </div>
        </div>
        <div className={Styles.box}>
          <p> Follow</p>
        </div>
      </div>
      <div className={Styles.centerico1}>
        <p className={Styles.amtext1}>Member Since 2023</p>
        <p className={Styles.amtext1}>105 Follower</p>
      </div>
    </div>
  );
}

export default Community;
