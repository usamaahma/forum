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
import dayjs from "dayjs";
import RichTextEditor from "@/components/texteditor";
import { jobForm } from "../helper/axios";
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

const dateFormat = "YYYY/MM/DD";

const log = (e) => {
  console.log(e);
};

function JobForm({ initialValues }) {
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

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
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
  const handleJobTypeChange = (value) => {
    form.setFieldsValue({ jobType: value });
  };
  const handleJobPositionChange = (value) => {
    form.setFieldsValue({ jobPosition: value });
  };
  const handleDeadlineChange = (value) => {
    form.setFieldsValue({ deadline: value });
  };

  /////////////////////////api
  const onFinish = async (values) => {
    // Continue with the API call
    console.log(values, "doneee");
    localStorage.setItem("jobFormData", JSON.stringify(values));
    const dataForApi = {
      title: values.title,
      category: values.category,
      subCategory: values.subCategory,
      tags: values.tags,
      salaryType: values.salaryType,
      salary: values.salary,
      metaDescription: values.metaDescription,
      industry: values.industry,
      jobApplyLink: values.jobApplyLink,
      experience: values.experience,
      jobType: values.jobType,
      jobPosition: values.jobPosition,
      tagsJob: values.tagsJob,
      deadline: values.deadline,
      addressJob: values.addressJob,
      jobDescription: values.jobDescription,
      name: values.name,
      contactNumber: values.contactNumber,
      email: values.email,
      website: values.website,
      address: values.address,
      city: values.city,
      state: values.state,
      postal: values.postal,
      country: values.country,
      image: [url],
    };
    jobForm({
      method: "post",
      data: dataForApi,
    })
      .then((res) => {
        console.log(res.data, "api");
        message.success("API call successful!");
        localStorage.removeItem("jobFormData");
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
          <h1 className={Styles.centerhero}>Add Job</h1>
          <p className={Styles.colrgreen}>Home / Add Job</p>
        </div>
      </div>
      <div>
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
          initialValues={initialValues}
        >
          <Row justify="center">
            <Col>
              <div className={Styles1.displdeshiservice}>
                <Form.Item name="title">
                  <div>
                    Title
                    <Input className={Styles1.wdthinpu} placeholder="Title" />
                  </div>
                </Form.Item>
                <div className={Styles1.gapscnd}>
                  <Form.Item name="category">
                    <div className={Styles.divssss}>
                      <p style={{ marginTop: "-.1rem" }}> Category</p>
                      <Select
                        defaultValue="Category1"
                        style={{
                          width: "22rem",
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
                <Form.Item name="subCategory">
                  <div className={Styles.divssss}>
                    <p style={{ marginTop: "-.1rem" }}>Sub Category</p>
                    <Select
                      defaultValue="subCategory1"
                      style={{
                        width: "22rem",
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
                <div className={Styles1.gapscnd}>
                  <Form.Item name="tags">
                    <div>
                      Tags
                      <Input className={Styles1.wdthinpu} placeholder="tags" />
                    </div>
                  </Form.Item>
                </div>
              </div>
              <div className={Styles1.displdeshiservice}>
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
              <div className={Styles1.displdeshiservice}>
                <Form.Item name="salaryType">
                  <div className={Styles.divssss}>
                    <p style={{ marginTop: "-.1rem" }}>Salary Type</p>
                    <Select
                      defaultValue="Yearly"
                      style={{
                        width: "22rem",
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
                <div className={Styles1.gapscnd}>
                  <div className={Styles1.gapfourth}>
                    <Form.Item name="salary">
                      <div className={Styles.divssss}>
                        <p style={{ marginTop: "-.1rem" }}>Salary</p>
                        <Select
                          defaultValue="Yearly"
                          style={{
                            width: "22rem",
                            marginTop: ".5rem",
                          }}
                          onChange={handleSalaryChange}
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
                    {/* <p className={Styles1.txtgap}>Salary</p>
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
                    </Dropdown> */}
                  </div>
                  {/* <Dropdown
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
                  </Dropdown> */}
                </div>
              </div>
              <div className={Styles1.displdeshiservic}>
                <Form.Item name="metaDescription">
                  <div>
                    Meta Description
                    <TextArea
                      className={Styles1.wdthinp}
                      autoSize={{
                        minRows: 2,
                        maxRows: 8,
                      }}
                    />
                  </div>
                </Form.Item>
              </div>
              <p className={Styles1.largetct} style={{ marginTop: "1rem" }}>
                Job Overview
              </p>
              <div className={Styles1.displdeshiservice}>
                <Form.Item name="industry">
                  <div>
                    Industry
                    <Input
                      className={Styles1.wdthinpu}
                      placeholder="Industry"
                    />
                  </div>
                </Form.Item>

                <Form.Item name="jobApplyLink">
                  <div>
                    Job Apply Link
                    <Input
                      className={Styles1.wdthinpu}
                      placeholder="Job apply link"
                    />
                  </div>
                </Form.Item>
              </div>
              <div className={Styles1.displdeshiservice}>
                <Form.Item name="experience">
                  <div>
                    Experience
                    <Input
                      className={Styles1.wdthinpu}
                      placeholder="1-2 years"
                    />
                  </div>
                </Form.Item>

                <div className={Styles1.gapscnd}>
                  <Form.Item name="jobType">
                    <div className={Styles.divssss}>
                      <p style={{ marginTop: "-.1rem" }}>Job Type</p>
                      <Select
                        defaultValue="Job"
                        style={{
                          width: "20rem",
                          marginTop: ".5rem",
                        }}
                        onChange={handleJobTypeChange}
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
                <Form.Item name="jobPosition">
                  <div className={Styles.divssss}>
                    <p style={{ marginTop: "-.1rem" }}>Job Position</p>
                    <Select
                      defaultValue="Position"
                      style={{
                        width: "20rem",
                        marginTop: ".5rem",
                      }}
                      onChange={handleJobPositionChange}
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

                <div className={Styles1.gapscnd}>
                  <Form.Item name="tagsJob">
                    <div>
                      Tags
                      <Input
                        className={Styles1.wdthinpu}
                        placeholder="tagsJob"
                      />
                    </div>
                  </Form.Item>
                </div>
              </div>
              <div className={Styles1.displdeshiservice}>
                <Form.Item name="addressJob">
                  <div>
                    Address
                    <Input
                      className={Styles1.wdthinpu}
                      placeholder="addressJob"
                    />
                  </div>
                </Form.Item>
                <div className={Styles1.gapscnd}>
                  <Form.Item name="deadline">
                    <p className={Styles1.txtgap}>Deadline</p>
                    <DatePicker
                      defaultValue={dayjs("2015/01/01", dateFormat)}
                      className={Styles1.wdthinpu}
                      onChange={handleDeadlineChange}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className={Styles1.displdeshiservic}>
                <Form.Item name="jobDescription">
                  <div>
                    <div className={Styles1.plustxt}>
                      Job Description
                      <Button
                        className={Styles1.plusbutton}
                        onClick={showModal}
                      >
                        <img alt="abc" src="../images/Plus1.png" />{" "}
                        <p className={Styles1.txtaddfeature}>Add Description</p>
                      </Button>
                    </div>
                    <TextArea
                      className={Styles1.wdthinp}
                      autoSize={{
                        minRows: 2,
                        maxRows: 8,
                      }}
                    />
                  </div>
                </Form.Item>
              </div>
              <div
                className={Styles.draggercenter}
                style={{ marginTop: "1rem" }}
              >
                <Form.Item name="image">
                  <div>
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
                    <input type="file" onChange={handlesubmit} />
                  </div>
                </Form.Item>
              </div>
              <div className={Styles1.scnddivservice}>
                <p className={Styles1.largetct}>Contact Details</p>
              </div>
              <div className={Styles1.displdeshiservice}>
                <Form.Item name="name">
                  <div>
                    Name
                    <Input className={Styles1.wdthinpu} placeholder="Name" />
                  </div>
                </Form.Item>
                <Form.Item name="contactNumber">
                  <div>
                    Contact Number
                    <Input
                      className={Styles1.wdthinpu}
                      placeholder="+1 (929) 303 0303"
                    />
                  </div>
                </Form.Item>
              </div>
              <div className={Styles1.displdeshiservice}>
                <Form.Item name="email">
                  <div>
                    Email
                    <Input
                      className={Styles1.wdthinpu}
                      placeholder="efat@gmail.com"
                    />
                  </div>
                </Form.Item>

                <Form.Item name="website">
                  <div>
                    Website
                    <Input
                      className={Styles1.wdthinpu}
                      placeholder="www.website.com"
                    />
                  </div>
                </Form.Item>
              </div>
              <div className={Styles1.displdeshiservic}>
                <Form.Item name="address">
                  <div>
                    Address
                    <TextArea
                      className={Styles1.wdthinp}
                      placeholder="1329 Saint Lawrence Ave, Bronx, NY"
                      autoSize={{
                        minRows: 1.5,
                        maxRows: 5,
                      }}
                    />
                  </div>
                </Form.Item>
              </div>
              <div className={Styles1.fourdivs}>
                <Form.Item name="city">
                  <div>
                    City
                    <Input placeholder="city" className={Styles1.wdthinp} />
                  </div>
                </Form.Item>
                <Form.Item name="state">
                  <div>
                    State
                    <Input placeholder="State" className={Styles1.wdthinp} />
                  </div>
                </Form.Item>

                <Form.Item name="postal">
                  <div>
                    Postal
                    <Input placeholder="Postal" className={Styles1.wdthinp} />
                  </div>
                </Form.Item>

                <Form.Item name="country">
                  <div>
                    Country
                    <Input placeholder="Country" className={Styles1.wdthinp} />
                  </div>
                </Form.Item>
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
          </Row>
        </Form>
      </div>
      <div>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Row>
            <Col>
              {" "}
              <div className={Styles1.pmodal}>
                Job Description{" "}
                <img
                  className={Styles1.imgt}
                  style={{ marginLeft: ".5rem" }}
                  alt="abc"
                  src="../images/question.png"
                />
              </div>{" "}
              <div className={Styles1.plustxt} style={{ marginTop: "1rem" }}>
                {/* <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottom"
                  arrow
                >
                  <Button className={Styles1.wdthinpu}>
                    Description
                    <DownOutlined />
                  </Button>
                </Dropdown>{" "} */}
                <div className={Styles1.plustxttt}>
                  <img alt="abc" src="../images/Delete.png" />
                  <img alt="abc" src="../images/circle-plus-24.png" />
                </div>
              </div>
              <div style={{ marginTop: "1rem" }}>
                {" "}
                <RichTextEditor />
              </div>{" "}
              <div className={Styles1.plustxt} style={{ marginTop: "1rem" }}>
                {/* <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottom"
                  arrow
                >
                  <Button className={Styles1.wdthinpu}>
                    Key Responsibilities
                    <DownOutlined />
                  </Button>
                </Dropdown>{" "} */}
                <div className={Styles1.plustxttt}>
                  <img alt="abc" src="../images/Delete.png" />
                  <img alt="abc" src="../images/circle-plus-24.png" />
                </div>
              </div>
              <div style={{ marginTop: "1rem" }}>
                {" "}
                <RichTextEditor />
              </div>
            </Col>
          </Row>
        </Modal>
      </div>
      <Footer />
    </div>
  );
}

export default JobForm;
