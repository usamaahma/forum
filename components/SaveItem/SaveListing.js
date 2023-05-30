import React from "react";
import Styles from "../../styles/DeshiShopViewed.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import detail from "../../detail.json";
import DeshiProductCard from "../DeshiServices/DeshiProductCard";
import BuyProductCard from "../BuyAndSell/BuyProductCard";
import RentalCard from "../Rental/RentalCard";
import JobCard from "../Job/JobCard";
const handleDragStart = (e) => e.preventDefault();
const responsive = {
  375: { items: 1 },
  425: { items: 2 },
  568: { items: 2 },
  768: { items: 3 },
  1024: { items: 3 },
  1440: { items: 4 },
  2560: { items: 4 },
};
function SaveListing() {
  return (
    <div>
      <br />
      <div className={Styles.centercaro}>
        <div className={Styles.textdiv}>
          <h2>Deshi Service</h2>
          <p className={Styles.viewtext}>View all</p>
          <div className={Styles.greenline}></div>
        </div>
        <hr className={Styles.hrline} />
        <div>
          <div className={Styles.carodiv}>
            <AliceCarousel
              mouseTracking
              items={detail.map((index) => (
                <div key={index} className={Styles.centercaro}>
                  <div
                    onDragStart={handleDragStart}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <DeshiProductCard />
                  </div>
                </div>
              ))}
              responsive={responsive}
              // disableButtonsControls
              disableDotsControls
              autoPlay
              autoPlayInterval={2000}
              disableAutoPlayOnAction={false}
            />
          </div>
        </div>
      </div>
      <br />
      <div className={Styles.centercaro}>
        <div className={Styles.textdiv}>
          <h2>Buy & Sell</h2>
          <p className={Styles.viewtext}>View all</p>
          <div className={Styles.greenline}></div>
        </div>
        <hr className={Styles.hrline} />
        <div>
          <div className={Styles.carodiv}>
            <AliceCarousel
              mouseTracking
              items={detail.map((index) => (
                <div key={index} className={Styles.centercaro}>
                  <div
                    onDragStart={handleDragStart}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <BuyProductCard />
                  </div>
                </div>
              ))}
              responsive={responsive}
              // disableButtonsControls
              disableDotsControls
              autoPlay
              autoPlayInterval={2000}
              disableAutoPlayOnAction={false}
            />
          </div>
        </div>
      </div>
      <br />
      <div className={Styles.centercaro}>
        <div className={Styles.textdiv}>
          <h2>Rental</h2>
          <p className={Styles.viewtext}>View all</p>
          <div className={Styles.greenline}></div>
        </div>
        <hr className={Styles.hrline} />
        <div>
          <div className={Styles.carodiv}>
            <AliceCarousel
              mouseTracking
              items={detail.map((index) => (
                <div key={index} className={Styles.centercaro}>
                  <div
                    onDragStart={handleDragStart}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <RentalCard />
                  </div>
                </div>
              ))}
              responsive={responsive}
              // disableButtonsControls
              disableDotsControls
              autoPlay
              autoPlayInterval={2000}
              disableAutoPlayOnAction={false}
            />
          </div>
        </div>
      </div>
      <br />
      <div className={Styles.centercaro}>
        <div className={Styles.textdiv}>
          <h2>Job</h2>
          <p className={Styles.viewtext}>View all</p>
          <div className={Styles.greenline}></div>
        </div>
        <hr className={Styles.hrline} />
        <div>
          <div className={Styles.carodiv}>
            <AliceCarousel
              mouseTracking
              items={detail.map((index) => (
                <div key={index} className={Styles.centercaro}>
                  <div
                    onDragStart={handleDragStart}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <JobCard />
                  </div>
                </div>
              ))}
              responsive={responsive}
              // disableButtonsControls
              disableDotsControls
              autoPlay
              autoPlayInterval={2000}
              disableAutoPlayOnAction={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaveListing;
