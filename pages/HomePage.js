import React from "react";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import HeroSectionHome from "../components/Home/HeroSectonHome";
function HomePage() {
  return (
    <div>
      <div>
        <MainHeader />
        <HeroSectionHome />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
