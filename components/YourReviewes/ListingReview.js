import React from "react";
import Styles from "../../styles/ListingReview.module.css";
import { Rate, Dropdown } from "antd";
import { DashOutlined, UserOutlined } from "@ant-design/icons";
import Product from "../../public/images/Rectangle 75.png";
import Locatin from "../../public/images/Locatin (1).png";
import User from "../../public/images/User.png";
import Image from "next/image";
const items = [
  {
    label: <a className={Styles.edit}>Edit</a>,
    key: "0",
  },
  {
    label: <a className={Styles.edit}>Delete</a>,
    key: "1",
  },
];
const data = [{ name: "produdct" }, { name: "produdct" }, { name: "produdct" }];
function ListingReview() {
  return (
    <div>
      <div className={Styles.mainReview}>
        {data.map((index) => (
          <div key={index}>
            <div className={Styles.smllprodiv}>
              <Rate />
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <p onClick={(e) => e.preventDefault()}>
                  <DashOutlined />
                </p>
              </Dropdown>
            </div>
            <div className={Styles.padding}>
              <p className={Styles.goodtext}>Good Product </p>
              <p className={Styles.longtext}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layoIt is
                a long established
              </p>
              <div className={Styles.divflexbox}>
                <Image src={Product} alt="" className={Styles.imgsize} />
                <div className={Styles.marleft}>
                  <p className={Styles.shoptext}>Link Contactor</p>
                  <div className={Styles.divbox}>
                    <UserOutlined />
                    <p className={Styles.soldtext}>Username</p>
                  </div>
                  <div className={Styles.divbox}>
                    <Image src={Locatin} alt="" />
                    <p className={Styles.soldtext}>4517 Washington Ave.</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className={Styles.line} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListingReview;
