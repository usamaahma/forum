import { Steps, theme } from "antd";
import { useState } from "react";
import Styles from "../styles/BusinessSignUp.module.css";
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
          <p className={Styles.textsign}>Sign Up</p>
        </>
      ),
      content: <SignUp next={next} prev={prev} />,
    },
    {
      title: (
        <>
          <p className={Styles.textsign}>Basic Info</p>
        </>
      ),
      content: <BasicInfo next={next} />,
    },
    {
      title: (
        <>
          <p className={Styles.textsign}>Business Info</p>
        </>
      ),
      content: <BusinessInfo next={next} />,
    },
    {
      title: (
        <>
          <p className={Styles.textsign}>
            Taxpayer <br />
            Information
          </p>
        </>
      ),
      content: <TaxPayerInfo next={next} />,
    },
    {
      title: (
        <>
          <p className={Styles.textsign}>
            Payment And
            <br /> Banking
          </p>
        </>
      ),
      content: <PaymentInfo next={next} />,
    },
    {
      title: (
        <>
          <p className={Styles.textsign}>
            Verify
            <br /> Identity
          </p>
        </>
      ),
      content: <VerifyIdentity next={next} />,
    },

    {
      title: (
        <>
          <p className={Styles.textsign}>
            Social
            <br /> Network
          </p>
        </>
      ),
      content: <SocialNetwork next={next} />,
    },
    {
      title: (
        <>
          <p className={Styles.textsign}>
            Upload
            <br /> Image
          </p>
        </>
      ),
      content: <UploadBusinessImage next={next} />,
    },
    {
      title: (
        <>
          <p className={Styles.textsign}>
            Terms &
            <br /> Conditions
          </p>
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
