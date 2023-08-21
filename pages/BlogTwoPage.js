import React, { useState, useEffect } from "react";
import Styles from "../styles/Topic.module.css";
import { Row, Col } from "antd";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import BlogHeroSection from "@/components/Blog/BlogHeroSection";
import BlogImageSection from "@/components/Blog/BlogImageSection";
import BlogTwoLeftSection from "@/components/BlogTwo/BlogTwoLeftSection";
import BlogTwoRightSection from "@/components/BlogTwo/BlogTwoRightSection";
import { blogForm } from "../helper/axios";
import { useRouter } from "next/router";

function BlogTwoPage() {
  const router = useRouter();
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  const [id, setId] = useState(router.query?.blogId);
  const getBlogForm = (id) => {
    blogForm(`/${id}`, {
      method: "get",
    })
      .then((res) => {
        console.log(res.data, "id");
        setdata(res.data);
      })
      .catch(() => {
        message.error("an error occured please try later");
      })
      .catch((error) => console.log(error))
      .finally(() => setloading(false));
  };

  useEffect(() => {
    // Use the router query object to access the "id" parameter
    getBlogForm(id);
    console.log(id, "params");
  }, []);
  return (
    <div>
      <MainHeader />
      <BlogHeroSection />
      <div className={Styles.mainland11}>
        <Row justify="center" className={Styles.mbree}>
          <Col>
            <div className={Styles.centercol}>
              <BlogTwoLeftSection />
            </div>
          </Col>
          <Col>
            <div className={Styles.centercol12}>
              <BlogTwoRightSection data={data} />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default BlogTwoPage;
