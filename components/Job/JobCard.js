import React, { useState } from "react";
import Styles1 from "../../styles/JobCard.module.css";
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
          <div className={Styles1.divbtn}>Federal</div>
          <div className={Styles1.stardiv}>
            <div className={Styles1.flexfive}>
              <button className={Styles1.usedbtn}>Hourly</button>
            </div>
            <p className={Styles1.doltext}>$27</p>
          </div>
          <p className={Styles1.mittext}>2min ago</p>
          <p className={Styles1.saimtext}>Software Development Engineer...</p>
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
              <p style={{ marginLeft: ".2rem" }}>Apply Now</p>
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

export default JobCard;
