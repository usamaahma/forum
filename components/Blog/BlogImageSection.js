import React from "react";
import Image from "next/image";
import Bottle from "../../public/images/Rectangle 45.png";
import Shoes from "../../public/images/Rectangle 46 (1).png";
import Styles from "../../styles/BlogImageSection.module.css";
import Development from "../../public/images/Development.png";
import Design from "../../public/images/Design.png";
import Marketing from "../../public/images/Marketing.png";
import MaskGroup from "../../public/images/Mask group.png";
import Search from "../../public/images/Search.png";
import { Col, Row } from "antd";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div
    key={1}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <div className={Styles.boxserv}>
      <Image className={Styles.imgicon} src={Development} alt="abc" />
      <p className={Styles.lifetext}>USA Life</p>
    </div>
  </div>,
  <div
    key={2}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <div className={Styles.boxserv}>
      <Image className={Styles.imgicon} src={Design} alt="abc" />
      <p className={Styles.lifetext}>Jobs</p>
    </div>
  </div>,
  <div
    key={3}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <div className={Styles.boxserv}>
      <Image className={Styles.imgicon} src={Marketing} alt="abc" />
      <p className={Styles.lifetext}>Business</p>
    </div>
  </div>,
  <div
    key={4}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <div className={Styles.boxserv}>
      <Image className={Styles.imgicon} src={MaskGroup} alt="abc" />
      <p className={Styles.lifetext}>Life Style</p>
    </div>
  </div>,
  <div
    key={5}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <div className={Styles.boxserv}>
      <Image className={Styles.imgicon} src={Marketing} alt="abc" />
      <p className={Styles.lifetext}>Govt Facilities</p>
    </div>
  </div>,
  <div
    key={6}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <div className={Styles.boxserv}>
      <Image className={Styles.imgicon} src={Search} alt="abc" />
      <p className={Styles.lifetext}>Immigration</p>
    </div>
  </div>,
];
const responsive = {
  0: {
    items: 3,
  },
  558: {
    items: 3,
  },
  1024: {
    items: 4,
  },
};

function BlogImageSection() {
  return (
    <div>
      <div className={Styles.mainboxdivv22}>
        <div className={Styles.divpos}>
          <p className={Styles.protext}>Product Name</p>
          <p className={Styles.protext1}>From $650</p>
          <p className={Styles.protext2}>Shop Product Link</p>
        </div>
        <div className={Styles.boxflex11}>
          <Image className={Styles.imgsize11} src={Bottle} alt="abc" />
          <Image className={Styles.imgsize11} src={Shoes} alt="abc" />
        </div>
        <div className={Styles.divpos1}>
          <p className={Styles.protext}>Product Name</p>
          <p className={Styles.protext1}>From $650</p>
          <p className={Styles.protext3}>Shop Product Link</p>
        </div>
      </div>
      <div className={Styles.divcne}>
        <div className={Styles.alicdiv}>
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            disableDotsControls
            disableButtonsControls
            autoPlay
            autoPlayInterval={2000}
            disableAutoPlayOnAction={false}
            infinite
          />
        </div>
      </div>
    </div>
  );
}

export default BlogImageSection;
