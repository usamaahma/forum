import React from "react";
import Styles from "../../styles/Order.module.css";
import Van from "../../public/images/Van.png";
import Lapi from "../../public/images/Rectangle 136.png";
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
function Order() {
  return (
    <div className={Styles.orderdiv}>
      <div>
        <p>Order ID: 6952043</p>
        <div>
          <div className={Styles.lapdiv}>
            <div>
              <p>Order date: Sep 2, 2022</p>
              <div>
                <Image src={Van} alt="" />
                <p>Estimated Delivery : Oct 5, 2022</p>
              </div>
            </div>
            <div>
              <p>Shitp To</p>
              <p>person name</p>
            </div>
            <div>
              <button>Track Order</button>
              <div>....</div>
            </div>
          </div>
          <hr />
          {data.map((index) => (
            <div key={index} className={Styles.lapdiv}>
              <div className={Styles.smalllapdiv}>
                <Image src={Lapi} alt="" />
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
