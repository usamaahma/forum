import React from "react";
import Styles from "../styles/Topic.module.css";
import { Row, Col } from "antd";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import BlogLeftSection from "@/components/Blog/BlogLeftSection";
import BlogRightSection from "@/components/Blog/BlogRightSection";
import BlogHeroSection from "@/components/Blog/BlogHeroSection";
import BlogImageSection from "@/components/Blog/BlogImageSection";

function BlogPage() {
  return (
    <div>
      <MainHeader />
      <BlogHeroSection />
      <BlogImageSection />
      <div className={Styles.mainland11}>
        <Row justify="space-evenly" className={Styles.mbree}>
          <Col lg={10}>
            <div className={Styles.centercol}>
              <BlogLeftSection />
            </div>
          </Col>
          <Col lg={10}>
            <div className={Styles.centercol}>
              <BlogRightSection />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
