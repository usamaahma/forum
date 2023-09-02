import React, { useState, useEffect } from "react";
import Styles from "../../styles/eventform.module.css";
import { DownOutlined, UserOutlined, InboxOutlined } from "@ant-design/icons";
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
    eventForm({
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
                      width: "20rem",
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
          {/* <Row justify={"center"} className={Styles.ticketspot}>
            
              <Button>
                <img src="../images/Labelled.png" alt="abc" />
              </Button>
            </Row> */}
          <Row justify="center">
            <Col>
              <Form.Item name="ticketSpot">
                <div className={Styles.divssss}>
                  <p>Ticket Spot</p>
                  <Input className={Styles.inputgapp} />
                </div>
              </Form.Item>
            </Col>
          </Row>
          <Row justify="center" className={Styles.colgap}>
            <Col>
              <Form.Item name="name">
                <div className={Styles.divssss}>
                  Name
                  <Input className={Styles.inputgap} placeholder=" Name" />
                </div>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name="address">
                <div className={Styles.divssss}>
                  Address
                  <Input className={Styles.inputgap} placeholder="Address" />
                </div>
              </Form.Item>
            </Col>
          </Row>{" "}
          <Row justify="center" className={Styles.colgap}>
            <Col className={Styles.colgapppssss}>
              <Form.Item name="contactNumberti">
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
        </div>
        <div className={Styles.draggercenter} style={{ marginTop: "1rem" }}>
          <Form.Item name="image">
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
  );
}

export default Eventform;
