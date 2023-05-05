import React from "react";
import Styles from "../../styles/BlogRightSection.module.css";
import Image from "next/image";
import Rectangle from "../../public/images/Rectangle 75.png";
import Like from "../../public/images/Like1.png";
import Share from "../../public/images/Share1.png";
import Comment from "../../public/images/Comment1.png";
import { Card } from "antd";
import Link from "next/link";
const { Meta } = Card;
function BlogCard() {
  return (
    <div>
      <Card
        hoverable
        className={Styles.cardsize}
        cover={<Image src={Rectangle} alt="abc" />}
      >
        <div>
          <p className={Styles.textsmall}>Culture - 2 Hours ago </p>
          <p className={Styles.inttext}>
            Interview Question: Why Dont You
            <br /> Have a Degree?
          </p>
          <p className={Styles.prtext}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-consectetur
          </p>
          <Link href="/BlogTwoPage">
            <button className={Styles.morebtn}>Read More</button>
          </Link>
        </div>
        <div className={Styles.maindivside}>
          <div className={Styles.flexsise}>
            <div className={Styles.flexsise}>
              <Image src={Like} alt="abc" />
              <p className={Styles.text}>25 Like</p>
            </div>
            <div className={Styles.flexsise}>
              <Image src={Comment} alt="abc" />
              <p className={Styles.text}>30 Comment</p>
            </div>
          </div>
          <div>
            <div className={Styles.flexsise}>
              <Image src={Share} alt="abc" />
              <p className={Styles.text1}>23 Share</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default BlogCard;
