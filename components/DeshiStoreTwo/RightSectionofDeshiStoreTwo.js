import React, { useState } from "react";
import Styles from "../../styles/RightStoreTwo.module.css";
import CarouselDeshitwo from "../DeshiShopPageTwo/Carouseldeshitwo";
import { Card } from "antd";

const data = [
  {
    image: "../images/storecard.png",
    image1: "../images/storename.png",
    shopname: "Bangla shop",
    shopaddress: "1329 Saint lawrence ave .NY",
    shopcontact: "+1 929 535 3234",
    followers: "5",
    following: "14",
  },
];

function RightSectionofDeshiStoreTwo() {
  const [isBangla, setIsBangla] = useState(false);
  const handleClick = () => {
    setIsBangla(!isBangla);
  };
  return (
    <div>
      <div className={Styles.imagethirrt}>
        <img
          className={Styles.imagethirt}
          alt="abc"
          src="../images/thirtyoff.png"
        />
      </div>
      <div className={Styles.imagethirrt}>
        <Card
          hoverable
          cover={
            <img
              className={Styles.imagethirtcard}
              alt="example"
              src="../images/bigshop.png"
            />
          }
        >
          <div className={Styles.imggcardshopname}>
            {data.map((data, index) => (
              <div key={index}>
                <img alt="abc" src={data.image1} />
              </div>
            ))}
          </div>
          <div className={Styles.wdthcardtxt}>
            {data.map((data, index) => (
              <div key={index}>
                <p className={Styles.mrto}> {data.shopname}</p>
                <div className={Styles.twogap}>
                  <img
                    className={Styles.wdhe}
                    alt="abc"
                    src="../images/locationone.png"
                  />
                  <p> {data.shopaddress}</p>
                </div>
                <div className={Styles.twogap}>
                  <img
                    className={Styles.wdhe}
                    alt="abc"
                    src="../images/Phone.png"
                  />
                  <p> {data.shopcontact}</p>
                </div>
                <div className={Styles.imgfour}>
                  <div className={Styles.gol}>
                    <img alt="abc" src="../images/tw5.png"></img>
                  </div>
                  <div className={Styles.gol}>
                    <img alt="abc" src="../images/fb5.png"></img>
                  </div>
                  <div className={Styles.gol}>
                    <img alt="abc" src="../images/Intagram (1).png"></img>
                  </div>
                  <div className={Styles.gol}>
                    <img alt="abc" src="../images/Group 99.png"></img>
                  </div>
                </div>
                <div className={Styles.dispnewbet}>
                  <div className={Styles.disp}>
                    <div style={{ display: "flex", gap: ".5rem" }}>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>
                        {data.followers}
                      </span>{" "}
                      <p className={Styles.fontli}>Followers</p>
                    </div>
                    <div style={{ display: "flex", gap: ".5rem" }}>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>
                        {data.following}
                      </span>{" "}
                      <p className={Styles.fontli}> Following</p>
                    </div>
                  </div>
                  <div
                    onClick={handleClick}
                    style={{
                      overflow: "hidden",
                      backgroundColor: isBangla ? "#42B00F" : "#FFFFFF",
                    }}
                    className={Styles.langbutton}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "50%",
                        height: "100%",
                        fontSize: ".8rem",
                        borderRadius: "3px",
                        backgroundColor: isBangla ? "#FFFFFF" : "#42B00F",
                        color: isBangla ? "black" : "white",
                        transition:
                          "background-color 0.3s ease, color 0.3s ease",
                      }}
                    >
                      Open
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "50%",
                        height: "100%",
                        fontSize: ".8rem",
                        borderRadius: "3px",
                        backgroundColor: isBangla ? "#42B00F" : "#FFFFFF",
                        color: isBangla ? "white" : "black",
                        transition:
                          "background-color 0.3s ease, color 0.3s ease",
                      }}
                    >
                      Close
                    </div>
                  </div>{" "}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div>
        <div className={Styles.divfontv}>
          <p className={Styles.Populartxt}>Products</p>
          <a className={Styles.viwall}>View All</a>
        </div>
        <div className={Styles.blackline}>
          {" "}
          <img
            className={Styles.greenlinestwo}
            alt="abc"
            src="../images/greenline.png"
          />
        </div>
        <div className={Styles.CarouselDeshitwowidth}>
          <CarouselDeshitwo />
        </div>
        <div className={Styles.CarouselDeshitwowidth}>
          <CarouselDeshitwo />
        </div>
      </div>
    </div>
  );
}

export default RightSectionofDeshiStoreTwo;
