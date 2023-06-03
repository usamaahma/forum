import React, { useState } from "react";
import Styles from "../../styles/Setting.module.css";
import Styles1 from "../../styles/DeshiServiceForm.module.css";
import {
  DatePicker,
  ColorPicker,
  Input,
  Dropdown,
  Button,
  Tag,
  Row,
  Col,
  Upload,
  Modal,
} from "antd";
import { DownOutlined, CloudDownloadOutlined } from "@ant-design/icons";
import RichTextEditor from "@/components/texteditor";
const { TextArea } = Input;

const data = [
  {
    key: "1",
    size: "1500 sf",
    bedroom: "3 Bed",
    bathroom: " 1 Bath",
    furniture: "Non furnished",
  },
];

const log = (e) => {
  console.log(e);
};
const preventDefault = (e) => {
  e.preventDefault();
  console.log("Clicked! But prevent default.");
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
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

function Addnewproduct() {
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
    <div>
      <div>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Row justify={"center"}>
            <Col>
              {" "}
              <div className={Styles1.pmodal}>
                Feature Heading{" "}
                <img
                  className={Styles1.imgt}
                  style={{ marginLeft: ".5rem" }}
                  alt="abc"
                  src="../images/question.png"
                />
              </div>{" "}
              <div className={Styles1.modaldicwdth}>
                <p className={Styles1.pmodal}>Size:</p>
              </div>
              <div className={Styles1.modaldicwdth}>
                <p className={Styles1.pmodal}>Bedroom:</p>
              </div>
              <div className={Styles1.modaldicwdth}>
                <p className={Styles1.pmodal}>Bathroom:</p>
              </div>
              <div className={Styles1.modaldicwdth}>
                <p className={Styles1.pmodal}>Furniture:</p>
              </div>
            </Col>
            <Col style={{ marginLeft: "1rem" }}>
              <div className={Styles1.pmodal}>
                Feature{" "}
                <img
                  className={Styles1.imgt}
                  style={{ marginLeft: ".5rem" }}
                  alt="abc"
                  src="../images/question.png"
                />{" "}
              </div>{" "}
              <div className={Styles1.plustxt}>
                {" "}
                <Input className={Styles1.modaldicwdth} placeholder="1500 sf" />
                <div className={Styles1.plustxttt}>
                  <img alt="abc" src="../images/Delete.png" />
                  <img alt="abc" src="../images/circle-plus-24.png" />
                </div>
              </div>
              <div className={Styles1.plustxt}>
                <Input className={Styles1.modaldicwdth} placeholder="3 Bed" />
                <div className={Styles1.plustxttt}>
                  <img alt="abc" src="../images/Delete.png" />
                  <img alt="abc" src="../images/circle-plus-24.png" />
                </div>
              </div>
              <div className={Styles1.plustxt}>
                <Input className={Styles1.modaldicwdth} placeholder="1 Bath" />
                <div className={Styles1.plustxttt}>
                  <img alt="abc" src="../images/Delete.png" />
                  <img alt="abc" src="../images/circle-plus-24.png" />
                </div>
              </div>
              <div className={Styles1.plustxt}>
                <Input
                  className={Styles1.modaldicwdth}
                  placeholder="Not Furnished"
                />
                <div className={Styles1.plustxttt}>
                  <img alt="abc" src="../images/Delete.png" />
                  <img alt="abc" src="../images/circle-plus-24.png" />
                </div>
              </div>
            </Col>
          </Row>
        </Modal>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
        >
          {" "}
          <Dragger
            {...props1}
            style={{
              marginTop: "2rem",
              width: "25rem",
            }}
          >
            <div className={Styles.drag}>
              <p className={Styles.grenclr}>
                <CloudDownloadOutlined />
              </p>
              <p className={Styles.textupp}>Select a file or Drag & Drop</p>
              <p className={Styles.jptext}>
                JPG, PDF, file size no more than 3 MB
                <br /> 270 x 158 recommended
              </p>
            </div>
          </Dragger>
        </div>
        <div>
          <div className={Styles1.displdeshiservice}>
            <div>
              <p className={Styles1.txtgap}>Title</p>
              <Input className={Styles1.wdthinpu} placeholder="Title" />
            </div>
            <div className={Styles1.gapscnd}>
              <p className={Styles1.txtgap}>Category</p>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
                arrow
              >
                <Button className={Styles1.wdthinpu}>
                  Category Name <DownOutlined />
                </Button>
              </Dropdown>
            </div>
          </div>
          <div className={Styles1.displdeshiservice}>
            <div>
              <p className={Styles1.txtgap}> SubCategory</p>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
                arrow
              >
                <Button className={Styles1.wdthinpu}>
                  Category
                  <DownOutlined />
                </Button>
              </Dropdown>
            </div>
            <div className={Styles1.gapscnd}>
              <p className={Styles1.txtgap}>Tags</p>
              <div className={Styles1.wdthinput}>
                <Tag closable onClose={log} style={{ marginLeft: ".5rem" }}>
                  Tag 1
                </Tag>{" "}
                <Tag closable onClose={log}>
                  Headphone
                </Tag>{" "}
                <Tag closable onClose={log}>
                  Business
                </Tag>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className={Styles1.displdeshiservice}>
          <div className={Styles1.gapscnd}>
            <div className={Styles1.gapfourth}>
              <p className={Styles1.txtgap}>Price</p>
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
            <Input className={Styles1.wdthinpu} placeholder="Price" />
          </div>
          <div className={Styles1.gapscnd}>
            <div className={Styles1.gapfourth}>
              <p className={Styles1.txtgap}>Discontinues Price Schedule</p>
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
        </div>
        <div>
          <div className={Styles1.displdeshiservice}>
            <div>
              <p className={Styles1.txtgap}>SKU (Stock Keeping Unit)</p>
              <Input
                className={Styles1.wdthinpu}
                placeholder="Stock Keeping Unit"
              />
            </div>
            <div className={Styles1.gapscnd}>
              <p className={Styles1.txtgap}>Stock Status</p>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
                arrow
              >
                <Button className={Styles1.wdthinpu}>
                  In Stock <DownOutlined />
                </Button>
              </Dropdown>
            </div>
          </div>
        </div>

        <div>
          <div className={Styles1.displdeshiservice}>
            <div className={Styles1.gapscnd}>
              <p className={Styles1.txtgap}>Product Status</p>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
                arrow
              >
                <Button className={Styles1.wdthinpu}>
                  Online <DownOutlined />
                </Button>
              </Dropdown>
            </div>
            <div className={Styles1.gapscnd}>
              <p className={Styles1.txtgap}>Visibility</p>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
                arrow
              >
                <Button className={Styles1.wdthinpu}>
                  Visible <DownOutlined />
                </Button>
              </Dropdown>
            </div>
          </div>
        </div>

        <div>
          <div className={Styles1.displdeshiservice}>
            <div className={Styles1.gapscnd}>
              <p className={Styles1.txtgap}>Delivery Type</p>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
                arrow
              >
                <Button className={Styles1.wdthinpu}>
                  Fed EX <DownOutlined />
                </Button>
              </Dropdown>
            </div>
            <div className={Styles1.gapscnd}>
              <p className={Styles1.txtgap}>Estimated Delivery Time</p>
              <DatePicker onChange={onChange} className={Styles1.wdthinpu} />
            </div>
          </div>
        </div>
        <div>
          <div className={Styles1.displdeshiservice}>
            <div className={Styles1.gapscnd}>
              <p
                className={Styles1.txtgap}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                Color{" "}
                <ColorPicker
                  presets={[
                    {
                      label: "Recommended",
                      colors: [
                        "#000000",
                        "#000000E0",
                        "#000000A6",
                        "#00000073",
                        "#00000040",
                        "#00000026",
                        "#0000001A",
                        "#00000012",
                        "#0000000A",
                        "#00000005",
                        "#F5222D",
                        "#FA8C16",
                        "#FADB14",
                        "#8BBB11",
                        "#52C41A",
                        "#13A8A8",
                        "#1677FF",
                        "#2F54EB",
                        "#722ED1",
                        "#EB2F96",
                        "#F5222D4D",
                        "#FA8C164D",
                        "#FADB144D",
                        "#8BBB114D",
                        "#52C41A4D",
                        "#13A8A84D",
                        "#1677FF4D",
                        "#2F54EB4D",
                        "#722ED14D",
                        "#EB2F964D",
                      ],
                    },
                    {
                      label: "Recent",
                      colors: [],
                    },
                  ]}
                />
              </p>
              <TextArea rows={6} className={Styles1.wdthinpu} />
            </div>
            <div className={Styles1.gapscnd}>
              <div className={Styles1.plustxt}>
                {" "}
                <p className={Styles1.txtgap}>Size</p>
                <Button className={Styles1.plusbutton}>
                  {" "}
                  <img alt="abc" src="../images/Plus1.png" />{" "}
                  <p className={Styles1.txtaddfeature}>Add Size</p>
                </Button>
              </div>{" "}
              <TextArea rows={6} className={Styles1.wdthinpu} />
            </div>
          </div>
        </div>
        <div className={Styles1.displdeshiservic}>
          <div className={Styles1.plustxt}>
            {" "}
            <p className={Styles1.txtgap}>Permalink</p>
            <Button className={Styles1.plusbutton}>
              {" "}
              <img alt="abc" src="../images/Edit.png" />{" "}
            </Button>
          </div>{" "}
          <TextArea
            className={Styles1.wdthinp}
            autoSize={{
              minRows: 1,
              maxRows: 8,
            }}
          />
        </div>
        <div className={Styles1.displdeshiservic}>
          <div className={Styles1.plustxt}>
            {" "}
            <p className={Styles1.txtgap}>Feature</p>
            <Button className={Styles1.plusbutton} onClick={showModal}>
              {" "}
              <img alt="abc" src="../images/Plus1.png" />{" "}
              <p className={Styles1.txtaddfeature}>Add Feature</p>
            </Button>
          </div>
          <div className={Styles1.divnew}>
            <div className={Styles1.divnew5}>
              {data.map((data, index) => (
                <div key={index}>
                  Size: &nbsp;&nbsp;&nbsp;{data.size}
                  <br />
                  Bedroom: &nbsp;&nbsp;&nbsp;{data.bedroom}
                  <br />
                  Bathroom: &nbsp;&nbsp;&nbsp;{data.bathroom}
                  <br />
                  Furniture: &nbsp;&nbsp;&nbsp;{data.furniture}
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={Styles1.displdeshiservic}>
          <p className={Styles1.txtgap}>Service Description</p>
          <RichTextEditor />
        </div>
        <div className={Styles1.displdeshiservic}>
          <p className={Styles1.txtgap}>Purchase Note</p>
          <TextArea
            className={Styles1.wdthinp}
            autoSize={{
              minRows: 2,
              maxRows: 8,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Addnewproduct;
