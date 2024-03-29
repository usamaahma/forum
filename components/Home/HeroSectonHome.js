import React from "react";
import Styles from "../../styles/HeroSectonHome.module.css";
import { Col, Row } from "antd";
import Link from "next/link";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const handleDragStart = (e) => e.preventDefault();
const items = [
  <div key={1} className={Styles.centercol} onDragStart={handleDragStart}>
    <div>
      <h3>Deshi service</h3>

      <p className={Styles.texthindi}>
        দেশী ভাই-বোনদের সেবা দিতে
        <br /> দেশী সার্ভিসে আপনার প্রতিষ্ঠানের <br />
        বিজ্ঞাপন দিন।{" "}
      </p>
    </div>
  </div>,
  <div key={2} className={Styles.centercol} onDragStart={handleDragStart}>
    <div>
      <h3>Buy & Sell</h3>
      <p className={Styles.texthindi}>
        বাই এন্ড সেলে আপনার ব্যবহৃত ও <br />
        অব্যবহৃত সকল পণ্য ক্রয়-বিক্রয়ের <br />
        জন্য বিজ্ঞাপন দিন।
      </p>
    </div>
  </div>,
  <div key={3} className={Styles.centercol} onDragStart={handleDragStart}>
    <div>
      <h3>Rental</h3>
      <p className={Styles.texthindi}>
        রেন্টালে আপনার গাড়ি ,বাড়ি সহ <br /> যেকোনো কিছু ভাড়া দিতে বিজ্ঞাপন{" "}
        <br />
        দিন।
      </p>
    </div>
  </div>,
  <div key={4} className={Styles.centercol} onDragStart={handleDragStart}>
    <div>
      <h3>Job</h3>
      <p className={Styles.texthindi}>
        জবস এর মাধ্যমে নিজে চাকুরী <br /> খুঁজুন ও দেশী ভাই-বোনদের চাকুরীর{" "}
        <br />
        সুযোগ করে দিতে বিজ্ঞাপন দিন
      </p>
    </div>
  </div>,
  <div key={5} className={Styles.centercol} onDragStart={handleDragStart}>
    <div>
      <h3>News</h3>
      <p className={Styles.texthindi}>
        কমিউনিটির নানা খবরের আপডেট <br /> থাকুন
      </p>
    </div>
  </div>,
  <div key={6} className={Styles.centercol} onDragStart={handleDragStart}>
    <div>
      <h3>Event</h3>
      <p className={Styles.texthindi}>
        দেশী কমিউনিটির নানা আয়োজন <br /> সম্পর্কে জানুন
      </p>
    </div>
  </div>,
];
const responsive = {
  320: { items: 1 },
  375: { items: 2 },
  425: { items: 2 },
  568: { items: 4 },
  1024: { items: 5 },
  1440: { items: 5 },
  2560: { items: 5 },
};
function HeroSectonHome() {
  return (
    <div>
      <div className={Styles.herobg}>
        <h1 className={Styles.bigtext}>
          Biggest Online platform for <br />
          <a className={Styles.bigtext1}>Bengali Community</a>
        </h1>
        <div>
          <Link href="/LoginScreen">
            <button className={Styles.btnsign}>Sign In</button>
          </Link>
        </div>
        <div className={Styles.bggreen}>
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            disableDotsControls
            autoPlay
            autoPlayInterval={2000}
            disableAutoPlayOnAction={false}
          />
          {/* <Row justify="center">
            <Col>
              <div className={Styles.centercol}>
                <div>
                  <h3>Deshi Shop</h3>

                  <p className={Styles.texthindi}>
                    দেশী শপে দোকান খুলে পণ্য ক্রয়
                    <br /> বিক্রয় করুন।
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className={Styles.centercol}>
                <div>
                  <Slide direction="right" triggerOnce duration="3000">
                    <h3>Deshi service</h3>
                  </Slide>
                  <p className={Styles.texthindi}>
                    দেশী ভাই-বোনদের সেবা দিতে
                    <br /> দেশী সার্ভিসে আপনার প্রতিষ্ঠানের <br />
                    বিজ্ঞাপন দিন।{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className={Styles.centercol}>
                <div>
                  <Slide direction="right" triggerOnce duration="4000">
                    <h3>Buy & Sell</h3>
                  </Slide>
                  <p className={Styles.texthindi}>
                    বাই এন্ড সেলে আপনার ব্যবহৃত ও <br />
                    অব্যবহৃত সকল পণ্য ক্রয়-বিক্রয়ের <br />
                    জন্য বিজ্ঞাপন দিন।
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className={Styles.centercol}>
                <div>
                  <Slide direction="right" triggerOnce duration="5000">
                    <h3>Rental</h3>
                  </Slide>
                  <p className={Styles.texthindi}>
                    রেন্টালে আপনার গাড়ি ,বাড়ি সহ <br /> যেকোনো কিছু ভাড়া দিতে
                    বিজ্ঞাপন <br />
                    দিন।
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className={Styles.centercol}>
                <div>
                  <Slide direction="right" triggerOnce duration="6000">
                    <h3>Job</h3>
                  </Slide>
                  <p className={Styles.texthindi}>
                    জবস এর মাধ্যমে নিজে চাকুরী <br /> খুঁজুন ও দেশী ভাই-বোনদের
                    চাকুরীর <br />
                    সুযোগ করে দিতে বিজ্ঞাপন দিন
                  </p>
                </div>
              </div>
            </Col>
          </Row> */}
        </div>
      </div>
    </div>
  );
}

export default HeroSectonHome;
