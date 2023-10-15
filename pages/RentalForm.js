import React, { useState, useEffect } from "react";
import Styles from "../styles/HeroSection.module.css";
import Styles1 from "../styles/DeshiServiceForm.module.css";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import {
  Button,
  Space,
  message,
  Form,
  Row,
  Col,
  Input,
  Select,
  Radio,
  Modal,
} from "antd";
import {
  DownOutlined,
  InboxOutlined,
  PlusOutlined,
  MinusCircleOutlined,
  CloudDownloadOutlined,
} from "@ant-design/icons";

import { rentalCategory, rentalForm, rentalSubCategory } from "../helper/axios";
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
import { WithContext as ReactTags } from "react-tag-input";
const DynamicReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const { TextArea } = Input;

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
  const [text, setText] = useState("");
  const [featureDetails, setFeatureDetails] = useState([]);
  const [tags, setTags] = useState([]);
  const [featureInput, setFeatureInput] = useState([]);
  const [secondInputValue, setSecondInputValue] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("$");
  const [combinedPrice, setCombinedPrice] = useState("");
  const [cdata, csetdata] = useState([]);
  const [scdata, scsetdata] = useState([]);
  // State for rich text editor content
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);

    const trimmedFeatureInput = featureInput.trim();
    const trimmedSecondInputValue = secondInputValue.trim();

    if (trimmedFeatureInput !== "" || trimmedSecondInputValue !== "") {
      setFeatureDetails([
        ...featureDetails,
        `${trimmedFeatureInput} ${trimmedSecondInputValue}`,
      ]);
    }

    setFeatureInput(""); // Clear the first input field
    setSecondInputValue(""); // Clear the second input field
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
    setCombinedPrice(selectedCurrency + value); // Combine currency and price
  };
  const handleCurrencyChange = (value) => {
    setSelectedCurrency(value);
    setCombinedPrice(value + form.getFieldValue("price")); // Combine currency and price
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
  const handleFeatureInputChange = (e) => {
    setFeatureInput(e.target.value); // Add the input value to the array
  };

  const handleSecondInputChange = (e) => {
    setSecondInputValue(e.target.value);
    // ...
  };
  ////////////tags'
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };
  const KeyCodes = {
    comma: 188,
    enter: 13,
  };
  const delimiters = [KeyCodes.comma, KeyCodes.enter];

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };
  /////////////////category
  const getRentalCategory = () => {
    setLoading(true);
    // let token = localStorage.getItem("talbeilm-token");
    rentalCategory({
      method: "get",
      headers: {
        // Authorization: `Bearer ${token}`,
      },
      // params: {
      //   page: currentPage,
      //   limit: perPage,
      // },
    })
      .then((res) => {
        console.log(res.data.results, "user");
        csetdata(res.data.results);
        setLoading(false);
      })
      .catch(() => {
        message.error("an error occured please try later");
        setLoading(false);
      });
  };
  ////////////////////getsubCategory
  const getRentalSubCategory = () => {
    setLoading(true);
    // let token = localStorage.getItem("talbeilm-token");
    rentalSubCategory({
      method: "get",
      headers: {
        // Authorization: `Bearer ${token}`,
      },
      // params: {
      //   page: currentPage,
      //   limit: perPage,
      // },
    })
      .then((res) => {
        console.log(res.data.results, "user");
        scsetdata(res.data.results);
        setLoading(false);
      })
      .catch(() => {
        message.error("an error occured please try later");
        setLoading(false);
      });
  };
  /////////////////////////api
  const onFinish = async (values) => {
    // Continue with the API call
    console.log(values, "doneee");

    localStorage.setItem("eventFormData", JSON.stringify(values));
    const tagsArray = tags.map((tag) => tag.name);

    const dataForApi = {
      title: values.title,
      category: values.category,
      subCategory: values.subCategory,
      tags: tagsArray,
      priceType: values.priceType,
      price: combinedPrice,
      time: values.time,
      metaDescription: values.metaDescription,
      serviceDescription: values.serviceDescription,
      feature: featureDetails,
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
    rentalForm({
      method: "post",
      data: dataForApi,
    })
      .then((res) => {
        console.log(res.data, "api");
        message.success("API call successful!");
        localStorage.removeItem("eventFormData");
        setUrl("");
        setTags([]);
        setFeatureDetails([]);
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
  useEffect(() => {
    getRentalCategory();
    getRentalSubCategory();
  }, []);
  return (
    <>
      <MainHeader />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className={Styles.mainhero}>
          <div>
            <h1 className={Styles.centerhero}>Add Rental</h1>
            <p className={Styles.colrgreen}>Home / Add Rental</p>
          </div>
        </div>{" "}
        <div
          style={{
            background: "white",
            boxShadow: "0px 6px 40px 0px #0000000D",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            marginTop: "1rem",
          }}
        >
          <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form
              name="dynamic_form_nest_item"
              onFinish={onFinish}
              style={{
                maxWidth: 600,
              }}
              autoComplete="off"
            >
              <Form.List name="users">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{
                          display: "flex",
                          marginBottom: 8,
                        }}
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, "feature"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing first name",
                            },
                          ]}
                        >
                          <Input
                            placeholder="First feature"
                            value={featureInput[name]}
                            onChange={(e) => handleFeatureInputChange(e, name)}
                          />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "Value"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing last name",
                            },
                          ]}
                        >
                          <Input
                            placeholder="Value"
                            value={secondInputValue[name]}
                            onChange={(e) => handleSecondInputChange(e, name)}
                          />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add feature
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
              {/* <button onClick={addFeature}>Add</button> */}
            </Form>
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
                  <Form.Item name="title">
                    <div>
                      Title
                      <Input className={Styles1.wdthinpu} placeholder="Title" />
                    </div>
                  </Form.Item>
                  <div className={Styles1.gapscnd}>
                    <Form.Item name="category">
                      <div className={Styles.divssss}>
                        <p style={{ marginBottom: ".2rem" }}> Category</p>
                        <Select
                          defaultValue="Category"
                          style={{
                            width: "22rem",
                          }}
                          onChange={handleCategoryChange}
                          options={cdata?.map((a, index) => ({
                            key: index,
                            value: a.name,
                            label: a.name,
                          }))}
                        />
                      </div>
                    </Form.Item>
                  </div>
                </div>
                <div className={Styles1.displdeshiservice}>
                  <Form.Item name="subCategory">
                    <div className={Styles.divssss}>
                      <p style={{ marginBottom: ".2rem" }}>Sub Category</p>
                      <Select
                        defaultValue="subCategory1"
                        style={{
                          width: "22rem",
                        }}
                        onChange={handleSubCategoryChange}
                        options={scdata?.map((a, index) => ({
                          key: index,
                          value: a.name,
                          label: a.name,
                        }))}
                      />
                    </div>
                  </Form.Item>
                  <div className={Styles1.gapscnd}>
                    <Form.Item name="tags">
                      <div>
                        Tags
                        <div className={Styles1.wdthinputag}>
                          <ReactTags
                            tags={tags}
                            inline="true"
                            name="inputName"
                            // suggestions={suggestions}
                            delimiters={delimiters}
                            handleDelete={handleDelete}
                            handleAddition={handleAddition}
                            handleDrag={handleDrag}
                            handleTagClick={handleTagClick}
                            inputFieldPosition="inline"
                            labelField={"name"}
                            autocomplete
                            editable
                            style={{ padding: ".5rem", color: "red" }}
                            placeholder="tags"
                            classNames={{
                              tags: Styles1.tagsClass,
                              tagInput: Styles1.tagInputClass,
                              tagInputField: Styles1.tagInputFieldClass,
                              selected: Styles1.selectedClass,
                              tag: Styles1.tagClass,
                              remove: Styles1.removeClass,
                            }}
                          />
                        </div>
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
                  <div>
                    <Form.Item name="priceType">
                      <div className={Styles.divssss}>
                        <p style={{ marginTop: "-.1rem" }}>Price Type</p>
                        <Select
                          defaultValue="Yearly"
                          style={{
                            width: "22rem",
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
                </div>
                <div className={Styles1.displdeshiservice}>
                  <div className={Styles1.gapscnd}>
                    <div className={Styles1.gapfourth}>
                      <div className={Styles1.posdiv}>
                        <Form.Item name="currency">
                          <div className={Styles.divssss}>
                            <Select
                              defaultValue="currency"
                              style={{
                                width: "6rem",
                                marginTop: "1.7rem",
                              }}
                              onChange={handleCurrencyChange}
                              options={[
                                {
                                  value: "$",
                                  label: "$",
                                },
                                {
                                  value: "ban",
                                  label: "ban",
                                },
                                {
                                  value: "pkr",
                                  label: "pkr",
                                },
                              ]}
                            />
                          </div>
                        </Form.Item>
                      </div>
                      <Form.Item name="price">
                        <div className={Styles.divssss}>
                          <p style={{ marginTop: "-.1rem" }}>Price</p>
                          <Select
                            defaultValue="price"
                            style={{
                              width: "22rem",
                              marginTop: ".5rem",
                            }}
                            onChange={handlePriceChange}
                            options={[
                              {
                                value: "50",
                                label: "50",
                              },
                              {
                                value: "100",
                                label: "100",
                              },
                            ]}
                          />
                        </div>
                      </Form.Item>
                    </div>
                  </div>
                  <div>
                    <Form.Item name="time">
                      <div className={Styles.divssss}>
                        <p style={{ marginTop: "-.1rem" }}>Time</p>
                        <Select
                          defaultValue="Yearly"
                          style={{
                            width: "22rem",
                            marginTop: ".5rem",
                          }}
                          onChange={handleTimeChange}
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
                          <div>
                            Feature:{" "}
                            {featureDetails.map((feature, index) => (
                              <div key={index}>{feature}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form.Item>
                </div>
                <div
                  className={Styles1.draggercenter}
                  style={{ marginTop: "1rem" }}
                >
                  <Form.Item name="image">
                    <div className={Styles1.dotimg}>
                      <p className="ant-upload-drag-icon">
                        <CloudDownloadOutlined style={{ fontSize: "2rem" }} />
                      </p>
                      <p className={Styles1.seltext}>
                        Select a file or drag and drop here
                      </p>
                      <p className={Styles1.seltext1}>
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
                    <Form.Item name="name">
                      <div>
                        Name
                        <Input
                          className={Styles1.wdthinpu}
                          placeholder="Name"
                        />
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
                        <Input
                          placeholder="State"
                          className={Styles1.wdthinp}
                        />
                      </div>
                    </Form.Item>
                  </div>{" "}
                  <div>
                    <Form.Item name="postal">
                      <div>
                        <p className={Styles1.txtgap}>Postal</p>
                        <Input
                          placeholder="Postal"
                          className={Styles1.wdthinp}
                        />
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
      </div>
      <Footer />
    </>
  );
}

export default RentalForm;
