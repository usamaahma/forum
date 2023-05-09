import React from "react";
import Styles from "../../styles/BlogRightSection.module.css";
import { Col, Input, Row, Select } from "antd";
import card from "../../card.json";
import Link from "next/link";
import BlogCard from "./BlogCard";
function BlogRightSection() {
  return (
    <div>
      <Row justify="center" className={Styles.widthrow}>
        {card.map((index) => (
          <Col key={index} xxl={7}>
            <BlogCard />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BlogRightSection;
