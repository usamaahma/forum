import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import Styles from "../styles/BuySellDetail.module.css";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import HeroRentalDetail from "@/components/RentalDetail/HeroRentalDetail";
import LeftRentalDetail from "@/components/RentalDetail/LeftRentalDetail";
import RightRentalDetail from "@/components/RentalDetail/RightRentalDetail";
import CarouselRentalDetail from "@/components/RentalDetail/CarosuelRentalDetail";
import { useRouter } from "next/router";
import { rentalForm } from "@/helper/axios";
function RentalDetailPage() {
  const router = useRouter();
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  const [id, setId] = useState(router.query?.rentalId);

  const getRentalForm = (id) => {
    rentalForm(`/${id}`, {
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
    getRentalForm(id);
    console.log(id, "params");
  }, []);
  return (
    <div>
      <MainHeader />
      <HeroRentalDetail />
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.centercolde}>
              <LeftRentalDetail data={data} />
            </div>
          </Col>
          <Col>
            <div className={Styles.centercolde1}>
              <RightRentalDetail data={data} />
            </div>
          </Col>
        </Row>
      </div>
      <div className={Styles.centercolde}>
        <div>
          <CarouselRentalDetail />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RentalDetailPage;
