import React from "react";
import Styles from "../../styles/Store.module.css";
import Pic from "../../public/images/pic.png";
import Image from "next/image";
import { Col, Row, Select, Input, Button, message, Upload, Form } from "antd";
import { CloudDownloadOutlined, CameraOutlined } from "@ant-design/icons";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const { Dragger } = Upload;
const props1 = {
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
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const data = [
  {
    name: "Sunday",
    select: (
      <Select
        defaultValue="Open"
        onChange={handleChange}
        options={[
          {
            value: "Open",
            label: "Open",
          },
          {
            value: "Close",
            label: "Close",
          },
        ]}
      />
    ),
  },
  {
    name: "Monday",
    select: (
      <Select
        defaultValue="Open"
        onChange={handleChange}
        options={[
          {
            value: "Open",
            label: "Open",
          },
          {
            value: "Close",
            label: "Close",
          },
        ]}
      />
    ),
  },
  {
    name: "Tuesday",
    select: (
      <Select
        defaultValue="Open"
        onChange={handleChange}
        options={[
          {
            value: "Open",
            label: "Open",
          },
          {
            value: "Close",
            label: "Close",
          },
        ]}
      />
    ),
  },
  {
    name: "Wednesday",
    select: (
      <Select
        defaultValue="Open"
        onChange={handleChange}
        options={[
          {
            value: "Open",
            label: "Open",
          },
          {
            value: "Close",
            label: "Close",
          },
        ]}
      />
    ),
  },
  {
    name: "Thursday",
    select: (
      <Select
        defaultValue="Open"
        onChange={handleChange}
        options={[
          {
            value: "Open",
            label: "Open",
          },
          {
            value: "Close",
            label: "Close",
          },
        ]}
      />
    ),
  },
  {
    name: "Friday",
    select: (
      <Select
        defaultValue="Open"
        onChange={handleChange}
        options={[
          {
            value: "Open",
            label: "Open",
          },
          {
            value: "Close",
            label: "Close",
          },
        ]}
      />
    ),
  },
  {
    name: "Saturday",
    select: (
      <Select
        defaultValue="Open"
        onChange={handleChange}
        options={[
          {
            value: "Open",
            label: "Open",
          },
          {
            value: "Close",
            label: "Close",
          },
        ]}
      />
    ),
  },
];
function Store() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div>
      <div className={Styles.mainbox}>
        <div className={Styles.paddingdiv}>
          <div className={Styles.updiv}>
            <div className={Styles.centerup}>
              <Image src={Pic} alt="" className={Styles.imsize} />
              <Upload {...props}>
                <Button className={Styles.btn}>Upload Photo</Button>
              </Upload>
            </div>
            <div className={Styles.divcneter}>
              <Dragger {...props1}>
                <div className={Styles.drag}>
                  <p className={Styles.grenclr}>
                    <CloudDownloadOutlined />
                  </p>
                  <p className={Styles.textupp}>
                    Upload Cover Photo <br />
                    or Drag & Drop
                  </p>
                  <p className={Styles.jptext}>
                    JPG, PDF, file size no more than 3 MB 270 x 158 recommended
                  </p>
                </div>
              </Dragger>
            </div>
          </div>
        </div>
        <div>
          <Row justify="center">
            <Col lg={12} md={12}>
              <div className={Styles.centerdiv}>
                <Form
                  name="basic"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <p className={Styles.namtext}>Store Name</p>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input your Store Name!",
                      },
                    ]}
                  >
                    <Input className={Styles.input} placeholder="Store Name" />
                  </Form.Item>
                </Form>
              </div>
            </Col>
            <Col lg={12} md={12}>
              <div className={Styles.centerdiv}>
                <Form
                  name="basic"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <p className={Styles.namtext}>Store Products Per Page</p>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input your Store Products Per Page!",
                      },
                    ]}
                  >
                    <Input className={Styles.input} placeholder="10" />
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
        <p className={Styles.addtext}>Address</p>
        <Row justify="center">
          <Col lg={12} md={12}>
            <div className={Styles.centerdiv}>
              <div>
                <br />
                <Form
                  name="basic"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <p className={Styles.namtext}>Street</p>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input your Street!",
                      },
                    ]}
                  >
                    <Input className={Styles.input} placeholder="Street" />
                  </Form.Item>
                  <p className={Styles.namtext}>City </p>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input your City!",
                      },
                    ]}
                  >
                    <Input className={Styles.input} placeholder="City" />
                  </Form.Item>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input your Country!",
                      },
                    ]}
                  >
                    <p className={Styles.namtext}>Country</p>
                    <Input className={Styles.input} placeholder="Country" />
                  </Form.Item>
                </Form>
                <div>
                  {data.map((item, index) => (
                    <div key={index} className={Styles.weekdiv}>
                      <p>{item.name}</p>
                      <div>{item.select}</div>
                    </div>
                  ))}
                </div>
                <button className={Styles.upbtn}>Update</button>
              </div>
            </div>
          </Col>
          <Col lg={12} md={12}>
            <div className={Styles.centerdiv}>
              <div>
                <br />
                <Form
                  name="basic"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <p className={Styles.namtext}>Street 2</p>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input your Street 2!",
                      },
                    ]}
                  >
                    <Input className={Styles.input} placeholder="Street 2" />
                  </Form.Item>
                  <p className={Styles.namtext}>Post/ZIP Code</p>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input your Post/ZIP Code!",
                      },
                    ]}
                  >
                    <Input className={Styles.input} placeholder="1020" />
                  </Form.Item>
                  <p className={Styles.namtext}>Phone No</p>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input your Phone No!",
                      },
                    ]}
                  >
                    <Input className={Styles.input} placeholder="Phone No" />
                  </Form.Item>
                </Form>
                <div>
                  <p>Map</p>
                  <div className={Styles.map}>
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: "" }}
                      defaultCenter={defaultProps.center}
                      defaultZoom={defaultProps.zoom}
                    >
                      <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                      />
                    </GoogleMapReact>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Store;
