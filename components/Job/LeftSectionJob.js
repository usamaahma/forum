import React from "react";
import Styles from "../../styles/LeftSectionJob.module.css";
import Image from "next/image";
import { RightOutlined } from "@ant-design/icons";
import Watch from "../../public/images/Rectangle 75.png";
import User from "../../public/images/greeuser.png";
import Locatin from "../../public/images/Locatin.png";
import Fame1 from "../../public/images/Frame 44870.png";
import Fame2 from "../../public/images/Frame 44871.png";
import Fame3 from "../../public/images/Frame 44872.png";
import Fame4 from "../../public/images/Frame 44873.png";
import Fame5 from "../../public/images/Frame 44874.png";
import { Dropdown, Input, Slider } from "antd";
const onChange = (value) => {
  console.log("onChange: ", value);
};
const onAfterChange = (value) => {
  console.log("onAfterChange: ", value);
};
const data = [
  {
    key: 1,
    name: "section",
  },
  {
    key: 2,
    name: "section",
  },
  {
    key: 3,
    name: "section",
  },
];
const data1 = [
  {
    key: 1,
    cate: "Handyman",
    img: <Image src={Fame1} alt="" />,
  },
  {
    key: 2,
    cate: "Tax File",
    img: <Image src={Fame2} alt="" />,
  },
  {
    key: 3,
    cate: "Mover",
    img: <Image src={Fame3} alt="" />,
  },
  {
    key: 4,
    cate: "Car Service",
    img: <Image src={Fame4} alt="" />,
  },
  {
    key: 5,
    cate: "Electrician",
    img: <Image src={Fame5} alt="" />,
  },
];
// const items = [
//   {
//     key: "1",
//     label: <a> CHOCOLATE & CHIPS</a>,
//   },
//   {
//     key: "2",
//     label: <a>COOKING & BAKING NEEDS</a>,
//   },
//   {
//     key: "3",
//     label: <a>DAIRY</a>,
//   },
//   {
//     key: "4",
//     label: <a>FRUITS & VEGETABLES</a>,
//   },
//   {
//     key: "5",
//     label: <a>GROCERY ITEMS</a>,
//   },
//   {
//     key: "6",
//     label: <a>HOME MADE FOOD</a>,
//   },
//   {
//     key: "7",
//     label: <a>MEAT & FISH</a>,
//   },
//   {
//     key: "8",
//     label: <a>PICKLE, SPICE & SAUCE</a>,
//   },
//   {
//     key: "9",
//     label: <a>SNACKS ITEMS</a>,
//   },
//   {
//     key: "10",
//     label: <a>TEA, BEVERAGE & DRINKS</a>,
//   },
// ];
// const items1 = [
//   {
//     key: "1",
//     label: <a>COUPLE T-SHIRT</a>,
//   },
//   {
//     key: "2",
//     label: <a>GABARDINE, TWILL, JOGGERS</a>,
//   },
//   {
//     key: "3",
//     label: <a>HOODIE & SWEATER</a>,
//   },
//   {
//     key: "4",
//     label: <a>INNERWEAR, SOCKS</a>,
//   },
//   {
//     key: "5",
//     label: <a>JACKET AND BLAZER</a>,
//   },
//   {
//     key: "6",
//     label: <a>JEANS PANT</a>,
//   },
//   {
//     key: "7",
//     label: <a>LUNGI</a>,
//   },
//   {
//     key: "8",
//     label: <a>POLO SHIRTS</a>,
//   },
//   {
//     key: "9",
//     label: <a>PUNJABI, KATUA & FOTUA</a>,
//   },
//   {
//     key: "10",
//     label: <a>SHIRTS</a>,
//   },
//   {
//     key: "11",
//     label: <a>SHORTS, 3-QUARTER & TROUSER</a>,
//   },
//   {
//     key: "12",
//     label: <a>T-SHIRTS</a>,
//   },
// ];
// const items2 = [
//   {
//     key: "1",
//     label: <a>ABAYA & BORKHA</a>,
//   },
//   {
//     key: "2",
//     label: <a>HIJAB & DUPATTA</a>,
//   },
//   {
//     key: "3",
//     label: <a>INNERWEAR AND LINGERIE</a>,
//   },
//   {
//     key: "4",
//     label: <a>MODERN AND WESTERN</a>,
//   },
//   {
//     key: "5",
//     label: <a>MUSLIMAH COLLECTION</a>,
//   },
//   {
//     key: "6",
//     label: <a>SALWAR KAMIZ THREE-PIECE</a>,
//   },
//   {
//     key: "7",
//     label: <a>SAREE COLLECTION</a>,
//   },
//   {
//     key: "8",
//     label: <a>TOPS AND BLOUSE</a>,
//   },
// ];
// const items3 = [
//   {
//     key: "1",
//     label: <a>BODY SPRAY & PERFUME</a>,
//   },
//   {
//     key: "2",
//     label: <a>COSMETICS & SKIN</a>,
//   },
//   {
//     key: "3",
//     label: <a>GENTS FOOTWEAR</a>,
//   },
//   {
//     key: "4",
//     label: <a>GENTS WATCH</a>,
//   },
//   {
//     key: "5",
//     label: <a>LADIES FOOTWEAR</a>,
//   },
//   {
//     key: "6",
//     label: <a>LADIES WATCH</a>,
//   },
//   {
//     key: "7",
//     label: <a>MAKE UP AND CARE</a>,
//   },
//   {
//     key: "8",
//     label: <a>SUN GLASS & EYEWEAR</a>,
//   },
//   {
//     key: "9",
//     label: <a>JEWELLERY</a>,
//   },
// ];
// const items4 = [
//   {
//     key: "1",
//     label: <a>KITCHEN & DINING ITEM</a>,
//   },
//   {
//     key: "2",
//     label: <a>FURNITURE</a>,
//   },
//   {
//     key: "3",
//     label: <a>GENTS FOOTWEAR</a>,
//   },
//   {
//     key: "4",
//     label: <a>HOME & OFFICE APPLIANCES</a>,
//   },
//   {
//     key: "5",
//     label: <a>FLOWER & PLAT</a>,
//   },
//   {
//     key: "6",
//     label: <a>SUVENIR</a>,
//   },
// ];
function LeftSectionJob() {
  return (
    <div>
      <div className={Styles.greybox}>
        <div>
          {/* <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
            arrow={{
              pointAtCenter: true,
            }}
          > */}
          <div className={Styles.greysmll}>
            <p className={Styles.text}>Filter</p>
            <RightOutlined className={Styles.text1} />
          </div>
          {/* </Dropdown> */}
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          {/* <Dropdown
            menu={{
              items: items1,
            }}
            placement="bottomLeft"
            arrow={{
              pointAtCenter: true,
            }}
          > */}
          <div className={Styles.greysmll}>
            <p className={Styles.text}>Category</p>
            <RightOutlined className={Styles.text1} />
          </div>
          {/* </Dropdown> */}
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          {/* <Dropdown
            menu={{
              items: items2,
            }}
            placement="bottomLeft"
            arrow={{
              pointAtCenter: true,
            }}
          > */}
          <div className={Styles.greysmll}>
            <p className={Styles.text}>Location</p>
            <RightOutlined className={Styles.text1} />
          </div>
          {/* </Dropdown> */}
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          {/* <Dropdown
            menu={{
              items: items3,
            }}
            placement="bottomLeft"
            arrow={{
              pointAtCenter: true,
            }}
          > */}
          <div className={Styles.greysmll}>
            <p className={Styles.text}>Price range</p>
            <RightOutlined className={Styles.text1} />
          </div>
          {/* </Dropdown> */}
          <div className={Styles.rangdiv}>
            <Slider
              range
              step={10}
              defaultValue={[20, 50]}
              onChange={onChange}
              onAfterChange={onAfterChange}
            />
          </div>
          <div className={Styles.indv}>
            <div>
              <p>Min</p>
              <div>
                <Input placeholder="$" className={Styles.input} />
              </div>
            </div>
            <div>
              <p>Max</p>
              <div>
                <Input placeholder="$399" className={Styles.input} />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.rangdiv}>
          <button className={Styles.btn}>Apply Filter</button>
        </div>
      </div>
      <div className={Styles.whitediv}>
        <p className={Styles.textbig}>Featured Services</p>
        <div
          style={{
            backgroundColor: "#42b00f",
            borderWidth: 1,
            width: "9rem",
            border: "#42b00f 2px solid",
            position: "absolute",
          }}
        ></div>
        <hr />
        {data.map((index) => (
          <div key={index} className={Styles.divflexwatch}>
            <div>
              <Image src={Watch} alt="" className={Styles.watchsize} />
            </div>
            <div className={Styles.divleft}>
              <button className={Styles.greenbtm}>Construction</button>
              <p className={Styles.textli}>Lifayat Builders</p>
              <div className={Styles.icondiv}>
                <Image src={User} alt="" />
                <p className={Styles.usertext}>Username</p>
              </div>
              <div className={Styles.icondiv}>
                <Image src={Locatin} alt="" className={Styles.loic} />
                <p className={Styles.usertext}>4517 Washington Ave.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={Styles.whitediv}>
        <p className={Styles.textbig}>Popular Category</p>
        <div
          style={{
            backgroundColor: "#42b00f",
            borderWidth: 1,
            width: "9rem",
            border: "#42b00f 2px solid",
            position: "absolute",
          }}
        ></div>
        <hr />
        {data1.map((item, index) => (
          <div key={index} className={Styles.popdiv}>
            <div>{item.img}</div>
            <p className={Styles.catetext}>{item.cate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftSectionJob;
