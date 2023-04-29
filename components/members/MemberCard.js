import React from "react";
import Styles from "../../styles/MemberCard.module.css";
import Sky from "../../public/images/image 15.png";
import Profile from "../../public/images/Ellipse 247.png";
import { Card, Tag } from "antd";
import Image from "next/image";
import Facebook from "../../public/images/Icon (1).png";
import Twitter from "../../public/images/twitter.png";
import Instgram from "../../public/images/Group 131.png";
import Linkdin from "../../public/images/Group 132.png";
import Loc from "../../public/images/Locatin (1).png";
import PLus from "../../public/images/Plus.png";
import Mail from "../../public/images/Email.png";
const { Meta } = Card;
function MemberCard() {
  return (
    <div>
      <div>
        <Card
          hoverable
          className={Styles.cardstyle}
          cover={<Image alt="example" src={Sky} />}
        >
          <div className={Styles.centerbox}>
            <Image alt="example" src={Profile} className={Styles.imgsizetop} />
            <p className={Styles.bantext}>Bangla shop</p>
            <Tag color="#DEF5D3" className={Styles.tagtext}>
              Accountant
            </Tag>
            <p className={Styles.diptext}>Diploma In Accounting</p>
            <p className={Styles.user}>@username</p>
            <div className={Styles.flexboxloc}>
              <Image src={Loc} alt="abc"/>
              <p className={Styles.diptext}>@NY, USA</p>
            </div>
            <div className={Styles.betweendiv}>
              <div className={Styles.flexboxloc1}>
                <Image src={PLus} alt="abc"/> <p className={Styles.foltext}> Follow</p>
              </div>
              <div className={Styles.flexboxloc1}>
                <Image src={Mail} alt="abc"/>
                <p className={Styles.foltext}>Email</p>
              </div>
            </div>
            <div className={Styles.betweendiv}>
              <p>
                30 <a className={Styles.atext}>Follower</a>
              </p>
              <p>
                34 <a className={Styles.atext}>Following</a>
              </p>
            </div>
          </div>
          <div>
            <div className={Styles.flexrow}>
              <div className={Styles.circle}>
                <Image src={Twitter} alt="abc"/>
              </div>
              <div className={Styles.circle}>
                <Image src={Facebook} alt="abc" />
              </div>
              <Image src={Instgram} alt="abc"/>
              <Image src={Linkdin} alt="abc"/>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default MemberCard;
