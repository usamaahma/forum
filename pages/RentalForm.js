import React, { useState } from "react";
import Styles from "../styles/HeroSection.module.css";
import Styles1 from "../styles/DeshiServiceForm.module.css";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import {
  Button,
  Dropdown,
  Space,
  message,
  Upload,
  Form,
  Row,
  Col,
  Input,
  DatePicker,
  Select,
  TimePicker,
  Tag,
  Radio,
  Modal,
} from "antd";
import { DownOutlined, InboxOutlined } from "@ant-design/icons";
import RichTextEditor from "@/components/texteditor";
import { rentalForm } from "../helper/axios";
// import { useDispatch } from "react-redux";
// import { setLoginState } from "../../redux/user";
import { Storage } from "../firebase";
import {
  uploadBytes,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
const { TextArea } = Input;

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

function RentalForm({ initialValues }) {
  const [loadings, setLoadings] = useState([]);
  const [value, setValue] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState();
  const [Pdf, setPdf] = useState(null);
  const [url, setUrl] = useState("");
  const [percent, setPercent] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //////////////////////////////////////image firebase
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const handlesubmit = (e) => {
    const uploadedFile = e.target.files[0]; // Get the uploaded file
    if (uploadedFile) {
      const imageDocument = ref(
        Storage,
        `images/${uploadedFile.name + showTime}`
      );
      const uploadTask = uploadBytesResumable(imageDocument, uploadedFile);

      uploadTask.on("state_changed", (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
      });

      uploadBytes(imageDocument, uploadedFile)
        .then(() => {
          getDownloadURL(imageDocument)
            .then((Url) => {
              setUrl(Url);
              setUploadedImageUrl(Url); // Set the uploaded image URL
              console.log(Url);
            })
            .catch((error) => {
              console.log(error.message, "error getting the image url");
            });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  //////////////////////////////////////////// handle function
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleCategoryChange = (value) => {
    form.setFieldsValue({ category: value });
  };
  const handleSubCategoryChange = (value) => {
    form.setFieldsValue({ subCategory: value });
  };
  const handleSalaryTypeChange = (value) => {
    form.setFieldsValue({ salaryType: value });
  };
  const handleSalaryChange = (value) => {
    form.setFieldsValue({ salary: value });
  };

  const handleDeadlineChange = (value) => {
    form.setFieldsValue({ deadline: value });
  };
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  /////////////////////////api
  const onFinish = async (values) => {
    // Continue with the API call
    console.log(values, "doneee");
    localStorage.setItem("eventFormData", JSON.stringify(values));
    const dataForApi = {
      eventName: values.eventName,
      startDate: values.startDate,
      endDate: values.endDate,
      category: values.category,
      startTime: values.startTime,
      endTime: values.endTime,
      location: values.location,
      contactNumber: values.contactNumber,
      sellTicket: values.sellTicket,
      ticketPrice: values.ticketPrice,
      ticketSpot: values.ticketSpot,
      name: values.name,
      address: values.address,
      contactNumberti: values.contactNumberti,
      image: [url],
    };
    rentalForm({
      method: "post",
      data: dataForApi,
    })
      .then((res) => {
        console.log(res.data, "api");
        message.success("API call successful!");
        localStorage.removeItem("eventFormData");
        setUrl("");
      })
      .catch((error) => {
        setLoading(false);
        message.error("API call failed.");
      })
      .finally(() => {
        onReset();
      });
  };
  const onReset = () => {
    form.resetFields();
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
        <Row justify="center">
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={form}
            initialValues={initialValues}
          >
            <Col>
              <div className={Styles1.displdeshiservice}>
                <div>
                  <Form.Item name="title">
                    <p className={Styles1.txtgap}>Title</p>
                    <Input className={Styles1.wdthinpu} placeholder="Title" />
                  </Form.Item>
                </div>
                <div className={Styles1.gapscnd}>
                  <Form.Item name="category">
                    <div className={Styles.divssss}>
                      <p style={{ marginTop: "-.1rem" }}> Category</p>
                      <Select
                        defaultValue="Category1"
                        style={{
                          width: "20rem",
                          marginTop: ".5rem",
                        }}
                        onChange={handleCategoryChange}
                        options={[
                          {
                            value: "Category2",
                            label: "Category2",
                          },
                          {
                            value: "Category3",
                            label: "Category3",
                          },
                          {
                            value: "Category4",
                            label: "Category4",
                          },
                        ]}
                      />
                    </div>
                  </Form.Item>
                </div>
              </div>
              <div className={Styles1.displdeshiservice}>
                <div>
                  <Form.Item name="subCategory">
                    <div className={Styles.divssss}>
                      <p style={{ marginTop: "-.1rem" }}>Sub Category</p>
                      <Select
                        defaultValue="subCategory1"
                        style={{
                          width: "20rem",
                          marginTop: ".5rem",
                        }}
                        onChange={handleSubCategoryChange}
                        options={[
                          {
                            value: "subCategory12",
                            label: "subCategory12",
                          },
                          {
                            value: "subCategory13",
                            label: "subCategory13",
                          },
                          {
                            value: "subCategory14",
                            label: "subCategory14",
                          },
                        ]}
                      />
                    </div>
                  </Form.Item>
                </div>
                <div className={Styles1.gapscnd}>
                  <Form.Item name="tags">
                    <p className={Styles1.txtgap}>Tags</p>
                    <div className={Styles1.wdthinput}>
                      <Tag
                        closable
                        onClose={log}
                        style={{ marginLeft: ".5rem" }}
                      >
                        Tag 1
                      </Tag>{" "}
                      <Tag closable onClose={log}>
                        Headphone
                      </Tag>{" "}
                      <Tag closable onClose={log}>
                        Business
                      </Tag>
                    </div>{" "}
                  </Form.Item>
                </div>
              </div>
              <div className={Styles1.displdeshiservice}>
                <div>
                  <Form.Item>
                    <div>
                      <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>Pricing</Radio>
                        <Radio value={2}>Price Range</Radio>
                        <Radio value={3}>Deasabled</Radio>
                      </Radio.Group>
                    </div>
                  </Form.Item>
                </div>
                <div>
                  <Form.Item name="priceType">
                    <div className={Styles.divssss}>
                      <p style={{ marginTop: "-.1rem" }}>Price Type</p>
                      <Select
                        defaultValue="Yearly"
                        style={{
                          width: "20rem",
                          marginTop: ".5rem",
                        }}
                        onChange={handleSalaryTypeChange}
                        options={[
                          {
                            value: "Yearly",
                            label: "Yearly",
                          },
                          {
                            value: "monthly",
                            label: "monthly",
                          },
                        ]}
                      />
                    </div>
                  </Form.Item>
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
                  <Form.Item name="name">
                    <p className={Styles1.txtgap}>Name</p>
                    <Input className={Styles1.wdthinpu} placeholder="Name" />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item name="contactNumber">
                    <p className={Styles1.txtgap}>Contact Number</p>
                    <Input
                      className={Styles1.wdthinpu}
                      placeholder="+1 (929) 303 0303"
                    />
                  </Form.Item>
                </div>
              </div>
              <div className={Styles1.displdeshiservice}>
                <div>
                  <Form.Item name="email">
                    <p className={Styles1.txtgap}>Email</p>
                    <Input
                      className={Styles1.wdthinpu}
                      placeholder="efat@gmail.com"
                    />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item name="website">
                    <p className={Styles1.txtgap}>Website</p>
                    <Input
                      className={Styles1.wdthinpu}
                      placeholder="www.website.com"
                    />
                  </Form.Item>
                </div>
              </div>
              <div className={Styles1.displdeshiservic}>
                <Form.Item name="address">
                  <p className={Styles1.txtgap}>Address</p>
                  <TextArea
                    className={Styles1.wdthinp}
                    placeholder="1329 Saint Lawrence Ave, Bronx, NY"
                    autoSize={{
                      minRows: 1.5,
                      maxRows: 5,
                    }}
                  />
                </Form.Item>
              </div>
              <div className={Styles1.fourdivs}>
                <div>
                  <Form.Item name="city">
                    <p className={Styles1.txtgap}>City</p>
                    <Input placeholder="city" className={Styles1.wdthinp} />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item name="state">
                    <p className={Styles1.txtgap}>State</p>
                    <Input placeholder="State" className={Styles1.wdthinp} />
                  </Form.Item>
                </div>{" "}
                <div>
                  <Form.Item name="postal">
                    <p className={Styles1.txtgap}>Postal</p>
                    <Input placeholder="Postal" className={Styles1.wdthinp} />
                  </Form.Item>
                </div>{" "}
                <div>
                  {" "}
                  <Form.Item name="country">
                    <p className={Styles1.txtgap}>Country</p>
                    <Input placeholder="Country" className={Styles1.wdthinp} />
                  </Form.Item>
                </div>
              </div>

              <div className={Styles1.scnddivservice}>
                <p className={Styles1.largetct}>Social Links</p>
              </div>
              <div className={Styles1.displdeshiservice}>
                <div>
                  <Form.Item name="facebook">
                    <p className={Styles1.txtgap}>Facebook</p>
                    <Input
                      className={Styles1.wdthinpu}
                      placeholder="Tchnovee"
                    />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item name="instagram">
                    <p className={Styles1.txtgap}>Instagram</p>
                    <Input
                      className={Styles1.wdthinpu}
                      placeholder="Istiaq_firoz"
                    />
                  </Form.Item>
                </div>
              </div>
              <div className={Styles1.displdeshiservice}>
                <div>
                  <Form.Item name="twitter">
                    <p className={Styles1.txtgap}>Twitter</p>
                    <Input
                      className={Styles1.wdthinpu}
                      placeholder="Istiaq_firoz"
                    />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item name="youtube">
                    <p className={Styles1.txtgap}>Youtube</p>
                    <Input
                      className={Styles1.wdthinpu}
                      placeholder="Istiaq_firoz"
                    />
                  </Form.Item>
                </div>
              </div>
              <div className={Styles1.displdeshiservice}>
                <div>
                  <Form.Item name="linkdin">
                    <p className={Styles1.txtgap}>Linkdin</p>
                    <Input
                      className={Styles1.wdthinpu}
                      placeholder="Istiaq_firoz"
                    />
                  </Form.Item>
                </div>
              </div>
              <Form.Item>
                <Button className={Styles1.submitbutt} htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Form>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default RentalForm;
