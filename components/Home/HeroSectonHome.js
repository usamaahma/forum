import React from "react";
import Styles from "../../styles/HeroSectonHome.module.css";
import { Col, Row } from "antd";
function HeroSectonHome() {
  return (
    <div>
      <div className={Styles.herobg}>
        <h1 className={Styles.bigtext}>
          Biggest Online platform for <br />
          <a className={Styles.bigtext1}>Bengali Community</a>
        </h1>
        <div>
          <button className={Styles.btnsign}>Sign In</button>
        </div>
        <div className={Styles.bggreen}>
          <Row justify="center">
            <Col>
              <div className={Styles.centercol}>
                <div>
                  <h4>Deshi Shop</h4>
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
                  <h4>Deshi service</h4>
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
                  <h4>Buy & Sell</h4>
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
                  <h4>Rental</h4>
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
                  <h4>Job</h4>
                  <p className={Styles.texthindi}>
                    জবস এর মাধ্যমে নিজে চাকুরী <br /> খুঁজুন ও দেশী ভাই-বোনদের
                    চাকুরীর <br />
                    সুযোগ করে দিতে বিজ্ঞাপন দিন
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default HeroSectonHome;
