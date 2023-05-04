import React from "react";
import { Row, Col, Input, DatePicker } from "antd";
import Styles from "../../styles/eventform.module.css";
import { DownOutlined, UserOutlined, InboxOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space, message, Upload } from "antd";

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const items = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

function Eventform() {
  return (
    <div>
      <Row justify="center" className={Styles.colgap}>
        <Col>
          <div className={Styles.divssss}>
            Event Name
            <Input className={Styles.inputgap} placeholder="Event Name" />
          </div>
        </Col>
        <Col>
          <div className={Styles.divssss}>
            Start Date
            <DatePicker
              className={Styles.inputgap}
              onChange={onChange}
              placeholder="Start Date"
            />
          </div>
        </Col>
      </Row>
      <Row justify="center" className={Styles.colgap}>
        <Col>
          <div className={Styles.divssss}>
            End Date
            <DatePicker
              className={Styles.inputgap}
              onChange={onChange}
              placeholder="End Date"
            />
          </div>
        </Col>
        <Col>
          <div className={Styles.divsssss}>
            <div style={{ display: "grid" }}>
              Start Time
              <Input className={Styles.inputgapss} placeholder="Start Time" />
            </div>
            <div style={{ display: "grid" }}>
              End Time
              <Input className={Styles.inputgapss} placeholder="End Time" />
            </div>
          </div>
        </Col>
      </Row>
      <Row justify="center" className={Styles.colgap}>
        <Col>
          <div className={Styles.divssss}>
            Location
            <Input className={Styles.inputgap} placeholder="Location" />
          </div>
        </Col>
        <Col>
          <div className={Styles.divssss}>
            Contact Number
            <Input className={Styles.inputgap} placeholder="Contact Number" />
          </div>
        </Col>
      </Row>
      <div>
        <div className={Styles.ticketss}>
          <p className={Styles.ticket}>Ticket Setting</p>
        </div>
        <Row justify="center" className={Styles.colgap}>
          <Col>
            <div className={Styles.divssss}>
              Sell Ticket
              <Dropdown menu={menuProps} className={Styles.inputgap}>
                <Button>
                  <Space>
                    <div className={Styles.Dropdowns}>
                      <p>Yes</p> <DownOutlined />
                    </div>
                  </Space>
                </Button>
              </Dropdown>{" "}
            </div>
          </Col>
          <Col>
            <div className={Styles.divssss}>
              Ticket Price
              <Input className={Styles.inputgap} placeholder=" Ticket Price" />
            </div>
          </Col>
        </Row>
        <Row justify={"center"} className={Styles.ticketspot}>
          {" "}
          <p>Ticket Spot</p>
          <Button>
            <img src="../images/Labelled.png" alt="abc" />
          </Button>
        </Row>
        <Row justify="center">
          <Col>
            <div className={Styles.divssss}>
              <Input className={Styles.inputgapp} />
            </div>
          </Col>
        </Row>
        <Row justify="center" className={Styles.colgap}>
          <Col>
            <div className={Styles.divssss}>
              Name
              <Input className={Styles.inputgap} placeholder=" Name" />
            </div>
          </Col>
          <Col>
            <div className={Styles.divssss}>
              Address
              <Input className={Styles.inputgap} placeholder=" Address" />
            </div>
          </Col>
        </Row>{" "}
        <Row justify="center" className={Styles.colgap}>
          <Col className={Styles.colgapppssss}>
            <div className={Styles.divssss}>
              Contact Number
              <Input
                className={Styles.inputgap}
                placeholder=" Contact Number"
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className={Styles.draggercenter}>
        <Dragger {...props} className={Styles.dragger}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Select a file or drag and drop here</p>
          <p className="ant-upload-hint">
            JPG, PNG or PDF, file size no more than 3 MB
            <br />
            270 x 158 recommended
          </p>
          <Button className={Styles.buttondrag}>
            <img src="../images/Small outline btn.png" alt="abc"></img>
          </Button>
        </Dragger>
      </div>
      <Row justify="center" className={Styles.colgap}>
        <Col className={Styles.colgapppssss}>
          <Button className={Styles.buttonsantd}>Submit</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Eventform;
