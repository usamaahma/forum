import React, { useState, useEffect } from "react";
import Image from "next/image";
import Bottle from "../../public/images/jeans.png";
import Shoes from "../../public/images/airphone.png";
import Styles from "../../styles/ImageSection.module.css";
import Development from "../../public/images/Development.png";
import Design from "../../public/images/Design.png";
import Marketing from "../../public/images/Marketing.png";
import MaskGroup from "../../public/images/Mask group.png";
import Search from "../../public/images/Search.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { deshiCategory } from "@/helper/axios";
import { useSelector, useDispatch } from "react-redux";
const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: {
    items: 3,
  },
  558: {
    items: 3,
  },
  768: {
    items: 4,
  },
  1024: {
    items: 5,
  },
  2560: {
    items: 6,
  },
};

function ImageSectionOfDeshi() {
  const [cdata, csetdata] = useState([]);
  const [loading, setLoading] = useState();
  // const [selectedCategory, setSelectedCategory] = useState("");
  const selectedCategory = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const getDeshiCategory = () => {
    setLoading(true);
    // let token = localStorage.getItem("talbeilm-token");
    deshiCategory({
      method: "get",
      headers: {
        // Authorization: `Bearer ${token}`,
      },
      // params: {
      //   page: currentPage,
      //   limit: perPage,
      // },
    })
      .then((res) => {
        console.log(res.data.results, "deshi");
        csetdata(res.data.results);
        setLoading(false);
      })
      .catch(() => {
        message.error("an error occured please try later");
        setLoading(false);
      });
  };
  const filteredCategories = cdata.filter((item) =>
    selectedCategory ? item.name === selectedCategory : true
  );

  const handleCategoryClick = (categoryName) => {
    // Dispatch an action to update the selected category in Redux
    dispatch({ type: "SET_SELECTED_CATEGORY", payload: categoryName });
  };
  useEffect(() => {
    getDeshiCategory();
  }, []);
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
            items={cdata?.map((item, index) => (
              <div className={Styles.centercaro} key={index}>
                <div
                  onClick={() => handleCategoryClick(item.name)}
                  onDragStart={handleDragStart}
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <div className={Styles.boxserv}>
                    <img
                      className={Styles.imgicon}
                      src={item.image}
                      alt="abc"
                    />
                    <p className={Styles.lifetext}>{item.name}</p>
                  </div>
                </div>
                ,
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
  );
}

export default ImageSectionOfDeshi;
