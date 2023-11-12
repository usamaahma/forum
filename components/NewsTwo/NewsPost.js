import React from "react";
import Styles from "../../styles/NewsPost.module.css";
import Business from "../../public/images/Rectangle 4640.png";
import { Col, Row, Input, Form } from "antd";
import Image from "next/image";
import Tiww from "../../public/images/Group 134.png";
import Fb from "../../public/images/Group 133.png";
import Ins from "../../public/images/Group 132.png";
import Lin from "../../public/images/Group 131.png";
import Link from "next/link";
import NewsTwoCarousel from "./NewsTwoCarouel";
const { TextArea } = Input;
function NewsPost({ data }) {
  console.log(data, "datatapost");
  return (
    <div>
      <div>
        <img className={Styles.imgstyle} src={data.image?.[0]} alt="abc" />
        <div className={Styles.boxpadding}>
          <p className={Styles.lookingtext}>{data.metaDescription}</p>
        </div>
      </div>
      <div className={Styles.mblview}>
        <p className={Styles.share}>Share This Event</p>
        <div className={Styles.imgdivflex}>
          <Image src={Tiww} alt="abc" />
          <Image src={Fb} alt="abc" />
          <Image src={Ins} alt="abc" />
          <Image src={Lin} alt="abc" />
        </div>
      </div>
      <div>
        <p className={Styles.share}>Leave a Comment </p>
        <hr
          style={{
            border: "solid 1px #D9D9D9",
            marginTop: ".5rem",
            marginBottom: ".5rem",
          }}
        />
        <p className={Styles.share}>Comment:</p>

        <TextArea
          style={{
            border: "solid 1px #D9D9D9",
            marginTop: ".5rem",
            marginBottom: ".5rem",
            borderRadius: ".2rem",
          }}
          rows={9}
        />
      </div>
      <div>
        <p className={Styles.share}>Similar News </p>
        <div
          style={{
            backgroundColor: "#42b00f",
            borderWidth: 2,
            width: "6rem",
            border: "#42b00f 1px solid",
            position: "absolute",
          }}
        ></div>
        <hr
          style={{
            border: "solid 1px #D9D9D9",
          }}
        />
        <div
          className={Styles.centerrrr}
          style={{
            marginTop: ".5rem",
            marginBottom: ".5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className={Styles.Carousel1}>
            {/* <Link href="/NewsPageTwo"> */}
            <NewsTwoCarousel newsCategoryId={data.newsCategoryId} />
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPost;
