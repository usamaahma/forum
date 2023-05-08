import React from "react";
import Styles from "../../styles/NewsPost.module.css";
import Business from "../../public/images/Image.png";
import { Col, Row, Input, Form } from "antd";
import Image from "next/image";
import Tiww from "../../public/images/Group 134.png";
import Fb from "../../public/images/Group 133.png";
import Ins from "../../public/images/Group 132.png";
import Lin from "../../public/images/Group 131.png";
import BlogCard from "../Blog/BlogCard";
import Link from "next/link";
import BlogCarousel from "./BlogCarousel";
const { TextArea } = Input;
function BlogTwoPost() {
  return (
    <div className={Styles.divvpad}>
      <div>
        <Image className={Styles.imgstyle} src={Business} alt="abc" />
        <div className={Styles.boxpadding}>
          <p className={Styles.lookingtext}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s,
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s,
          </p>
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
            marginBottom: "1rem",
            borderRadius: ".2rem",
          }}
          rows={9}
        />
        <Link href="/BlogFormPage">
          <button className={Styles.btncommt}>Post Comment</button>
        </Link>
      </div>
      <div>
        <p className={Styles.share}>Similar Blog</p>
        <div
          style={{
            backgroundColor: "#42b00f",
            borderWidth: 1,
            width: "7rem",
            border: "#42b00f 1px solid",
          }}
        ></div>
        <hr
          style={{
            border: "solid 1px #D9D9D9",
          }}
        />
        <div
          style={{
            marginTop: ".5rem",
            marginBottom: ".5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className={Styles.Carousel1}>
            <BlogCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogTwoPost;
