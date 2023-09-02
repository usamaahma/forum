import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Styles from "../styles/BuySellDetail.module.css";
import LeftSectionBuyDetail from "@/components/BuyAndSellDetail/LeftSectionBuyDetail";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import HeroBuyDetail from "@/components/BuyAndSellDetail/HeroBuyDetail";
import RightSectionBuyDetail from "@/components/BuyAndSellDetail/RightSectionBuyDetail";
import CarouselDetail from "@/components/BuyAndSellDetail/CarouselDetail";
import { buySellForm } from "@/helper/axios";
import { useRouter } from "next/router";

function BuySellDetailPage() {
  const router = useRouter();
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  const [id, setId] = useState(router.query?.buySellId);

  const getBuySellForm = (id) => {
    buySellForm(`/${id}`, {
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
    getBuySellForm(id);
    console.log(id, "params");
  }, []);
  return (
    <div>
      <MainHeader />
      <HeroBuyDetail />
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.centercolde}>
              <LeftSectionBuyDetail data={data} />
            </div>
          </Col>
          <Col>
            <div className={Styles.centercolde1}>
              <RightSectionBuyDetail data={data} />
            </div>
          </Col>
        </Row>
      </div>
      <div className={Styles.centercolde}>
        <div>
          <CarouselDetail />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BuySellDetailPage;
