import React, { useState, useEffect } from "react";
import Styles from "../styles/Topic.module.css";
import { Row, Col, message } from "antd";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import NewsHeroSection from "@/components/News/NewsHeroSection";
import NewsLeftSection from "@/components/News/NewLeftSection";
import NewsTwoRightSection from "@/components/NewsTwo/NewsTwoRightSection";
import { newsFrom } from "@/helper/axios";
import { useRouter } from "next/router";

function NewsPageTwo() {
  const router = useRouter();

  const [data, setdata] = useState([]);
  const [loading, setloading] = useState([]);
  const [id, setId] = useState(router.query?.NewslId);

  const getNewsForm = (id) => {
    newsFrom(`/${id}`, {
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
    getNewsForm(id);
    console.log(id, "params");
  }, []);
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
          <Col>
            <div className={Styles.centercol12}>
              <NewsTwoRightSection data={data} />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default NewsPageTwo;
