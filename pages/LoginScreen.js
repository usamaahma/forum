import HeroLogin from "@/components/Login/HeroLogin";
import Login from "@/components/Login/Login";
import Footer from "@/components/common/footer";
import MainHeader from "@/components/common/mainHeader";
import React from "react";

function LoginScreen() {
  return (
    <div>
      <MainHeader />
      <HeroLogin />
      <Login />
      <Footer />
    </div>
  );
}

export default LoginScreen;
