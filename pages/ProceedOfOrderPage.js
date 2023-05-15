import { Row, Col } from "antd";
import React from "react";
import Styles from "../styles/DeshiShopPage.module.css";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import ShoppingCart from "@/components/ProcessOfOrder/ShoppingCart";
import HeroProcess from "@/components/ProcessOfOrder/HeroProcess";

function ProceedOfOrderPage() {
  return (
    <div>
      <MainHeader />
      <HeroProcess />
      <ShoppingCart />
      <Footer />
    </div>
  );
}

export default ProceedOfOrderPage;
