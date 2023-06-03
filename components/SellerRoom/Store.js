import React from "react";
import Styles from "../../styles/Store.module.css";
import Edit from "../../public/images/Edit.png";
import Pic from "../../public/images/pic.png";
import Image from "next/image";
import { Col, Row, Select, Form, Input, Button, message, Upload } from "antd";
import { CloudDownloadOutlined, CameraOutlined } from "@ant-design/icons";

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
function Store() {
  return (
    <div>
      <div className={Styles.mainbox}>
        <div className={Styles.paddingdiv}>
          <div className={Styles.updiv}>
            <div className={Styles.centerup}>
              <Image src={Pic} alt="" />
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
        <Row>
          <Col>
            <div></div>
          </Col>
          <Col>
            <div></div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Store;
