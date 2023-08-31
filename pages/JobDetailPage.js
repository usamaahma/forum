import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import Styles from "../styles/BuySellDetail.module.css";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import HeroJobDetail from "@/components/JobDetail/HeroJobDetail";
import LeftJobDetail from "@/components/JobDetail/LeftJobDetail";
import RightJobDetail from "@/components/JobDetail/RightJobDetail";
import CarouselJobDetail from "@/components/JobDetail/CarouselJobDetail";
import { jobForm } from "@/helper/axios";
import { useRouter } from "next/router";
function JobDetailPage() {
  const router = useRouter();
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  const [id, setId] = useState(router.query?.jobId);

  const getJobForm = (id) => {
    jobForm(`/${id}`, {
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
    getJobForm(id);
    console.log(id, "params");
  }, []);
  return (
    <div>
      <MainHeader />
      <HeroJobDetail />
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.centercolde}>
              <LeftJobDetail data={data} />
            </div>
          </Col>
          <Col>
            <div className={Styles.centercolde1}>
              <RightJobDetail data={data} />
            </div>
          </Col>
        </Row>
      </div>
      <div className={Styles.centercolde}>
        <div>
          <CarouselJobDetail />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default JobDetailPage;
