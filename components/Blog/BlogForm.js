import React, { useEffect, useState } from "react";
import { Row, Col, Input, DatePicker, Select } from "antd";
import Styles from "../../styles/eventform.module.css";
import { DownOutlined, UserOutlined, InboxOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space, message, Upload, Form } from "antd";
import { blogForm } from "../../helper/axios";
// import { useDispatch } from "react-redux";
// import { setLoginState } from "../../redux/user";
import { Storage } from "../../firebase";
import {
  uploadBytes,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
const { TextArea } = Input;
const { Dragger } = Upload;

function BlogForm({ initialValues }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState();
  const [Pdf, setPdf] = useState(null);
  const [url, setUrl] = useState("");
  const [percent, setPercent] = useState("");

  // const dispatch = useDispatch();

  ////////
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const handlesubmit = (values) => {
    let uploadedFile = values.image?.[0]; // Access the uploaded file from the form values

    if (uploadedFile) {
      const imageDocument = ref(
        Storage,
        `images/${uploadedFile.name + showTime}`
      );
      const uploadTask = uploadBytesResumable(imageDocument, uploadedFile);

      uploadBytes(imageDocument, uploadedFile)
        .then(() => {
          getDownloadURL(imageDocument)
            .then((Url) => {
              setUrl(Url);
              console.log(Url);
            })
            .catch((error) => {
              console.log(error.message, "error getting the image url");
            });
        })
        .catch((error) => {
          console.log(error.message);
        });

      uploadTask.on("state_changed", (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
      });
    }
    console.log(url, "ggg");
  };

  //////////////////
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
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const items = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: "4rd menu item",
      key: "4",
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const handleCategoryChange = (value) => {
    form.setFieldsValue({ category: value });
  };

  const handleSubCategoryChange = (value) => {
    form.setFieldsValue({ subCategory: value });
  };
  const handledateChange = (value) => {
    form.setFieldsValue({ date: value });
  };
  const handleimageChange = (value) => {
    form.setFieldsValue({ image: value });
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const onFinish = async (values) => {
    // Continue with the API call
    console.log(values, "doneee");
    localStorage.setItem("blogFormData", JSON.stringify(values));
    const dataForApi = {
      yourName: values.yourName,
      postTitle: values.postTitle,
      category: values.category,
      subCategory: values.subCategory,
      tag: values.tag,
      date: values.date,
      description: values.description,
      image: [url],
    };
    blogForm({
      method: "post",
      data: dataForApi,
    })
      .then((res) => {
        console.log(res.data, "api");
        message.success("API call successful!");
        localStorage.removeItem("blogFormData");
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
            <Form.Item
              name="yourName"
              rules={[
                {
                  required: true,
                  message: "Please input your yourName!",
                },
              ]}
            >
              <div className={Styles.divssss}>
                Your Name
                <Input className={Styles.inputgap} placeholder="Your Name" />
              </div>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="postTitle"
              rules={[
                {
                  required: true,
                  message: "Please input your postTitle!",
                },
              ]}
            >
              <div className={Styles.divssss}>
                Post Title
                <Input className={Styles.inputgap} placeholder="Post Title" />
              </div>
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center" className={Styles.colgap}>
          <Col>
            <Form.Item name="category">
              <div className={Styles.divssss}>
                Category{" "}
                <Select
                  defaultValue="lucy"
                  style={{
                    width: "20rem",
                  }}
                  onChange={handleCategoryChange}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                  ]}
                />
              </div>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="subCategory">
              <div className={Styles.divssss}>
                Sub Category
                <Select
                  defaultValue="lucy"
                  style={{
                    width: "20rem",
                  }}
                  onChange={handleSubCategoryChange}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                  ]}
                />
              </div>
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center" className={Styles.colgap}>
          <Col>
            <Form.Item name="tag">
              <div className={Styles.divssss}>
                Tag
                <Input className={Styles.inputgap} placeholder="Tag" />
              </div>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="date">
              <div className={Styles.divssss}>
                Date
                <DatePicker
                  className={Styles.inputgap}
                  placeholder="Date"
                  onChange={handledateChange}
                />
              </div>
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center" className={Styles.colgap}>
          <Col className={Styles.colgapppssss}>
            <Form.Item name="description">
              <div className={Styles.divssss}>
                Description
                <TextArea className={Styles.inputgaptext} rows={4} />
              </div>
            </Form.Item>
          </Col>
        </Row>
        <div className={Styles.draggercenter} style={{ marginTop: "1rem" }}>
          <Form.Item name="image">
            {/* <Dragger
            {...props}
            className={Styles.dragger}
            onChange={handleimageChange}
          > */}
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
            {/* <Button className={Styles.buttondrag}>
              <img src="../images/Small outline btn.png" alt="abc" /> */}
            <input type="file" onChange={handlesubmit} />
            {/* </Button> */}
            {/* </Dragger> */}
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

export default BlogForm;
