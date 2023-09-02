import React, { useState } from "react";
import Styles1 from "../../styles/RentalCard.module.css";
import Product from "../../public/images/rental.png";
import User from "../../public/images/userpro.png";
import Location from "../../public/images/Locatinone.png";
import Phone from "../../public/images/Phone1.png";
import Like from "../../public/images/Like3.png";
import Eye from "../../public/images/Eye3.png";
import Share from "../../public/images/Share3.png";
import Group from "../../public/images/Group 48095770.png";
import { HeartOutlined } from "@ant-design/icons";
import { Card, Rate } from "antd";
import Image from "next/image";
const { Meta } = Card;
function RentalCard() {
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
          className={Styles1.cardsize}
          cover={
            <Image
              src={Product}
              alt="abc"
              style={{ backgroundColor: "#F8F8F8" }}
              className={Styles1.sizeim}
            />
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={Group} alt="" className={Styles1.tag} />
          <div className={Styles1.heartdiv}>
            <HeartOutlined />
          </div>
          <div className={Styles1.divbtn}>House</div>
          <div className={Styles1.stardiv}>
            <div className={Styles1.flexfive}>
              <button className={Styles1.usedbtn}>Monthly</button>
            </div>
            <p className={Styles1.doltext}>$9900</p>
          </div>
          <p className={Styles1.mittext}>2min ago</p>
          <p className={Styles1.saimtext}>2 Bedroom house for rent....</p>
          <div className={Styles1.userdiv}>
            <Image src={User} alt="" />
            <p className={Styles1.usertext}>Username</p>
          </div>
          <div className={Styles1.userdiv}>
            <Image src={Location} alt="" />
            <p className={Styles1.usertext}>4517 Washington Ave.</p>
          </div>
          <div className={Styles1.centerbtn}>
            <button className={Styles1.calldiv}>
              <Image src={Phone} alt="" />
              <p style={{ marginLeft: ".5rem" }}>Call</p>
            </button>
          </div>
          <div className={Styles1.threediv}>
            <div className={Styles1.nodiv}>
              <Image src={Like} alt="" />
              <p className={Styles1.thumtext}>25</p>
            </div>
            <div className={Styles1.nodiv}>
              <Image src={Eye} alt="" />
              <p className={Styles1.thumtext}>50</p>
            </div>
            <div className={Styles1.nodiv}>
              <Image src={Share} alt="" />
              <p className={Styles1.thumtext}>30</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default RentalCard;
