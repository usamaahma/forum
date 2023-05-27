import React from "react";
import Styles from "../../styles/Order.module.css";
import Van from "../../public/images/Van.png";
import Van2 from "../../public/images/Van2.png";
import Lapi from "../../public/images/Rectangle 136.png";
import Target from "../../public/images/Group 9890.png";
import Dots from "../../public/images/3 dots (1).png";
import { Menu, Dropdown, Icon } from "antd";
import Image from "next/image";
const data = [
  {
    key: 1,
    name: "lap",
  },
  {
    key: 2,
    name: "lap",
  },
  {
    key: 3,
    name: "lap",
  },
];
const data1 = [
  {
    key: 1,
    name: "lap",
  },
  {
    key: 2,
    name: "lap",
  },
];
const menu = (
  <Menu>
    <Menu.Item key="0">
      <p className={Styles.itemtext}>Cancel Items</p>
    </Menu.Item>
    <Menu.Item key="1">
      <p className={Styles.itemtext}>View Order Details</p>
    </Menu.Item>
    <Menu.Item key="2">
      <p className={Styles.itemtext}>Contact Seller</p>
    </Menu.Item>
    <Menu.Item key="3">
      <p className={Styles.itemtext}>View Invoice</p>
    </Menu.Item>
  </Menu>
);
const menu1 = (
  <Menu>
    <Menu.Item key="0">
      <p className={Styles.itemtext}>Return or replace items</p>
    </Menu.Item>
    <Menu.Item key="1">
      <p className={Styles.itemtext}>Get Help</p>
    </Menu.Item>
    <Menu.Item key="2">
      <p className={Styles.itemtext}>Write a Product Review</p>
    </Menu.Item>
    <Menu.Item key="3">
      <p className={Styles.itemtext}>Contact Seller</p>
    </Menu.Item>
    <Menu.Item key="4">
      <p className={Styles.itemtext}>View Invoice</p>
    </Menu.Item>
  </Menu>
);
function Order() {
  return (
    <div>
      <div className={Styles.orderdiv}>
        <p className={Styles.idtext}>Order ID: 6952043</p>
        <div>
          <div className={Styles.lapdiv}>
            <div>
              <p className={Styles.ortext}>Order date: Sep 2, 2022</p>
              <div className={Styles.smalllapdiv}>
                <Image src={Van} alt="" />
                <p className={Styles.esttext}>
                  Estimated Delivery : Oct 5, 2022
                </p>
              </div>
            </div>
            <div>
              <p className={Styles.shiptext}>Ship To</p>
              <p className={Styles.nametext}>person name</p>
            </div>
            <div className={Styles.smalllapdiv}>
              <button className={Styles.trackbtn}>
                Track Order
                <Image src={Target} alt="" style={{ marginLeft: ".3rem" }} />
              </button>
              <Dropdown overlay={menu} trigger={["click"]}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <div className={Styles.menudiv}>
                    <Image src={Dots} alt="" />
                  </div>
                </a>
              </Dropdown>
            </div>
          </div>
          <hr />
          <br />
          {data.map((index) => (
            <div key={index} className={Styles.lapdiv}>
              <div className={Styles.smalllapdiv}>
                <Image src={Lapi} alt="" className={Styles.imgsize} />
                <div className={Styles.leftdiv}>
                  <p className={Styles.mactext}>MackBook Pro 14’’</p>
                  <p className={Styles.spacetext}>Space Gray | 64 GB | 1 TB</p>
                </div>
              </div>
              <div>
                <p className={Styles.mactext}>$2566.00</p>
                <p className={Styles.spacetext}>Qty: 1</p>
              </div>
            </div>
          ))}
          <hr />
          <p className={Styles.center}>Total</p>
          <p className={Styles.pricetext}> $7,698.00s</p>
        </div>
      </div>
      <br />
      <div className={Styles.orderdiv}>
        <p className={Styles.idtext1}>Order ID: 6952043</p>
        <div>
          <div className={Styles.lapdiv}>
            <div>
              <p className={Styles.ortext1}>Order date: Sep 2, 2022</p>
              <div className={Styles.smalllapdiv}>
                <Image src={Van2} alt="" />
                <p className={Styles.esttext1}>
                  Estimated Delivery : Oct 5, 2022
                </p>
              </div>
            </div>
            <div>
              <p className={Styles.shiptext1}>Ship To</p>
              <p className={Styles.nametext1}>person name</p>
            </div>
            <div className={Styles.smalllapdiv}>
              <button className={Styles.trackbtn1}>
                Track Order
                <Image src={Target} alt="" style={{ marginLeft: ".3rem" }} />
              </button>
              <Dropdown overlay={menu1} trigger={["click"]}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <div className={Styles.menudiv}>
                    <Image src={Dots} alt="" />
                  </div>
                </a>
              </Dropdown>
            </div>
          </div>
          <hr />
          <br />
          {data1.map((index) => (
            <div key={index} className={Styles.lapdiv}>
              <div className={Styles.smalllapdiv}>
                <Image src={Lapi} alt="" className={Styles.imgsize} />
                <div className={Styles.leftdiv}>
                  <p className={Styles.mactext}>MackBook Pro 14’’</p>
                  <p className={Styles.spacetext}>Space Gray | 64 GB | 1 TB</p>
                </div>
              </div>
              <div>
                <p className={Styles.mactext}>$2566.00</p>
                <p className={Styles.spacetext}>Qty: 1</p>
              </div>
            </div>
          ))}
          <hr />
          <p className={Styles.center}>Total</p>
          <p className={Styles.pricetext}> $7,698.00s</p>
        </div>
      </div>
    </div>
  );
}

export default Order;
