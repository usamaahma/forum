import React from "react";
import Styles from "../styles/Topic.module.css";
import { Row, Col } from "antd";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import EventLeftSection from "@/components/eventPageTwo/EventLeftSection";
import EventRightSection from "@/components/eventPageTwo/EventRightSection";
import EventHeroSection from "@/components/eventPageTwo/EventHeroSection";
import Eventform from "@/components/eventpage/eventform";

function EventsFormPage() {
  return (
    <div>
      <MainHeader />
      <EventHeroSection />
      <Eventform />
      <Footer />
    </div>
  );
}

export default EventsFormPage;
