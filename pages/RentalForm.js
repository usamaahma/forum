import React, { useState } from "react";
import Styles from "../styles/HeroSection.module.css";
import Styles1 from "../styles/DeshiServiceForm.module.css";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import {
  Col,
  Row,
  Input,
  Dropdown,
  Button,
  Tag,
  Radio,
  Upload,
  Modal,
} from "antd";
import { DownOutlined, InboxOutlined } from "@ant-design/icons";
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

const log = (e) => {
  console.log(e);
};
const preventDefault = (e) => {
  e.preventDefault();
  console.log("Clicked! But prevent default.");
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

function RentalForm() {
  const [loadings, setLoadings] = useState([]);
  const [value, setValue] = useState(1);
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

  const enterLoading = (index) => {
    setLoadings((state) => {
      const newLoadings = [...state];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((state) => {
        const newLoadings = [...state];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <MainHeader />
      <div className={Styles.mainhero}>
        <div>
          <h1 className={Styles.centerhero}>Add Rental</h1>
          <p className={Styles.colrgreen}>Home / Add Rental</p>
        </div>
      </div>{" "}
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
        <Row justify={"center"}>
          <Col>
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
            <div className={Styles1.displdeshiservice}>
              <div>
                {" "}
                <Radio.Group
                  onChange={onChange}
                  value={value}
                  className={Styles1.radiose}
                >
                  <Radio value={1}>Pricing</Radio>
                  <Radio value={2}>Price Range</Radio>
                  <Radio value={3}>Deasabled</Radio>
                </Radio.Group>
              </div>
              <div>
                <p className={Styles1.txtgap}> Price Type</p>
                <Dropdown
                className={Styles1.dri}
                  menu={{
                    items,
                  }}
                  placement="bottom"
                  arrow
                >
                  <Button className={Styles1.wdthinpu}>
                    Fixed
                    <DownOutlined />
                  </Button>
                </Dropdown>
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
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottom"
                  arrow
                >
                  <Button className={Styles1.wdthinpu}>
                    55
                    <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
              <div>
                <p className={Styles1.txtgap}> Time</p>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottom"
                  arrow
                >
                  <Button className={Styles1.wdthinpu}>
                    Monthly
                    <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
            </div>
            <div className={Styles1.displdeshiservic}>
              <p className={Styles1.txtgap}>Meta Description</p>
              <TextArea
                className={Styles1.wdthinp}
                autoSize={{
                  minRows: 2,
                  maxRows: 8,
                }}
              />
            </div>
            <div className={Styles1.displdeshiservic}>
              <p className={Styles1.txtgap}>Service Description</p>
              <RichTextEditor />
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
            <div
              className={Styles1.draggercenter}
              style={{ marginTop: "1rem" }}
            >
              <Dragger {...props} className={Styles1.dragger}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Select a file or drag and drop here
                </p>
                <p className="ant-upload-hint">
                  JPG, PNG or PDF, file size no more than 3 MB
                  <br />
                  270 x 158 recommended
                </p>
                <Button className={Styles1.buttondrag}>
                  <img src="../images/Small outline btn.png" alt="abc"></img>
                </Button>
              </Dragger>
            </div>
            <div className={Styles1.scnddivservice}>
              <p className={Styles1.largetct}>Contact Details</p>
            </div>
            <div className={Styles1.displdeshiservice}>
              <div>
                <p className={Styles1.txtgap}>Name</p>
                <Input className={Styles1.wdthinpu} placeholder="Name" />
              </div>
              <div>
                <p className={Styles1.txtgap}>Contact Number</p>
                <Input
                  className={Styles1.wdthinpu}
                  placeholder="+1 (929) 303 0303
                  "
                />
              </div>
            </div>
            <div className={Styles1.displdeshiservice}>
              <div>
                <p className={Styles1.txtgap}>Email</p>
                <Input
                  className={Styles1.wdthinpu}
                  placeholder="efat@gmail.com"
                />
              </div>
              <div>
                <p className={Styles1.txtgap}>Website</p>
                <Input
                  className={Styles1.wdthinpu}
                  placeholder="www.website.com"
                />
              </div>
            </div>
            <div className={Styles1.displdeshiservic}>
              <p className={Styles1.txtgap}>Address</p>
              <TextArea
                className={Styles1.wdthinp}
                placeholder="1329 Saint Lawrence Ave, Bronx, NY"
                autoSize={{
                  minRows: 1.5,
                  maxRows: 5,
                }}
              />
            </div>
            <div className={Styles1.fourdivs}>
              <div>
                <p className={Styles1.txtgap}>City</p>
                <Input placeholder="city" className={Styles1.wdthinp}></Input>
              </div>
              <div>
                <p className={Styles1.txtgap}>State</p>
                <Input placeholder="State" className={Styles1.wdthinp}></Input>
              </div>{" "}
              <div>
                <p className={Styles1.txtgap}>Postal</p>
                <Input placeholder="Postal" className={Styles1.wdthinp}></Input>
              </div>{" "}
              <div>
                <p className={Styles1.txtgap}>Country</p>
                <Input
                  placeholder="Country"
                  className={Styles1.wdthinp}
                ></Input>
              </div>
            </div>

            <div className={Styles1.scnddivservice}>
              <p className={Styles1.largetct}>Social Links</p>
            </div>
            <div className={Styles1.displdeshiservice}>
              <div>
                <p className={Styles1.txtgap}>Facebook</p>
                <Input className={Styles1.wdthinpu} placeholder="Tchnovee" />
              </div>
              <div>
                <p className={Styles1.txtgap}>Instagram</p>
                <Input
                  className={Styles1.wdthinpu}
                  placeholder="Istiaq_firoz"
                />
              </div>
            </div>
            <div className={Styles1.displdeshiservice}>
              <div>
                <p className={Styles1.txtgap}>Twitter</p>
                <Input
                  className={Styles1.wdthinpu}
                  placeholder="Istiaq_firoz"
                />
              </div>
              <div>
                <p className={Styles1.txtgap}>Youtube</p>
                <Input
                  className={Styles1.wdthinpu}
                  placeholder="Istiaq_firoz"
                />
              </div>
            </div>
            <div className={Styles1.displdeshiservice}>
              <div>
                <p className={Styles1.txtgap}>Linkdin</p>
                <Input
                  className={Styles1.wdthinpu}
                  placeholder="Istiaq_firoz"
                />
              </div>
              <div></div>
            </div>
            <Button className={Styles1.submitbutt}>Submit</Button>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default RentalForm;
