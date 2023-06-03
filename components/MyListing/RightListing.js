import React from "react";
import { Tabs } from "antd";
import Styles from "../../styles/RightListing.module.css";
import Switch from "./Switch";
import ServiceCard from "./ServiceCard";
import BuySellCard from "./BuySellCard";
import RentalCard from "./Rentalcard";
import JobCard from "./Jobcard";

function callback(key) {
  console.log(key);
}

const { TabPane } = Tabs;

function RightListing() {
  return (
    <div className={Styles.flexbet}>
      <div>
        <Tabs
          onChange={callback}
          type="card"
          size="small"
          className={Styles.sizetab}
        >
          <TabPane tab="Service" key="1" className={Styles.blscktext}>
            <div>
              <p className={Styles.rcnttxte}>Recent Listing</p>
              <div className={Styles.blackln}>
                <img
                  className={Styles.imgabs}
                  alt="Abc"
                  src="../images/greenline.png"
                ></img>
              </div>
              <div className={Styles.srvcard}>
                {" "}
                <ServiceCard />{" "}
              </div>
            </div>
          </TabPane>
          <TabPane tab="Buy& Sell" key="2" className={Styles.blscktext}>
            <div>
              <p className={Styles.rcnttxte}>Recent Listing</p>
              <div className={Styles.blackln}>
                <img
                  className={Styles.imgabs}
                  alt="Abc"
                  src="../images/greenline.png"
                ></img>
              </div>
              <div className={Styles.srvcard}>
                {" "}
                <BuySellCard />{" "}
              </div>
            </div>{" "}
          </TabPane>
          <TabPane tab="Rental" key="3" className={Styles.blscktext}>
            <div>
              <p className={Styles.rcnttxte}>Recent Listing</p>
              <div className={Styles.blackln}>
                <img
                  className={Styles.imgabs}
                  alt="Abc"
                  src="../images/greenline.png"
                ></img>
              </div>
              <div className={Styles.srvcard}>
                {" "}
                <RentalCard />{" "}
              </div>
            </div>{" "}
          </TabPane>
          <TabPane tab="Job" key="4" className={Styles.blscktext}>
            <div>
              <p className={Styles.rcnttxte}>Recent Listing</p>
              <div className={Styles.blackln}>
                <img
                  className={Styles.imgabs}
                  alt="Abc"
                  src="../images/greenline.png"
                ></img>
              </div>
              <div className={Styles.srvcard}>
                {" "}
                <JobCard />{" "}
              </div>
            </div>{" "}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default RightListing;
