import React, { useState, useEffect } from "react";
import Styles from "../../styles/NewsRightSection.module.css";
import Image from "next/image";
import Bottle from "../../public/images/Rectangle 45.png";
import Shoes from "../../public/images/Rectangle 46 (1).png";
import Group from "../../public/images/Group 48095692.png";
import { Input, Select, message } from "antd";
import FeaturedNews from "./FeaturedNews";
import Green from "../../public/images/Rectangle 4636.png";
import { newsFrom } from "@/helper/axios";
const { Option } = Select;

function NewsRightSection() {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);

  const getNewsForm = () => {
    setloading(true);
    // let token = localStorage.getItem("talbeilm-token");

    newsFrom({
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
        console.log(res.data.results, "user");
        setdata(res.data.results);
        // setTotalRows(res.data.totalResults);
        setloading(false);
      })
      .catch(() => {
        message.error("an error occured please try later");
        setloading(false);
      });
  };

  useEffect(() => {
    getNewsForm();
  }, []);

  return (
    <div>
      <div className={Styles.boxflex}>
        <Image className={Styles.imgsize} src={Bottle} alt="abc" />
        <Image className={Styles.imgsize} src={Shoes} alt="abc" />
      </div>
      <div className={Styles.feadiv}>
        <div className={Styles.boxgreen12}>
          <Image
            style={{ width: "10rem", height: "5rem" }}
            src={Group}
            alt=""
          />
          {data
            ?.filter((item) => item.featured === true)
            .map((item, index) => (
              // <div key={index}>
              <marquee key={index} className={Styles.parh}>
                {item.heading}
              </marquee>
              // </div>
            ))}
        </div>
        <div>
          <p style={{ color: "#151515", fontWeight: "600" }}>Featured News</p>
          <div
            style={{
              backgroundColor: "#42b00f",
              borderWidth: 1,
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
          <FeaturedNews data={data} />
        </div>
      </div>
    </div>
  );
}

export default NewsRightSection;
