import React from "react";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import HeroSectionHome from "../components/Home/HeroSectonHome";
import FirstSectionHome from "@/components/Home/FirstSectionHome";
function HomePage() {
  return (
    <div>
      <div>
        <MainHeader />
        <HeroSectionHome />
        <FirstSectionHome />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
