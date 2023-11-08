import React, { useState, useEffect } from "react";
import Styles from "../../styles/FeaturedNews.module.css";
import Styles1 from "../../styles/FeaturedPost.module.css";
import Business from "../../public/images/Rectangle 4640.png";
import { Col, Collapse, Row, message } from "antd";
import Image from "next/image";
import FeaturedPost from "./FeaturedPost";
import dataOne from "../../dataOne.json";
import dataTwo from "../../dataTwo.json";
import CommunityNews from "./CommunityNews";
import NewsCarousel from "./NewsCarouel";
import Link from "next/link";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { newsCategory } from "@/helper/axios";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div
    key={1}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <button className={Styles.btn}>Politics</button>
  </div>,
  <div
    key={2}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <button className={Styles.btn}>Business</button>
  </div>,
  <div
    key={3}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <button className={Styles.btn}>Entertainment</button>
  </div>,
  <div
    key={4}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <button className={Styles.btn}>Bangladesh</button>
  </div>,
  <div
    key={5}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <button className={Styles.btn}>World</button>
  </div>,
  <div
    key={6}
    onDragStart={handleDragStart}
    style={{ display: "flex", justifyContent: "space-evenly" }}
  >
    <button className={Styles.btn}>Game</button>
  </div>,
];
const responsive = {
  0: {
    items: 2,
  },
  558: {
    items: 4,
  },
  1024: {
    items: 4,
  },
  1440: {
    items: 4,
  },
  2560: {
    items: 5,
  },
};
function FeaturedNews({ data }) {
  const [loading, setloading] = useState(false);
  const [catdata, setCatdata] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const getNewsCategory = () => {
    setloading(true);
    // let token = localStorage.getItem("talbeilm-token");

    newsCategory({
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      // params: {
      //   page: currentPage,
      //   limit: perPage,
      // },
    })
      .then((res) => {
        console.log(res.data.results, "cate");
        setCatdata(res.data.results);
        // setTotalRows(res.data.totalResults);
        setloading(false);
      })
      .catch(() => {
        message.error("an error occured please try later");
        setloading(false);
      });
  };
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };
  useEffect(() => {
    getNewsCategory();
  }, []);
  return (
    <div>
      <div>
        <Row justify="center" className={Styles.widthroww}>
          {data
            ?.filter((item) => item.featured === true)
            .map((item, index) => (
              <Col xxl={15} xl={15} lg={14} md={14} xs={24} key={index}>
                <div className={Styles.centercol}>
                  <div>
                    <img
                      className={Styles.imgstyle22}
                      src={item.image?.[0]}
                      alt="abc"
                    />
                    <div className={Styles.boxpadding}>
                      <div className={Styles.flexbtndiv}>
                        <div>
                          <button className={Styles.btnbus}>
                            {item.newsCategoryId}{" "}
                          </button>
                        </div>
                        <div>
                          <p className={Styles.jantext}>22 Jan, 2023</p>
                        </div>
                      </div>
                      <div className={Styles.intertext}>{item.heading}</div>
                      <div className={Styles.lookingtext}>
                        <text>{item.description}</text>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          <Col xxl={9} xl={9} lg={10} md={8} xs={24}>
            {data
              ?.filter(
                (item) => item.newsPosition === "2" || item.newsPosition === "3"
              )
              .map((item, index) => (
                <div key={index} className={Styles.centercol1}>
                  {/* <Link href="/NewsPageTwo"> */}{" "}
                  <div className={Styles1.boxsmall}>
                    <img
                      className={Styles1.img}
                      src={item?.image?.[0]}
                      alt="abc"
                    />
                    <div className={Styles1.padding}>
                      <div className={Styles1.boxflex}>
                        <button className={Styles1.btn}>
                          {" "}
                          {item?.newsCategoryId}{" "}
                        </button>
                        <p className={Styles1.smalltext}>22 Jan, 2023</p>
                      </div>
                      <p className={Styles1.textin}>{item?.heading}</p>
                    </div>
                  </div>
                  {/* </Link> */}
                </div>
              ))}
          </Col>
        </Row>
      </div>
      <div>
        <p style={{ color: "#151515", fontWeight: "600" }}>Community News</p>
        <div
          style={{
            backgroundColor: "#42b00f",
            borderWidth: 1,
            width: "7.1rem",
            border: "#42b00f 1px solid",
            position: "absolute",
          }}
        ></div>
        <hr
          style={{
            border: "solid 1px #D9D9D9",
          }}
        />
        {data
          ?.filter((item) => item.newsCategoryId === "Community News")
          .map((item, index) => (
            <div key={index}>
              <div className={Styles.mainboxcom}>
                <div>
                  <img
                    className={Styles.imgstyle}
                    src={item?.image?.[0]}
                    alt=""
                  />
                </div>
                <div className={Styles.marleft}>
                  <div className={Styles.mainboxcom1}>
                    <button className={Styles.btncom}>
                      {" "}
                      {item?.newsCategoryId}{" "}
                    </button>
                    <p className={Styles.jantext}>22 Jan, 2023</p>
                  </div>
                  <p className={Styles.int}>{item?.heading} </p>
                  <p className={Styles.int1}>{item?.heading}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div>
        <p style={{ color: "#151515", fontWeight: "600" }}>Other News</p>
        <div
          style={{
            backgroundColor: "#42b00f",
            borderWidth: 1,
            width: "4.8rem",
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
          <div className={Styles.btnflex}>
            <AliceCarousel
              mouseTracking
              items={catdata?.map((category, index) => (
                <div
                  key={index}
                  onDragStart={handleDragStart}
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <button
                    className={Styles.btn}
                    onClick={() => handleCategoryClick(category.name)} // Handle category button click
                  >
                    {category.name}
                  </button>
                </div>
              ))}
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
      <div
        className={Styles.centerrrr}
        style={{
          marginTop: ".5rem",
          marginBottom: ".5rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className={Styles.cardivvv}>
          {/* <Link href="/NewsPageTwo"> */}
          <NewsCarousel data={data} selectedCategory={selectedCategory} />
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default FeaturedNews;
