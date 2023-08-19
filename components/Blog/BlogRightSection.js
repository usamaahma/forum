import React, { useState, useEffect } from "react";
import Styles from "../../styles/BlogRightSection.module.css";
import { Col, Row, Card } from "antd";
import card from "../../card.json";
import Link from "next/link";
import Image from "next/image";
import Rectangle from "../../public/images/Rectangle 75.png";
import Like from "../../public/images/Like1.png";
import Share from "../../public/images/Share1.png";
import Comment from "../../public/images/Comment1.png";
import { blogForm } from "../../helper/axios";

const { Meta } = Card;
////////////////

function BlogRightSection() {
  const [data, setData] = useState();
  const [loading, setloading] = useState();

  const getBlogForm = () => {
    setloading(true);
    // let token = localStorage.getItem("talbeilm-token");

    blogForm({
      method: "get",
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data.results, "user");
        setData(res.data.results);
        setloading(false);
      })
      .catch(() => {
        message.error("an error occured please try later");
        setloading(false);
      });
  };
  useEffect(() => {
    getBlogForm();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Row justify="center" className={Styles.widthrow}>
        {data?.map((item, index) => (
          <Col key={index} xxl={10}>
            {/* <Link href="/BlogTwoPage"> */}
            <Card
              hoverable
              className={Styles.cardsize}
              cover={
                <img src={item.image?.[0]} alt="abc" width={200} height={200} />
              }
            >
              <div>
                <p className={Styles.textsmall}>Culture - 2 Hours ago </p>
                <p className={Styles.inttext}>{item.postTitle}</p>
                <p className={Styles.prtext}>{item.description}</p>
                <button className={Styles.morebtn}>Read More</button>
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
            {/* </Link> */}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BlogRightSection;
