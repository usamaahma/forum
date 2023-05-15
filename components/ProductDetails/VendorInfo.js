import React from "react";
import Image from "next/image";
import Facebook from "../../public/images/Group 133.png";
import Twitter from "../../public/images/Group 134.png";
import Instgram from "../../public/images/Group 132.png";
import Linkdin from "../../public/images/Group 131.png";
import Ellipse from "../../public/images/Ellipse.png";
import Location from "../../public/images/locationone.png";
import Phone from "../../public/images/Phone.png";
import Styles from "../../styles/VendorInfo.module.css";
function VendorInfo() {
  return (
    <div className={Styles.bigbox}>
      <div>
        <Image src={Ellipse} alt="" />
      </div>
      <div className={Styles.marginleft}>
        <p className={Styles.bantext}>Bangla shop</p>
        <div className={Styles.rowflexs}>
          <Image src={Location} alt="" />
          <p className={Styles.address}>1329 Saint lawrence ave .NY </p>
        </div>
        <div className={Styles.rowflexs}>
          <Image src={Phone} alt="" className={Styles.psize} />
          <p className={Styles.address}>+1 929 535 3234</p>
        </div>
        <div className={Styles.flexrow}>
          <Image src={Twitter} alt="abc" />
          <Image src={Facebook} alt="abc" />
          <Image src={Linkdin} alt="abc" />
          <Image src={Instgram} alt="abc" />
        </div>
        <div className={Styles.flexrowone}>
          <p className={Styles.fotext}>
            <a className={Styles.no}>5</a> Follower
          </p>
          <p className={Styles.fotext}>
            <a className={Styles.no}>14</a> Following
          </p>
        </div>
      </div>
    </div>
  );
}

export default VendorInfo;
