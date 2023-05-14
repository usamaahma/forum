import React from "react";
import Styles from "../styles/ProductDetailsPage.module.css";
import MainHeader from "@/components/common/mainHeader";
import HeroProduct from "@/components/ProductDetails/HeroProducts";
import Footer from "@/components/common/footer";
import MainProduct from "@/components/ProductDetails/MainProduct";
function ProductDetailsPage() {
  return (
    <div>
      <MainHeader />
      <HeroProduct />
      <div>
        <MainProduct />
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetailsPage;
