import React, { useState, useEffect } from "react";
import Styles from "../styles/HeroSection.module.css";
import Styles1 from "../styles/DeshiServiceForm.module.css";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import {
  Button,
  message,
  Form,
  Row,
  Col,
  Input,
  Select,
  Radio,
  Modal,
} from "antd";
import { DownOutlined, InboxOutlined } from "@ant-design/icons";
import { deshiOneForm } from "@/helper/axios";
// import { useDispatch } from "react-redux";
// import { setLoginState } from "../../redux/user";
import { Storage } from "../firebase";
import {
  uploadBytes,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const DynamicReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const { TextArea } = Input;

function DeshiServiceForm({ initialValues }) {
  const [loadings, setLoadings] = useState([]);
  const [value, setValue] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState();
  const [Pdf, setPdf] = useState(null);
  const [url, setUrl] = useState("");
  const [percent, setPercent] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [size, setSize] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [furniture, setFurniture] = useState("");
  const [text, setText] = useState("");
  const [featureDetails, setFeatureDetails] = useState([]);
  // State for rich text editor content
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
  const handlePriceTypeChange = (value) => {
    form.setFieldsValue({ priceType: value });
  };
  const handlePriceChange = (value) => {
    form.setFieldsValue({ price: value });
  };
  const handleTimeChange = (value) => {
    form.setFieldsValue({ time: value });
  };
  const handleServiceDescriptionChange = (value) => {
    form.setFieldsValue({ serviceDescription: value });
  };
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  ///////////////////////////

  /////////////////////////api
  const onFinish = async (values) => {
    // Continue with the API call
    console.log(values, "doneee");

    localStorage.setItem("deshiFormData", JSON.stringify(values));
    const dataForApi = {
      title: values.title,
      category: values.category,
      subCategory: values.subCategory,
      tags: values.tags,
      priceType: values.priceType,
      price: values.price,
      metaDescription: values.metaDescription,
      serviceDescription: values.serviceDescription,
      feature: values.feature,
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
    deshiOneForm({
      method: "post",
      data: dataForApi,
    })
      .then((res) => {
        console.log(res.data, "api");
        message.success("API call successful!");
        localStorage.removeItem("deshiFormData");
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
  const updateFeatureValues = () => {
    const featureDetails = `Size: ${size}, Bedroom: ${bedroom}, Bathroom: ${bathroom}, Furniture: ${furniture}`;
    form.setFieldsValue({ feature: featureDetails });
  };

  useEffect(() => {
    updateFeatureValues(); // Call the function to update feature values
  }, [size, bedroom, bathroom, furniture]);

  return (
    <div>
      <MainHeader />
      <div className={Styles.mainhero}>
        <div>
          <h1 className={Styles.centerhero}>Add Deshi Service</h1>
          <p className={Styles.colrgreen}>Home / Add Deshi Service</p>
        </div>
      </div>{" "}
      <div style={{ background: "white" }}>
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
                <Form.Item name="size">
                  <Input
                    className={Styles1.modaldicwdth}
                    placeholder="1500 sf"
                    onChange={(e) => setSize(e.target.value)}
                  />
                </Form.Item>
                <div className={Styles1.plustxttt}>
                  <img alt="abc" src="../images/Delete.png" />
                  <img alt="abc" src="../images/circle-plus-24.png" />
                </div>
              </div>
              <div className={Styles1.plustxt}>
                <Form.Item name="bedroom">
                  <Input
                    className={Styles1.modaldicwdth}
                    placeholder="3 Bed"
                    onChange={(e) => setBedroom(e.target.value)}
                  />
                </Form.Item>
                <div className={Styles1.plustxttt}>
                  <img alt="abc" src="../images/Delete.png" />
                  <img alt="abc" src="../images/circle-plus-24.png" />
                </div>
              </div>
              <div className={Styles1.plustxt}>
                <Form.Item name="bathroom">
                  <Input
                    className={Styles1.modaldicwdth}
                    placeholder="1 Bath"
                    onChange={(e) => setBathroom(e.target.value)}
                  />
                </Form.Item>
                <div className={Styles1.plustxttt}>
                  <img alt="abc" src="../images/Delete.png" />
                  <img alt="abc" src="../images/circle-plus-24.png" />
                </div>
              </div>
              <div className={Styles1.plustxt}>
                <Form.Item name="furniture">
                  <Input
                    className={Styles1.modaldicwdth}
                    placeholder="Not Furnished"
                    onChange={(e) => setFurniture(e.target.value)}
                  />
                </Form.Item>
                <div className={Styles1.plustxttt}>
                  <img alt="abc" src="../images/Delete.png" />
                  <img alt="abc" src="../images/circle-plus-24.png" />
                </div>
              </div>
            </Col>
          </Row>
        </Modal>
        <Row justify={"center"}>
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
                <div className={Styles1.gapscnd}>
                  <Form.Item name="tags">
                    <div>
                      Tags
                      <Input className={Styles1.wdthinpu} placeholder="Tags" />
                    </div>
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
                <div className={Styles1.nonedis}></div>
              </div>
              <div className={Styles1.displdeshiservice}>
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
                        onChange={handlePriceTypeChange}
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
                <div className={Styles1.displdeshiservice}>
                  <div className={Styles1.gapscnd}>
                    <div className={Styles1.gapfourth}>
                      <Form.Item name="priceType">
                        <div className={Styles.divssss}>
                          <Select
                            defaultValue=" $"
                            style={{
                              width: "4rem",
                              marginTop: "1.7rem",
                            }}
                            onChange={handlePriceTypeChange}
                            options={[
                              {
                                value: "pkr",
                                label: "pkr",
                              },
                              {
                                value: "dihram",
                                label: "dihram",
                              },
                            ]}
                          />
                        </div>
                      </Form.Item>
                      <Form.Item name="price">
                        <div className={Styles.divssss}>
                          <p style={{ marginTop: "-.1rem" }}>Price</p>
                          <Select
                            defaultValue="Yearly"
                            style={{
                              width: "20rem",
                              marginTop: ".5rem",
                            }}
                            onChange={handlePriceChange}
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
              <div className={Styles1.displdeshiservic}>
                <Form.Item name="serviceDescription">
                  <div>
                    Service Description
                    <DynamicReactQuill
                      value={text}
                      onChange={handleServiceDescriptionChange}
                    />
                  </div>
                </Form.Item>
              </div>

              <div className={Styles1.displdeshiservic}>
                <Form.Item name="feature">
                  <div>
                    <div className={Styles1.plustxt}>
                      Feature
                      <Button
                        className={Styles1.plusbutton}
                        onClick={showModal}
                      >
                        <img alt="abc" src="../images/Plus1.png" />{" "}
                        <p className={Styles1.txtaddfeature}>Add Feature</p>
                      </Button>
                    </div>
                    <div className={Styles1.divnew}>
                      <div className={Styles1.divnew5}>
                        {/* <div>
                          Size: {size}
                          <br />
                          Bedroom: {bedroom}
                          <br />
                          Bathroom: {bathroom}
                          <br />
                          Furniture: {furniture}
                          <br />
                        </div> */}
                        Feature: {form.getFieldValue("feature")}
                      </div>
                    </div>
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
                  <Input
                    placeholder="State"
                    className={Styles1.wdthinp}
                  ></Input>
                </div>{" "}
                <div>
                  <p className={Styles1.txtgap}>Postal</p>
                  <Input
                    placeholder="Postal"
                    className={Styles1.wdthinp}
                  ></Input>
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
                <p className={Styles1.largetct}>Contact Details</p>
              </div>
              <div className={Styles1.displdeshiservice}>
                <div>
                  <Form.Item name="name">
                    <div>
                      Name
                      <Input className={Styles1.wdthinpu} placeholder="Name" />
                    </div>
                  </Form.Item>
                </div>
                <div>
                  <Form.Item name="contactNumber">
                    <div>
                      <p className={Styles1.txtgap}>Contact Number</p>
                      <Input
                        className={Styles1.wdthinpu}
                        placeholder="+1 (929) 303 0303"
                      />
                    </div>
                  </Form.Item>
                </div>
              </div>
              <div className={Styles1.displdeshiservice}>
                <div>
                  <Form.Item name="email">
                    <div>
                      <p className={Styles1.txtgap}>Email</p>
                      <Input
                        className={Styles1.wdthinpu}
                        placeholder="efat@gmail.com"
                      />
                    </div>
                  </Form.Item>
                </div>
                <div>
                  <Form.Item name="website">
                    <div>
                      <p className={Styles1.txtgap}>Website</p>
                      <Input
                        className={Styles1.wdthinpu}
                        placeholder="www.website.com"
                      />
                    </div>
                  </Form.Item>
                </div>
              </div>
              <div className={Styles1.displdeshiservic}>
                <Form.Item name="address">
                  <div>
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
                </Form.Item>
              </div>
              <div className={Styles1.fourdivs}>
                <div>
                  <Form.Item name="city">
                    <div>
                      <p className={Styles1.txtgap}>City</p>
                      <Input placeholder="city" className={Styles1.wdthinp} />
                    </div>
                  </Form.Item>
                </div>
                <div>
                  <Form.Item name="state">
                    <div>
                      <p className={Styles1.txtgap}>State</p>
                      <Input placeholder="State" className={Styles1.wdthinp} />
                    </div>
                  </Form.Item>
                </div>{" "}
                <div>
                  <Form.Item name="postal">
                    <div>
                      <p className={Styles1.txtgap}>Postal</p>
                      <Input placeholder="Postal" className={Styles1.wdthinp} />
                    </div>
                  </Form.Item>
                </div>{" "}
                <div>
                  {" "}
                  <Form.Item name="country">
                    <div>
                      <p className={Styles1.txtgap}>Country</p>
                      <Input
                        placeholder="Country"
                        className={Styles1.wdthinp}
                      />
                    </div>
                  </Form.Item>
                </div>
              </div>

              <div className={Styles1.scnddivservice}>
                <p className={Styles1.largetct}>Social Links</p>
              </div>
              <div className={Styles1.displdeshiservice}>
                <div>
                  <Form.Item name="facebook">
                    <div>
                      <p className={Styles1.txtgap}>Facebook</p>
                      <Input
                        className={Styles1.wdthinpu}
                        placeholder="Tchnovee"
                      />
                    </div>
                  </Form.Item>
                </div>
                <div>
                  <Form.Item name="instagram">
                    <div>
                      <p className={Styles1.txtgap}>Instagram</p>
                      <Input
                        className={Styles1.wdthinpu}
                        placeholder="Istiaq_firoz"
                      />
                    </div>
                  </Form.Item>
                </div>
              </div>
              <div className={Styles1.displdeshiservice}>
                <div>
                  <Form.Item name="twitter">
                    <div>
                      <p className={Styles1.txtgap}>Twitter</p>
                      <Input
                        className={Styles1.wdthinpu}
                        placeholder="Istiaq_firoz"
                      />
                    </div>
                  </Form.Item>
                </div>
                <div>
                  <Form.Item name="youtube">
                    <div>
                      <p className={Styles1.txtgap}>Youtube</p>
                      <Input
                        className={Styles1.wdthinpu}
                        placeholder="Istiaq_firoz"
                      />
                    </div>
                  </Form.Item>
                </div>
              </div>
              <div className={Styles1.displdeshiservice}>
                <div>
                  <Form.Item name="linkdin">
                    <div>
                      <p className={Styles1.txtgap}>Linkdin</p>
                      <Input
                        className={Styles1.wdthinpu}
                        placeholder="Istiaq_firoz"
                      />
                    </div>
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

export default DeshiServiceForm;
