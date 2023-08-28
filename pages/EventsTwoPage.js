import React, { useEffect, useState } from "react";
import Styles from "../styles/Topic.module.css";
import { Row, Col, message } from "antd";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import EventLeftSection from "@/components/eventPageTwo/EventLeftSection";
import EventRightSection from "@/components/eventPageTwo/EventRightSection";
import EventHeroSection from "@/components/eventPageTwo/EventHeroSection";
import { eventForm } from "../helper/axios";
import { useRouter } from "next/router";
function EventsTwoPage() {
  const router = useRouter();
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  const [id, setId] = useState(router.query?.eventId);
  const getEventForm = (id) => {
    eventForm(`/${id}`, {
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
    getEventForm(id);
    console.log(id, "params");
  }, []);
  return (
    <div>
      <MainHeader />
      <EventHeroSection />
      <div className={Styles.mainland11}>
        <Row justify="center" className={Styles.mbree}>
          <Col>
            <div className={Styles.centercol}>
              <EventLeftSection data={data} />
            </div>
          </Col>
          <Col>
            <div className={Styles.centercol12}>
              <EventRightSection data={data} />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default EventsTwoPage;
