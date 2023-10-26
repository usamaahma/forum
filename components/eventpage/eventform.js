import React, { useState, useEffect } from "react";
import Styles from "../../styles/eventform.module.css";
import { CloudDownloadOutlined } from "@ant-design/icons";
import Styles1 from "../../styles/DeshiServiceForm.module.css";

import {
  Button,
  Modal,
  message,
  Form,
  Row,
  Col,
  Input,
  DatePicker,
  Select,
  TimePicker,
} from "antd";
import { eventForm } from "../../helper/axios";
// import { useDispatch } from "react-redux";
// import { setLoginState } from "../../redux/user";
import { Storage } from "../../firebase";
import {
  uploadBytes,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

function Eventform({ initialValues }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState();
  const [Pdf, setPdf] = useState(null);
  const [url, setUrl] = useState("");
  const [percent, setPercent] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [featureData, setFeatureData] = useState([]); // To store feature data
  const [name, setName] = useState(""); // State for Name field
  const [address, setAddress] = useState(""); // State for Address field
  const [number, setNumber] = useState(""); // State for Number field
  // To st

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleAddFeature = () => {
    // Add feature data to the featureData array
    if (name && address && number) {
      setFeatureData([
        ...featureData,
        `Name: ${name}, Address: ${address}, Number: ${number}`,
      ]);
      setName(""); // Clear Name field
      setAddress(""); // Clear Address field
      setNumber(""); // Clear Number field
    }
  };
  const handleRemoveFeature = (index) => {
    // Remove a feature from the featureData array
    const newFeatureData = [...featureData];
    newFeatureData.splice(index, 1);
    setFeatureData(newFeatureData);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setName(""); // Clear Name field
    setAddress(""); // Clear Address field
    setNumber(""); // Clear Number field
    setIsModalOpen(false);
  };

  /////////////////////////////fire base image
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
  /////////////////api and handle function
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleCategoryChange = (value) => {
    form.setFieldsValue({ category: value });
  };
  const handleSellTicketChange = (value) => {
    form.setFieldsValue({ sellTicket: value });
  };

  const handleStartDateChange = (value) => {
    form.setFieldsValue({ startDate: value });
  };
  const handleEndDateChange = (value) => {
    form.setFieldsValue({ endDate: value });
  };
  const handleStartTimeChange = (value) => {
    form.setFieldsValue({ startTime: value });
  };
  const handleEndTimeChange = (value) => {
    form.setFieldsValue({ endTime: value });
  };
  const handleimageChange = (value) => {
    form.setFieldsValue({ image: value });
  };

  const onFinish = async (values, formData) => {
    // Continue with the API call
    console.log(values, "doneee");
    localStorage.setItem("eventFormData", JSON.stringify(values));
    // localStorage.setItem("eventTicketData", JSON.stringify(ticketSpotData));
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
      ticketSpot: featureData,

      image: [url],
    };
    eventForm({
      method: "post",
      data: dataForApi,
    })
      .then((res) => {
        console.log(res.data, "api");
        message.success("API call successful!");
        localStorage.removeItem("eventFormData");
        setFeatureData([]); // Clear feature data
        setName(""); // Clear Name field
        setAddress(""); // Clear Address field
        setNumber(""); // Clear Number field
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <Modal
          title="Add ticket"
          visible={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {/* Input fields for Name, Address, and Number in the modal */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label>Name:</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                style={{ width: "12rem", marginLeft: ".5rem" }}
              />
            </div>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label>Address:</label>
              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
                style={{ width: "12rem", marginLeft: ".5rem" }}
              />
            </div>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label>Number:</label>
              <Input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Number"
                style={{ width: "12rem", marginLeft: ".5rem" }}
              />
            </div>
            <br />
            <Button type="primary" onClick={handleAddFeature}>
              Add ticket
            </Button>
          </div>

          {/* Display feature data inside the modal */}
          <div>
            {featureData.map((feature, index) => (
              <div key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    marginTop: "1rem",
                  }}
                >
                  <p style={{ fontSize: "1rem" }}>{feature}</p>
                </div>
                <Button type="link" onClick={() => handleRemoveFeature(index)}>
                  Remove
                </Button>
              </div>
            ))}
          </div>
        </Modal>
      </div>

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
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
          initialValues={initialValues}
        >
          <Row justify="center" className={Styles.colgap}>
            <Col>
              <Form.Item name="eventName">
                <div className={Styles.divssss}>
                  Event Name
                  <Input className={Styles.inputgap} placeholder="Event Name" />
                </div>
              </Form.Item>
            </Col>
            <Col>
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
            </Col>
          </Row>
          <Row justify="center" className={Styles.colgap}>
            <Col>
              <div className={Styles.divsssss}>
                <Form.Item name="startDate">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    Start Date
                    <DatePicker
                      className={Styles.inputgapss}
                      onChange={handleStartDateChange}
                      format="YYYY-MM-DD"
                      placeholder="Start Date"
                    />
                  </div>
                </Form.Item>
                <Form.Item name="endDate">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    End Date
                    <DatePicker
                      className={Styles.inputgapss}
                      onChange={handleEndDateChange}
                      format="YYYY-MM-DD"
                      placeholder="End Date"
                    />
                  </div>
                </Form.Item>
              </div>
            </Col>
            <Col>
              <div className={Styles.divsssss}>
                <Form.Item name="startTime">
                  <div style={{ display: "grid" }}>
                    Start Time
                    <TimePicker
                      className={Styles.inputgapss}
                      placeholder="Start Time"
                      onChange={handleStartTimeChange}
                    />
                  </div>
                </Form.Item>
                <Form.Item name="endTime">
                  <div style={{ display: "grid" }}>
                    End Time
                    <TimePicker
                      className={Styles.inputgapss}
                      placeholder="End Time"
                      onChange={handleEndTimeChange}
                    />
                  </div>
                </Form.Item>
              </div>
            </Col>
          </Row>
          <Row justify="center" className={Styles.colgap}>
            <Col>
              <Form.Item name="location">
                <div className={Styles.divssss}>
                  Location
                  <Input className={Styles.inputgap} placeholder="Location" />
                </div>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name="contactNumber">
                <div className={Styles.divssss}>
                  Contact Number
                  <Input
                    className={Styles.inputgap}
                    placeholder="Contact Number"
                  />
                </div>
              </Form.Item>
            </Col>
          </Row>
          <div>
            <div className={Styles.ticketss}>
              <p className={Styles.ticket}>Ticket Setting</p>
            </div>
            <Row justify="center" className={Styles.colgap}>
              <Col>
                <Form.Item name="sellTicket">
                  <div className={Styles.divssss}>
                    <p style={{ marginTop: "-.4rem" }}>Sell Ticket</p>
                    <Select
                      defaultValue="Ticket"
                      style={{
                        width: "22rem",
                        marginTop: ".4rem",
                      }}
                      onChange={handleSellTicketChange}
                      options={[
                        {
                          value: "Ticket1",
                          label: "Ticket1",
                        },
                        {
                          value: "Ticket2",
                          label: "Ticket2",
                        },
                        {
                          value: "Ticket3",
                          label: "Ticket3",
                        },
                      ]}
                    />
                  </div>
                </Form.Item>
              </Col>
              <Col style={{ marginTop: "-.5rem" }}>
                <Form.Item name="ticketPrice">
                  <div className={Styles.divssss}>
                    Ticket Price
                    <Input
                      className={Styles.inputgap}
                      placeholder="Ticket Price"
                    />
                  </div>
                </Form.Item>
              </Col>
            </Row>

            <Row justify="center">
              <Col lg={21} md={21} xs={24}>
                <div className={Styles1.displdeshiservic}>
                  <Form.Item name="ticketSpot">
                    <div>
                      <div className={Styles1.plustxt}>
                        Ticket Spot
                        <Button
                          className={Styles1.plusbutton}
                          onClick={showModal}
                        >
                          <img alt="abc" src="../images/Plus1.png" />
                          <p className={Styles1.txtaddfeature}>Add Ticket</p>
                        </Button>
                      </div>
                      <div className={Styles1.divnew}>
                        <div className={Styles1.divnew5}>
                          {/* Display the feature details */}
                          Feature:{" "}
                          <div>
                            {featureData.map((feature, index) => (
                              <div
                                key={index}
                                style={{ fontSize: "1.2rem", padding: ".5rem" }}
                              >
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </div>
          <div
            className={Styles.draggercenter}
            style={{
              marginTop: "1rem",
            }}
          >
            <Form.Item name="image">
              <div className={Styles.dotimg}>
                <p className="ant-upload-drag-icon">
                  <CloudDownloadOutlined style={{ fontSize: "2rem" }} />
                </p>
                <p className={Styles.seltext}>
                  Select a file or drag and drop here
                </p>
                <p className={Styles.seltext1}>
                  JPG, PNG or PDF, file size no more than 3 MB
                  <br />
                  270 x 158 recommended
                </p>
                <input type="file" onChange={handlesubmit} />
              </div>
            </Form.Item>
          </div>
          <Row justify="center" className={Styles.colgap}>
            <Col className={Styles.colgapppssss}>
              <Form.Item>
                <Button className={Styles.buttonsantd} htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default Eventform;
