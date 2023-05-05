import React from "react";
import Styles from "../styles/Topic.module.css";
import { Row, Col } from "antd";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import NewsHeroSection from "@/components/News/NewsHeroSection";
import NewsLeftSection from "@/components/News/NewLeftSection";
import NewsRightSection from "@/components/News/NewsRightSection";

function NewsPage() {
  return (
    <div>
      <MainHeader />
      <NewsHeroSection />
      <div className={Styles.mainland11}>
        <Row justify="space-evenly" className={Styles.mbree}>
          <Col lg={6}>
            <div className={Styles.centercol}>
              <NewsLeftSection />
            </div>
          </Col>
          <Col lg={12}>
            <div className={Styles.centercol}>
              <NewsRightSection />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default NewsPage;
