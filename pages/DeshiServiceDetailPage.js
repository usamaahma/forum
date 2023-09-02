import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import Styles from "../styles/BuySellDetail.module.css";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import HeroDeshiDetail from "@/components/DeshiServiceDetail/HeroDeshiDetail";
import LeftServiceDetail from "@/components/DeshiServiceDetail/LeftServiceDetail";
import RightServiceDetail from "@/components/DeshiServiceDetail/RightServiceDetail";
import CarouselDeshiService from "@/components/DeshiServiceDetail/CarouselDeshiService";
import { deshiOneForm } from "@/helper/axios";
import { useRouter } from "next/router";
function DeshiServiceDetailPage() {
  const router = useRouter();
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  const [id, setId] = useState(router.query?.deshiServicelId);

  const getDeshiOneForm = (id) => {
    deshiOneForm(`/${id}`, {
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
    getDeshiOneForm(id);
    console.log(id, "params");
  }, []);
  return (
    <div>
      <MainHeader />
      <HeroDeshiDetail />
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.centercolde}>
              <LeftServiceDetail data={data} />
            </div>
          </Col>
          <Col>
            <div className={Styles.centercolde1}>
              <RightServiceDetail data={data} />
            </div>
          </Col>
        </Row>
      </div>
      <div className={Styles.centercolde}>
        <div>
          <CarouselDeshiService />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DeshiServiceDetailPage;
