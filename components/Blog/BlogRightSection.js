import React from "react";
import Styles from "../../styles/BlogRightSection.module.css";
import Image from "next/image";
// import Bottle from "../../public/images/Rectangle 45.png";
import Rectangle from "../../public/images/Rectangle 75.png";
import Like from "../../public/images/Like1.png";
import Share from "../../public/images/Share1.png";
import Comment from "../../public/images/Comment1.png";
import { Col, Input, Row, Select } from "antd";
import card from "../../card.json";
import Link from "next/link";
import BlogCard from "./BlogCard";
function BlogRightSection() {
  return (
    <div>
      <Row justify="space-evenly">
        {card.map(() => (
          <Col>
            <BlogCard />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BlogRightSection;
