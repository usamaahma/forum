import React from "react";
import Styles from "../../styles/MainAccount.module.css";
import { Col, Row } from "antd";
import Bag from "../../public/images/Group 9880.png";
import Pro from "../../public/images/Group 9881.png";
import Eye from "../../public/images/Group 9882.png";
import Heart from "../../public/images/Group 9883.png";
import Star from "../../public/images/Group 9884.png";
import Offer from "../../public/images/Group 9885.png";
import Add from "../../public/images/Group 9886.png";
import List from "../../public/images/Group 9887.png";
import Post from "../../public/images/Group 9888.png";
import Room from "../../public/images/Group 9889.png";
import Sign from "../../public/images/Group 98810.png";
import Image from "next/image";
const data = [
  {
    key: 1,
    image: <Image src={Bag} alt="" />,
    text: "Your Orders",
    text1: " Track, Return, Cancel, Invoice for All Order",
  },
  {
    key: 2,
    image: <Image src={Pro} alt="" />,
    text: "Your Profile",
    text1: "Personal Info, Login & Security,Address, Payment",
  },
  {
    key: 3,
    image: <Image src={Eye} alt="" />,
    text: "Recently Viewed",
    text1: "Recently Viewed Product & Listing",
  },
  {
    key: 4,
    image: <Image src={Heart} alt="" />,
    text: "Wishlist",
    text1: "Liked Product & Listing",
  },
  {
    key: 5,
    image: <Image src={Star} alt="" />,
    text: "Your Review",
    text1: "Reviewed Product, Listing & Post Comment ",
  },
  {
    key: 6,
    image: <Image src={Star} alt="" />,
    text: "Your Comments",
    text1: "Reviewed Product, Listing & Post Comment ",
  },
  {
    key: 7,
    image: <Image src={Offer} alt="" />,
    text: "Coupons & Offer",
    text1: "Recent Coupon & Offers",
  },
  {
    key: 8,
    image: <Image src={Add} alt="" />,
    text: "Followed ",
    text1: "Followed Community Members",
  },
  {
    key: 9,
    image: <Image src={List} alt="" />,
    text: "Your Listing",
    text1:
      "Listed Service & Product on Deshi Service, Buy & Sell , Rental & Job",
  },
  {
    key: 10,
    image: <Image src={Post} alt="" />,
    text: "Your Post",
    text1: "Posted Topic & Article on Forum & Blog",
  },
  {
    key: 11,
    image: <Image src={Room} alt="" />,
    text: "Seller Room ",
    text1: "Dashboard, Add Product, Orders, Withdrawal",
  },
  {
    key: 12,
    image: <Image src={Sign} alt="" />,
    text: "Sign Out",
    // text1: " Track, Return, Cancel, Invoice for All Order",
  },
];
function MainAccount() {
  return (
    <div className={Styles.centerbigbox}>
      <div>
        <Row justify="center" className={Styles.widthdiv}>
          {data.map((item, index) => (
            <Col key={index} xxl={7} xl={7} lg={7} md={10} xs={24}>
              <div className={Styles.centerbox}>
                <div className={Styles.grebox}>
                  {item.image}
                  <div>
                    <p className={Styles.yourtext}> {item.text}</p>
                    <p className={Styles.tracktext}>{item.text1}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default MainAccount;
