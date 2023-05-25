import React, { useState } from "react";
import Styles from "../../styles/DetailCard.module.css";
import Product from "../../public/images/Laptop.png";
import User from "../../public/images/userpro.png";
import Location from "../../public/images/Locatinone.png";
import Phone from "../../public/images/Phone1.png";
import Like from "../../public/images/Like3.png";
import Eye from "../../public/images/Eye3.png";
import Share from "../../public/images/Share3.png";
import Group from "../../public/images/Group 48095771.png";
import { HeartOutlined } from "@ant-design/icons";
import { Card, Rate } from "antd";
import Image from "next/image";
const { Meta } = Card;
function DetailCard() {
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
          <div className={Styles.divbtn}>Electronics</div>
          <div className={Styles.stardiv}>
            <div className={Styles.flexfive}>
              <button className={Styles.usedbtn}>Used</button>
            </div>
            <p className={Styles.doltext}>$9900</p>
          </div>
          <p className={Styles.mittext}>2min ago</p>
          <p className={Styles.saimtext}>Computer pc for sell..</p>
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
              <p style={{ marginLeft: ".5rem" }}>Call</p>
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

export default DetailCard;
