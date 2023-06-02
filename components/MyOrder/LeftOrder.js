import React from "react";
import Styles from "../../styles/LeftOrder.module.css";
import Image from "next/image";
import { RightOutlined } from "@ant-design/icons";
import Sign from "../../public/images/Group 98810.png";
import Link from "next/link";

function LeftOrder() {
  return (
    <div>
      <div className={Styles.greybox}>
        <div>
          <Link href="./MyOrderPage">
            <div className={Styles.greysmll}>
              <p className={Styles.text}>Your Order</p>
              <RightOutlined className={Styles.text1} />
            </div>
          </Link>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <Link href="./MyProfilePage">
            <div className={Styles.greysmll}>
              <p className={Styles.text}>Your Profile</p>
              <RightOutlined className={Styles.text1} />
            </div>
          </Link>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <Link href="./RecentlyViewedPage">
            <div className={Styles.greysmll}>
              <p className={Styles.text}>Recently Viewed</p>
              <RightOutlined className={Styles.text1} />
            </div>
          </Link>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <Link href="./SaveItemPage">
            <div className={Styles.greysmll}>
              <p className={Styles.text}>Saved Items</p>
              <RightOutlined className={Styles.text1} />
            </div>
          </Link>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <Link href="./YourReviewsPage">
            <div className={Styles.greysmll}>
              <p className={Styles.text}>Your Reviews</p>
              <RightOutlined className={Styles.text1} />
            </div>
          </Link>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <Link href="./MyComments">
            <div className={Styles.greysmll}>
              <p className={Styles.text}>Your Comments</p>
              <RightOutlined className={Styles.text1} />
            </div>
          </Link>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <Link href="./MyCoupon">
            <div className={Styles.greysmll}>
              <p className={Styles.text}>Coupons & offers</p>
              <RightOutlined className={Styles.text1} />
            </div>
          </Link>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <Link href="./MyFollowed">
            <div className={Styles.greysmll}>
              <p className={Styles.text}>Followed Shops</p>
              <RightOutlined className={Styles.text1} />
            </div>
          </Link>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <Link href="./MyListing">
            <div className={Styles.greysmll}>
              <p className={Styles.text}>Your Listings</p>
              <RightOutlined className={Styles.text1} />
            </div>
          </Link>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <Link href="./MyPost">
            <div className={Styles.greysmll}>
              <p className={Styles.text}>Your Posts</p>
              <RightOutlined className={Styles.text1} />
            </div>
          </Link>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <Link href="./MySellerPage">
            <div className={Styles.greysmll}>
              <p className={Styles.text}>Seller Room</p>
              <RightOutlined className={Styles.text1} />
            </div>
          </Link>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <div className={Styles.greysmll1}>
            <Image src={Sign} alt="" className={Styles.sign} />
            <p className={Styles.text}>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftOrder;
