import React, { useState, useEffect } from "react";
import Styles from "../../styles/BlogTwoRightSection.module.css";
import Image from "next/image";
import Bottle from "../../public/images/Rectangle 45.png";
import Shoes from "../../public/images/Rectangle 46 (1).png";
import Heart from "../../public/images/Frame 44373.png";
import Forward from "../../public/images/Frame 44375.png";
import Comments from "../../public/images/Frame 44373 (1).png";
import Ellipse from "../../public/images/Ellipse 207.png";
import { Input, Select } from "antd";
// import { blogForm } from "../../helper/axios";
// import { useParams } from "next/navigation";
import BlogTwoPost from "./BlogTwoPost";

const { Option } = Select;
function BlogTwoRightSection({ data }) {
  console.log(data, "dff");
  return (
    <div>
      {/* {loading ? (
        <p>loading</p>
      ) : ( */}
      <>
        <div className={Styles.boxflex}>
          <Image className={Styles.imgsize} src={Bottle} alt="abc" />
          <Image className={Styles.imgsize} src={Shoes} alt="abc" />
        </div>
        <div className={Styles.paddiv}>
          <button className={Styles.btnnew}>News</button>
          <p className={Styles.howtext}>
            How to write a title with an optimal width for SEO
          </p>
        </div>
        <div className={Styles.mainimgelldiv}>
          <div className={Styles.elldiv}>
            <Image src={Ellipse} alt="abc" />
            <div className={Styles.textdiv}>
              <p style={{ color: "#444444", fontWeight: "500" }}>
                {data.yourName}
              </p>
              <p
                style={{
                  color: "#A1A1A1",
                  fontWeight: "500",
                  fontSize: ".7rem",
                }}
              >
                {data.date}
              </p>
            </div>
          </div>
          <div className={Styles.commdiv}>
            <Image className={Styles.smllbox} src={Heart} alt="abc" />
            {/* <Image className={Styles.smllbox} src={Forward} alt="abc" /> */}
            <Image className={Styles.smllbox} src={Comments} alt="abc" />
            <p>50k</p>
          </div>
        </div>
        <div>
          <BlogTwoPost data={data}/>
        </div>
      </>
      {/* )} */}
    </div>
  );
}

export default BlogTwoRightSection;
