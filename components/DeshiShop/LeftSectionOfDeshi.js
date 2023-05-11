import React from "react";
import Styles from "../../styles/LeftSectionOfDeshi.module.css";
import Image from "next/image";
import { RightOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
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
function LeftSectionOfDeshi() {
  return (
    <div>
      <div className={Styles.greybox}>
        <div>
          <h3>Shops</h3>
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
        <div className={Styles.greysmll}>
          <p className={Styles.text}>Men’s Clothing</p>
          <RightOutlined className={Styles.text1} />
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div className={Styles.greysmll}>
          <p className={Styles.text}>Women’s Clothing</p>
          <RightOutlined className={Styles.text1} />
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div className={Styles.greysmll}>
          <p className={Styles.text}>Fashion & Beauty</p>
          <RightOutlined className={Styles.text1} />
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div className={Styles.greysmll}>
          <p className={Styles.text}>Home & Living</p>
          <RightOutlined className={Styles.text1} />
        </div>
      </div>
    </div>
  );
  v;
}

export default LeftSectionOfDeshi;
