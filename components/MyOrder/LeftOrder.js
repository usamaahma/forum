import React from "react";
import Styles from "../../styles/LeftOrder.module.css";
import Image from "next/image";
import { RightOutlined } from "@ant-design/icons";

function LeftOrder() {
  return (
    <div>
      <div className={Styles.greybox}>
        <div>
          <div className={Styles.greysmll}>
            <p className={Styles.text}>Your Order</p>
            <RightOutlined className={Styles.text1} />
          </div>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <div className={Styles.greysmll}>
            <p className={Styles.text}>Your Profile</p>
            <RightOutlined className={Styles.text1} />
          </div>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <div className={Styles.greysmll}>
            <p className={Styles.text}>Recently Viewed</p>
            <RightOutlined className={Styles.text1} />
          </div>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <div className={Styles.greysmll}>
            <p className={Styles.text}>Saved Items</p>
            <RightOutlined className={Styles.text1} />
          </div>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <div className={Styles.greysmll}>
            <p className={Styles.text}>Your Reviews</p>
            <RightOutlined className={Styles.text1} />
          </div>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <div className={Styles.greysmll}>
            <p className={Styles.text}>Your Comments</p>
            <RightOutlined className={Styles.text1} />
          </div>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <div className={Styles.greysmll}>
            <p className={Styles.text}>Coupons & offers</p>
            <RightOutlined className={Styles.text1} />
          </div>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <div className={Styles.greysmll}>
            <p className={Styles.text}>Followed Shops</p>
            <RightOutlined className={Styles.text1} />
          </div>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <div className={Styles.greysmll}>
            <p className={Styles.text}>Your Listings</p>
            <RightOutlined className={Styles.text1} />
          </div>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <div className={Styles.greysmll}>
            <p className={Styles.text}>Your Posts</p>
            <RightOutlined className={Styles.text1} />
          </div>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <div className={Styles.greysmll}>
            <p className={Styles.text}>Seller Room</p>
            <RightOutlined className={Styles.text1} />
          </div>
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          <div className={Styles.greysmll}>
            <p className={Styles.text}>Sign Out</p>
            {/* <RightOutlined className={Styles.text1} /> */}
          </div>
        </div>
      </div>
    </div>
  );
  v;
}

export default LeftOrder;
