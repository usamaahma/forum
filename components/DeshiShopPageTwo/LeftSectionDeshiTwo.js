import React from "react";
import { RightOutlined, DownOutlined } from "@ant-design/icons";
import { Dropdown, Button, Rate, Row, Col, Space } from "antd";
import Styles from "../../styles/DeshiShopPagetwoLeft.module.css";
import RangeSlider from "./RangeSlider";

const pricerange = [
  {
    key: "1",
    label: <RangeSlider />,
  },
];

const data = [
  {
    key: "1",
    image: "../images/glasses.png",
    price: "$99.33",
    name: "Product Name",
    stars: <Rate defaultValue={4} />,
  },
  {
    key: "2",
    image: "../images/earpod.png",
    price: "$99.33",
    name: "Product Name",
    stars: <Rate defaultValue={4} />,
  },
  {
    key: "3",
    image: "../images/glasses.png",
    price: "$99.33",
    name: "Product Name",
    stars: <Rate defaultValue={4} />,
  },
  {
    key: "4",
    image: "../images/earpod.png",
    price: "$99.33",
    name: "Product Name",
    stars: <Rate defaultValue={4} />,
  },
];

const items = [
  {
    key: "1",
    label: <a> CHOCOLATE & CHIPS</a>,
  },
  {
    key: "2",
    label: <a>COOKING & BAKING NEEDS</a>,
  },
  {
    key: "3",
    label: <a>DAIRY</a>,
  },
  {
    key: "4",
    label: <a>FRUITS & VEGETABLES</a>,
  },
  {
    key: "5",
    label: <a>GROCERY ITEMS</a>,
  },
  {
    key: "6",
    label: <a>HOME MADE FOOD</a>,
  },
  {
    key: "7",
    label: <a>MEAT & FISH</a>,
  },
  {
    key: "8",
    label: <a>PICKLE, SPICE & SAUCE</a>,
  },
  {
    key: "9",
    label: <a>SNACKS ITEMS</a>,
  },
  {
    key: "10",
    label: <a>TEA, BEVERAGE & DRINKS</a>,
  },
];
const items1 = [
  {
    key: "1",
    label: <a>COUPLE T-SHIRT</a>,
  },
  {
    key: "2",
    label: <a>GABARDINE, TWILL, JOGGERS</a>,
  },
  {
    key: "3",
    label: <a>HOODIE & SWEATER</a>,
  },
  {
    key: "4",
    label: <a>INNERWEAR, SOCKS</a>,
  },
  {
    key: "5",
    label: <a>JACKET AND BLAZER</a>,
  },
  {
    key: "6",
    label: <a>JEANS PANT</a>,
  },
  {
    key: "7",
    label: <a>LUNGI</a>,
  },
  {
    key: "8",
    label: <a>POLO SHIRTS</a>,
  },
  {
    key: "9",
    label: <a>PUNJABI, KATUA & FOTUA</a>,
  },
  {
    key: "10",
    label: <a>SHIRTS</a>,
  },
  {
    key: "11",
    label: <a>SHORTS, 3-QUARTER & TROUSER</a>,
  },
  {
    key: "12",
    label: <a>T-SHIRTS</a>,
  },
];
const items2 = [
  {
    key: "1",
    label: <a>ABAYA & BORKHA</a>,
  },
  {
    key: "2",
    label: <a>HIJAB & DUPATTA</a>,
  },
  {
    key: "3",
    label: <a>INNERWEAR AND LINGERIE</a>,
  },
  {
    key: "4",
    label: <a>MODERN AND WESTERN</a>,
  },
  {
    key: "5",
    label: <a>MUSLIMAH COLLECTION</a>,
  },
  {
    key: "6",
    label: <a>SALWAR KAMIZ THREE-PIECE</a>,
  },
  {
    key: "7",
    label: <a>SAREE COLLECTION</a>,
  },
  {
    key: "8",
    label: <a>TOPS AND BLOUSE</a>,
  },
];
const items3 = [
  {
    key: "1",
    label: <a>BODY SPRAY & PERFUME</a>,
  },
  {
    key: "2",
    label: <a>COSMETICS & SKIN</a>,
  },
  {
    key: "3",
    label: <a>GENTS FOOTWEAR</a>,
  },
  {
    key: "4",
    label: <a>GENTS WATCH</a>,
  },
  {
    key: "5",
    label: <a>LADIES FOOTWEAR</a>,
  },
  {
    key: "6",
    label: <a>LADIES WATCH</a>,
  },
  {
    key: "7",
    label: <a>MAKE UP AND CARE</a>,
  },
  {
    key: "8",
    label: <a>SUN GLASS & EYEWEAR</a>,
  },
  {
    key: "9",
    label: <a>JEWELLERY</a>,
  },
];
const items4 = [
  {
    key: "1",
    label: <a>KITCHEN & DINING ITEM</a>,
  },
  {
    key: "2",
    label: <a>FURNITURE</a>,
  },
  {
    key: "3",
    label: <a>GENTS FOOTWEAR</a>,
  },
  {
    key: "4",
    label: <a>HOME & OFFICE APPLIANCES</a>,
  },
  {
    key: "5",
    label: <a>FLOWER & PLAT</a>,
  },
  {
    key: "6",
    label: <a>SUVENIR</a>,
  },
];

function LeftSectiondeshitwo() {
  return (
    <div>
      <div className={Styles.greybox}>
        <div>
          <h3 className={Styles.shoptext}>Shops</h3>
        </div>
        <div>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
            arrow={{
              pointAtCenter: true,
            }}
          >
            <div className={Styles.greysmll}>
              <p className={Styles.text}>Consumer Food</p>
              <RightOutlined className={Styles.text1} />
            </div>
          </Dropdown>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <Dropdown
            menu={{
              items: items1,
            }}
            placement="bottomLeft"
            arrow={{
              pointAtCenter: true,
            }}
          >
            <div className={Styles.greysmll}>
              <p className={Styles.text}>Men’s Clothing</p>
              <RightOutlined className={Styles.text1} />
            </div>
          </Dropdown>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <Dropdown
            menu={{
              items: items2,
            }}
            placement="bottomLeft"
            arrow={{
              pointAtCenter: true,
            }}
          >
            <div className={Styles.greysmll}>
              <p className={Styles.text}>Women’s Clothing</p>
              <RightOutlined className={Styles.text1} />
            </div>
          </Dropdown>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <Dropdown
            menu={{
              items: items3,
            }}
            placement="bottomLeft"
            arrow={{
              pointAtCenter: true,
            }}
          >
            <div className={Styles.greysmll}>
              <p className={Styles.text}>Fashion & Beauty</p>
              <RightOutlined className={Styles.text1} />
            </div>
          </Dropdown>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <Dropdown
            menu={{
              items: items4,
            }}
            placement="bottomLeft"
            arrow={{
              pointAtCenter: true,
            }}
          >
            <div className={Styles.greysmll}>
              <p className={Styles.text}>Home & Living</p>
              <RightOutlined className={Styles.text1} />
            </div>
          </Dropdown>
        </div>
      </div>
      <br />
      <div className={Styles.greybox}>
        <div className={Styles.greysmll}>
          <p className={Styles.text}>Store</p>
          <RightOutlined className={Styles.text1} />
        </div>{" "}
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div className={Styles.greysmll}>
          <p className={Styles.text}>Offers</p>
          <RightOutlined className={Styles.text1} />
        </div>{" "}
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div className={Styles.greysmll}>
          <p className={Styles.text}>Location</p>
          <RightOutlined className={Styles.text1} />
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <Dropdown
            menu={{
              items: pricerange,
            }}
          >
            <Space>
              <div className={Styles.greysmll}>
                <p className={Styles.text}>Price Range</p>
                <DownOutlined className={Styles.text1} />
              </div>
            </Space>
          </Dropdown>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div className={Styles.colors}>
          <p>Color</p>
          <img alt="abc" src="../images/Ellipse 91.png" />
          <img alt="abc" src="../images/Ellipse 92.png" />
          <img alt="abc" src="../images/Ellipse 93.png" />
          <img alt="abc" src="../images/Ellipse 94.png" />
          <img alt="abc" src="../images/Ellipse 95.png" />
        </div>
        <div>
          <Button className={Styles.buttonwhit}>
            <p className={Styles.applyfiltertxt}>Apply Filter</p>
          </Button>
        </div>
      </div>
      <div>
        <img src="../images/image 61.png"></img>
      </div>
      <div>
        <p className={Styles.latesttxt}>Latest Product</p>
      </div>
      <div className={Styles.blackline}>
        {" "}
        <img
          className={Styles.greenlines}
          alt="abc"
          src="../images/greenline.png"
        ></img>{" "}
      </div>
      {data.map((data, index) => (
        <div key={index}>
          <Row className={Styles.rowgpp}>
            <Col>
              {" "}
              <img alt="abc" src={data.image} />{" "}
            </Col>
            <Col className={Styles.mapleftsec}>
              {" "}
              {data.stars}
              <p className={Styles.fontte}> {data.price}</p>
              <p>{data.name}</p>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}

export default LeftSectiondeshitwo;
