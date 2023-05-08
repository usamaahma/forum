import React from "react";
import Styles from "../styles/Topic.module.css";
import { Row, Col } from "antd";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import NewsHeroSection from "@/components/News/NewsHeroSection";
import NewsLeftSection from "@/components/News/NewLeftSection";
import NewsTwoRightSection from "@/components/NewsTwo/NewsTwoRightSection";

function NewsPageTwo() {
  return (
    <div>
      <MainHeader />
      <NewsHeroSection />
      <div className={Styles.mainland11}>
        <Row justify="center" className={Styles.mbree}>
          <Col>
            <div className={Styles.centercol}>
              <NewsLeftSection />
            </div>
          </Col>
          <Col lg={14}>
            <div className={Styles.centercol12}>
              <NewsTwoRightSection />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default NewsPageTwo;
