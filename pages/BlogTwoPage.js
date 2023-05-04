import React from "react";
import Styles from "../styles/Topic.module.css";
import { Row, Col } from "antd";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import BlogHeroSection from "@/components/Blog/BlogHeroSection";
import BlogImageSection from "@/components/Blog/BlogImageSection";
import BlogTwoLeftSection from "@/components/BlogTwo/BlogTwoLeftSection";
import BlogTwoRightSection from "@/components/BlogTwo/BlogTwoRightSection";
import BlogCarousel from "@/components/BlogTwo/BlogCarousel";

function BlogTwoPage() {
  return (
    <div>
      <MainHeader />
      <BlogHeroSection />
      <div className={Styles.mainland11}>
        <Row justify="space-evenly" className={Styles.mbree}>
          <Col lg={6}>
            <div className={Styles.centercol}>
              <BlogTwoLeftSection />
            </div>
          </Col>
          <Col lg={12}>
            <div className={Styles.centercol}>
              <BlogTwoRightSection />
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <BlogCarousel />
      </div>
      <Footer />
    </div>
  );
}

export default BlogTwoPage;
