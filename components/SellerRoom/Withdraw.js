import React from "react";
import { Card, Dropdown, Button, Input } from "antd";
import Styles1 from "../../styles/DeshiServiceForm.module.css";
import { DownOutlined } from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

const data = [
  {
    currentbalance: "$62.70",
    minimumwithdraw: "$50.00",
    withdrawthreshold: "0 Days",
  },
];

function Withdraw() {
  return (
    <div>
      <Card type="inner" className={Styles1.cardabs}>
        {data.map((data, index) => (
          <div key={index} className={Styles1.curmin}>
            <p>Current Balance: {data.currentbalance}</p>
            <p>Minimum Withdraw Amount: {data.minimumwithdraw}</p>
            <p>Withdraw Threshhold: {data.withdrawthreshold}</p>
          </div>
        ))}
      </Card>
      <Card type="inner" style={{ marginTop: "1.5rem" }}>
        <div className={Styles1.withapp}>
          <p>Withdraw Request</p>
          <p>Approved Request</p>
          <p>Cancelled Request</p>
        </div>
        <div className={Styles1.displdeshiservice}>
          <div className={Styles1.gapscnd}>
            <div className={Styles1.gapfourth}>
              <p className={Styles1.txtgap}>Withdraw Amount</p>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
                arrow
              >
                <Button className={Styles1.dropwidhei}>
                  $
                  <DownOutlined />
                </Button>
              </Dropdown>
            </div>
            <Input className={Styles1.wdthinpu} placeholder="0.0" />
          </div>
          <div className={Styles1.gapscnd}>
            <p className={Styles1.txtgap}>Payment Method</p>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
              arrow
            >
              <Button className={Styles1.wdthinpu}>
                Paypal <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        </div>
        <Button className={Styles1.submbutto}>Submit Request</Button>
      </Card>
    </div>
  );
}

export default Withdraw;
