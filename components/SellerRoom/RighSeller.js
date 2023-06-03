import React, { useState } from "react";
import { Button, Tabs, Modal } from "antd";
import Styles from "../../styles/RightListing.module.css";
import Sellerdashboard from "./Sellerdashboard";
import ProductsTable from "./ProductTable";
import Setting from "./Setting";
import Addnewproduct from "./Addnewproduct";
import Withdraw from "./Withdraw";
import OrderTable from "./OrderTable";

function callback(key) {
  console.log(key);
}

const { TabPane } = Tabs;

function RightSeller() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={Styles.flexbet}>
      {" "}
      <div className={Styles.tabbutton}>
        <Tabs
          onChange={callback}
          type="card"
          size="small"
          className={Styles.sizetab}
        >
          <TabPane tab="Dashboard" key="1" className={Styles.blscktext}>
            <Sellerdashboard />
          </TabPane>
          <TabPane tab="Products" key="2" className={Styles.blscktext}>
            <ProductsTable />
          </TabPane>
          <TabPane tab="Orders" key="3" className={Styles.blscktext}>
            <OrderTable />
          </TabPane>
          <TabPane tab="Withdraw" key="4" className={Styles.blscktext}>
            <Withdraw />
          </TabPane>
          <TabPane tab="Settings" key="5" className={Styles.blscktext}>
            <Setting />
          </TabPane>
        </Tabs>
      </div>
      <Button className={Styles.addprotxt} onClick={showModal}>
        + Add New Product
      </Button>
      <Modal
        className={Styles.widthmodal}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Addnewproduct />
      </Modal>
    </div>
  );
}

export default RightSeller;
