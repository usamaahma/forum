import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import FeaturedPost from "./FeaturedPost";
import Styles from "../../styles/FeaturedPost.module.css";
import { useRouter } from "next/router";
import { newsFrom } from "@/helper/axios";
import { message } from "antd";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: {
    items: 1,
  },
  558: {
    items: 2,
  },
  1024: {
    items: 2,
  },
  1440: {
    items: 3,
  },
  2560: {
    items: 3,
  },
};
function NewsTwoCarousel({ newsCategoryId }) {
  //   const router = useRouter();
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
  const filteredData = data?.filter(
    (item) => item.newsCategoryId === newsCategoryId
  );

  useEffect(() => {
    getNewsForm();
  }, []);
  return (
    <div>
      {" "}
      <AliceCarousel
        mouseTracking
        items={filteredData?.map((item, index) => (
          <div
            key={index}
            onDragStart={handleDragStart}
            className={Styles.boxsmall}
            style={{ cursor: "pointer" }}
            // onClick={() => router.push(`/NewsPageTwo?NewslId=${item.id}`)}
          >
            <img className={Styles.img} src={item?.image?.[0]} alt="abc" />
            <div className={Styles.padding}>
              <div className={Styles.boxflex}>
                <button className={Styles.btn}>{item.newsCategoryId} </button>
                <p className={Styles.smalltext}>22 Jan, 2023</p>
              </div>
              <p className={Styles.textin}>{item.heading} </p>
            </div>
          </div>
        ))}
        responsive={responsive}
        disableDotsControls
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        disableAutoPlayOnAction={false}
      />
    </div>
  );
}

export default NewsTwoCarousel;
