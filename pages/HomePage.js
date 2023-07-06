import React from "react";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import HeroSectionHome from "../components/Home/HeroSectonHome";
import FirstSectionHome from "@/components/Home/FirstSectionHome";
import SecondHome from "@/components/Home/SecondHome";
import OpenDeshiShop from "@/components/Home/OpenDeshiShop";
function HomePage() {
  return (
    <div>
      <div>
        <MainHeader />
        <HeroSectionHome />
        <FirstSectionHome />
        <OpenDeshiShop />
        <SecondHome />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
