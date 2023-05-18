import React from "react";
import Styles from "../../styles/DeshiStore.module.css";
import CarouselDeshitwo from "../DeshiShopPageTwo/Carouseldeshitwo";
import { Row, Col, Card, Button } from "antd";
import Link from "next/link";

const data = [
  {
    image: "../images/storecard.png",
    image1: "../images/storename.png",
    shopname: "Bangla shop",
    shopaddress: "1329 Saint lawrence ave .NY",
    shopcontact: "+1 929 535 3234",
    followers: "30",
    following: "14",
  },
  {
    image: "../images/img55.png",
    image1: "../images/storename.png",
    shopname: "Fashion Shop",
    shopaddress: "1329 Saint lawrence ave .NY",
    shopcontact: "+1 929 535 3234",
    followers: "30",
    following: "14",
  },
  {
    image: "../images/img555.png",
    image1: "../images/storename.png",
    shopname: "Bangla shop",
    shopaddress: "1329 Saint lawrence ave .NY",
    shopcontact: "+1 929 535 3234",
    followers: "30",
    following: "14",
  },
];

function RightSectionDeshiStore() {
  return (
    <div>
      <div className={Styles.imagethirrt}>
        <img
          className={Styles.imagethirt}
          alt="abc"
          src="../images/thirtyoff.png"
        />
      </div>
      <div className={Styles.cardsstoree}>
        {data.map((data, index) => (
          <div key={index}>
            <Link href="/DeshiStoreTwo" style={{ textDecoration: "none" }}>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={data.image} />}
                className={Styles.dicvfdr}
              >
                <img className={Styles.imageone} src={data.image1} alt="" />
                <div style={{ marginTop: "1rem" }}>
                  <p className={Styles.nameshop}>{data.shopname}</p>
                  <Button className={Styles.openbutton}>Open</Button>
                  <div className={Styles.loctxt}>
                    <img alt="abc" src="../images/locationone.png"></img>
                    <p className={Styles.address}>{data.shopaddress}</p>
                  </div>
                  <div className={Styles.loctxt}>
                    <img alt="abc" src="../images/Phone.png"></img>
                    <p className={Styles.address}>{data.shopcontact}</p>
                  </div>
                  <div className={Styles.disp}>
                    {" "}
                    <Button className={Styles.butt}>
                      {" "}
                      <img
                        className={Styles.imgbyt}
                        src="../images/Plus1.png"
                        alt="abc"
                      />
                      <p>Follow</p>
                    </Button>
                  </div>
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
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </div>
      <div className={Styles.cardsstoree}>
        {data.map((data, index) => (
          <div key={index} className={Styles.cardContainer}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src={data.image} />}
              className={Styles.dicvfdr}
            >
              <img className={Styles.imageone} src={data.image1} alt="" />
              <div style={{ marginTop: "1rem" }}>
                <p className={Styles.nameshop}>{data.shopname}</p>
                <Button className={Styles.openbutton}>Open</Button>
                <div className={Styles.loctxt}>
                  <img alt="abc" src="../images/locationone.png"></img>
                  <p className={Styles.address}>{data.shopaddress}</p>
                </div>
                <div className={Styles.loctxt}>
                  <img alt="abc" src="../images/Phone.png"></img>
                  <p className={Styles.address}>{data.shopcontact}</p>
                </div>
                <div className={Styles.disp}>
                  {" "}
                  <Button className={Styles.butt}>
                    {" "}
                    <img
                      className={Styles.imgbyt}
                      src="../images/Plus1.png"
                      alt="abc"
                    />
                    <p>Follow</p>
                  </Button>
                </div>
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
              </div>
            </Card>
          </div>
        ))}
      </div>
      <div>
        <div className={Styles.divfontv}>
          <p className={Styles.Populartxt}>Popular Products</p>
          <a className={Styles.viwall}>View All</a>
        </div>
        <div className={Styles.blackline}>
          {" "}
          <img
            className={Styles.greenlines}
            alt="abc"
            src="../images/greenline.png"
          />
        </div>
        <div className={Styles.CarouselDeshitwowidth}>
          <CarouselDeshitwo />
        </div>
      </div>
    </div>
  );
}

export default RightSectionDeshiStore;
