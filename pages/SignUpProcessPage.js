import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
import Styles from "../styles/SignUpProcessPage.module.css";
import MainHeader from "@/components/common/mainHeader";
import HeroSignUp from "@/components/SignUp/HeroSignUp";
import Footer from "@/components/common/footer";
import SignUp from "@/components/SignUp/SignUp";
import BasicInfo from "@/components/BasicInfo/BasicInfo";
import BusinessInfo from "@/components/BusinessInfo/BusinessInfo";
import SocialNetwork from "@/components/SocialNetwork/SocialNetwork";
import UploadImage from "@/components/UploadImage/UploadImage";

function SignUpProcessPage() {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "Sign Up",
      content: <SignUp next={next} prev={prev} />,
    },
    {
      title: "Basic Info",
      content: <BasicInfo next={next} />,
    },
    {
      title: "Business Info",
      content: <BusinessInfo next={next} />,
    },
    {
      title: "Social Network",
      content: <SocialNetwork next={next} />,
    },
    {
      title: "Upload Image",
      content: <UploadImage next={next} />,
    },
  ];
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <div>
      <MainHeader />
      <HeroSignUp />
      <div className={Styles.mainhero}>
        <Steps className={Styles.sizesteps} current={current} items={items} />
      </div>
      <div>{steps[current].content}</div>
      <Footer />
    </div>
  );
}

export default SignUpProcessPage;
