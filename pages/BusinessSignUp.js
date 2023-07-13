import { Steps, theme } from "antd";
import { useState } from "react";
import Styles from "../styles/SignUpProcessPage.module.css";
import MainHeader from "@/components/common/mainHeader";
import HeroSignUp from "@/components/SignUp/HeroSignUp";
import Footer from "@/components/common/footer";
import SignUp from "@/components/SignUp/SignUp";
import BasicInfo from "@/components/BasicInfo/BasicInfo";
import BusinessInfo from "@/components/BusinessInfo/BusinessInfo";
import SocialNetwork from "@/components/SocialNetwork/SocialNetwork";
import PaymentInfo from "@/components/PaymentInfo/PaymentInfo";
import TaxPayerInfo from "@/components/TaxPayerInfo/TaxPayerInfo";
import VerifyIdentity from "@/components/VerifyIdentity/VerifyIdentity";
import TermsConditions from "@/components/TermsConditions/TermsConditions";
import UploadBusinessImage from "@/components/Uploadbusinessimage/UploadBusinessImage";

function BusinessSignUp() {
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
      title: (
        <>
          <h5>Sign Up</h5>
        </>
      ),
      content: <SignUp next={next} prev={prev} />,
    },
    {
      title: (
        <>
          <h5>Basic Info</h5>
        </>
      ),
      content: <BasicInfo next={next} />,
    },
    {
      title: (
        <>
          <h5>Business Info</h5>
        </>
      ),
      content: <BusinessInfo next={next} />,
    },
    {
      title: (
        <>
          <h5>
            Taxpayer <br />
            Information
          </h5>
        </>
      ),
      content: <TaxPayerInfo next={next} />,
    },
    {
      title: (
        <>
          <h5>
            Payment And
            <br /> Banking
          </h5>
        </>
      ),
      content: <PaymentInfo next={next} />,
    },
    {
      title: (
        <>
          <h5>
            Verify
            <br /> Identity
          </h5>
        </>
      ),
      content: <VerifyIdentity next={next} />,
    },

    {
      title: (
        <>
          <h5>
            Social
            <br /> Network
          </h5>
        </>
      ),
      content: <SocialNetwork next={next} />,
    },
    {
      title: (
        <>
          <h5>
            Upload
            <br /> Image
          </h5>
        </>
      ),
      content: <UploadBusinessImage next={next} />,
    },
    {
      title: (
        <>
          <h5>
            Terms &
            <br /> Conditions
          </h5>
        </>
      ),
      content: <TermsConditions next={next} />,
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
        <Steps
          style={{ marginTop: "5rem" }}
          className={`${Styles.sizesteps} ${Styles.customSteps}`}
          current={current}
          items={items}
        />
      </div>
      <div>{steps[current].content}</div>
      <Footer />
    </div>
  );
}

export default BusinessSignUp;
