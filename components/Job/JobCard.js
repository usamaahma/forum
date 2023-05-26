import React, { useState } from "react";
import Styles from "../../styles/JobCard.module.css";
import Product from "../../public/images/Rectangle 76.png";
import User from "../../public/images/userpro.png";
import Location from "../../public/images/Locatinone.png";
import Phone from "../../public/images/greentick.png";
import Like from "../../public/images/Like3.png";
import Eye from "../../public/images/Eye3.png";
import Share from "../../public/images/Share3.png";
import Group from "../../public/images/Groupjob.png";
import { HeartOutlined } from "@ant-design/icons";
import { Card, Rate } from "antd";
import Image from "next/image";
const { Meta } = Card;
function JobCard() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div>
      <div>
        <Card
          hoverable
          className={Styles.cardsize}
          cover={
            <Image
              src={Product}
              alt="abc"
              style={{ backgroundColor: "#F8F8F8" }}
              className={Styles.sizeim}
            />
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={Group} alt="" className={Styles.tag} />
          <div className={Styles.heartdiv}>
            <HeartOutlined />
          </div>
          <div className={Styles.divbtn}>Federal</div>
          <div className={Styles.stardiv}>
            <div className={Styles.flexfive}>
              <button className={Styles.usedbtn}>Hourly</button>
            </div>
            <p className={Styles.doltext}>$27</p>
          </div>
          <p className={Styles.mittext}>2min ago</p>
          <p className={Styles.saimtext}>Software Development Engineer...</p>
          <div className={Styles.userdiv}>
            <Image src={User} alt="" />
            <p className={Styles.usertext}>Username</p>
          </div>
          <div className={Styles.userdiv}>
            <Image src={Location} alt="" />
            <p className={Styles.usertext}>4517 Washington Ave.</p>
          </div>
          <div className={Styles.centerbtn}>
            <button className={Styles.calldiv}>
              <Image src={Phone} alt="" />
              <p style={{ marginLeft: ".2rem" }}>Apply Now</p>
            </button>
          </div>
          <div className={Styles.threediv}>
            <div className={Styles.nodiv}>
              <Image src={Like} alt="" />
              <p className={Styles.thumtext}>25</p>
            </div>
            <div className={Styles.nodiv}>
              <Image src={Eye} alt="" />
              <p className={Styles.thumtext}>50</p>
            </div>
            <div className={Styles.nodiv}>
              <Image src={Share} alt="" />
              <p className={Styles.thumtext}>30</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default JobCard;
