import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import Styles from "../../styles/HeroSection.module.css";
import DeshiShopCheckout from "@/pages/DeshiShopCheckout";

function Stepss() {
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
      title: "Shopping Cart ",
      content: <ShoppingCart next={next} prev={prev} />,
    },
    {
      title: "Checkout",
      content: <DeshiShopCheckout next={next} />,
    },
    {
      title: "Order Complete",
      content: "Last-content",
    },
  ];
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <>
      <div className={Styles.mainhero}>
        <Steps className={Styles.sizesteps} current={current} items={items} />
      </div>
      <div>{steps[current].content}</div>
      {/* <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div> */}
    </>
  );
}
export default Stepss;
