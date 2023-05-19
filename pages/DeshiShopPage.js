import { Row, Col } from "antd";
import React from "react";
import Styles from "../styles/DeshiShopPage.module.css";
import LeftSectionOfDeshi from "@/components/DeshiShop/LeftSectionOfDeshi";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import RightSectionOfDeshi from "@/components/DeshiShop/RightSectionOfDeshi";
import PopularProducts from "@/components/DeshiShop/PopularProducts";
import ShopByCategory from "@/components/DeshiShop/ShopByCategory";
import PopularProductsTwo from "@/components/DeshiShop/PopularProductsTwo";
import RecentProducts from "@/components/DeshiShop/RecentProducts";
import StoreName from "@/components/DeshiShop/StoreName";
// import ConsumerFood from "@/components/DeshiShop/ConsumerFood";
// import MenWomenClothing from "@/components/DeshiShop/MWClothing";
import FashionBeauty from "@/components/DeshiShop/FashionBeauty";
import TabOfFood from "@/components/DeshiShop/TabOfFood";
// import HomeLiving from "@/components/DeshiShop/HomeLiving";
import TabOfHome from "@/components/DeshiShop/TabOfHome";
import MenWomenTab from "@/components/DeshiShop/MenWomenTab";
import TabOfFashion from "@/components/DeshiShop/TabsOfFashion";

function DeshiShopPage() {
  return (
    <div>
      <MainHeader />
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.centerCol}>
              <LeftSectionOfDeshi />
            </div>
          </Col>
          <Col>
            <div className={Styles.centerCol12}>
              <RightSectionOfDeshi />
            </div>
          </Col>
        </Row>
      </div>
      <ShopByCategory />
      <PopularProducts />
      <PopularProductsTwo />
      <RecentProducts />
      <StoreName />
      {/* <ConsumerFood /> */}
      <br />
      <br />
      <TabOfFood />
      <br />
      <br />
      {/* <MenWomenClothing /> */}
      <MenWomenTab />
      <br />
      <br />
      <TabOfFashion />
      {/* <FashionBeauty /> */}
      {/* <HomeLiving /> */}
      <br />
      <br />
      <TabOfHome />
      <Footer />
    </div>
  );
}

export default DeshiShopPage;
