import React from "react";
import Styles from "../../styles/BlogRightSection.module.css";
import Image from "next/image";
import Bottle from "../../public/images/Rectangle 45.png";
import Shoes from "../../public/images/Rectangle 46 (1).png";
import { Col, Input, Row, Select } from "antd";
import FeaturedNews from "../News/FeaturedNews";
const { Option } = Select;
function BlogRightSection() {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div>
      <div>
        <Row>
          <Col>
            <div></div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default BlogRightSection;
