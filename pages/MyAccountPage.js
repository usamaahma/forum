import HeroMyAccount from "@/components/MyAccount/HeroMyAccount";
import MainAccount from "@/components/MyAccount/MainAccount";
import Footer from "@/components/common/footer";
import MainHeader from "@/components/common/mainHeader";
import React from "react";

function MyAccountPage() {
  return (
    <div>
      <div>
        <MainHeader />
        <HeroMyAccount />
        <MainAccount />
        <Footer />
      </div>
    </div>
  );
}

export default MyAccountPage;
