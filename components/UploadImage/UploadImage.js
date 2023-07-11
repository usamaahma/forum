import React from "react";
import Styles from "../../styles/UploadImage.module.css";
import Pic from "../../public/images/pic.png";
import Image from "next/image";
import { Button, message, Upload, Switch } from "antd";
import { CloudDownloadOutlined, CameraOutlined } from "@ant-design/icons";
const onChange1 = (checked) => {
  console.log(`switch to ${checked}`);
};
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
function UploadImage({ next }) {
  return (
    <div className={Styles.centerwholediv}>
      <div className={Styles.whitediv}>
        <h2 className={Styles.textlet}>
          Let’s Complete Your Profile And Connect With Deshi
          <br /> Community Network
        </h2>
        <hr style={{ border: "solid 1px  #D0D0D0", marginBottom: "2rem" }} />
        <div className={Styles.paddingdiv}>
          <div className={Styles.updiv}>
            <div className={Styles.centerup}>
              <Image src={Pic} alt="" className={Styles.imsize} />
              <Upload {...props}>
                <Button className={Styles.btn}>
                  {" "}
                  <CloudDownloadOutlined style={{ color: "#42B00F" }} />
                  Upload Photo
                </Button>
              </Upload>
              <Upload {...props}>
                <Button className={Styles.btn}>
                  {" "}
                  <CameraOutlined style={{ color: "#42B00F" }} />
                  Take Photo
                </Button>
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

        <div className={Styles.divswi}>
          <Switch defaultChecked onChange={onChange1} />
          <p className={Styles.lefttext}>Show my profile on forum</p>
        </div>
        <div className={Styles.flexbet}>
          <button
            className={Styles.btngreen}
            onClick={() => message.success("complete Sign up Process!")}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadImage;
