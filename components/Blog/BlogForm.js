import React, { useEffect, useState } from "react";
import Styles from "../../styles/eventform.module.css";
import Styles1 from "../../styles/DeshiServiceForm.module.css";
import {
  DownOutlined,
  UserOutlined,
  InboxOutlined,
  CloudDownloadOutlined,
} from "@ant-design/icons";
import {
  Button,
  message,
  Upload,
  Form,
  Row,
  Col,
  Input,
  DatePicker,
  Select,
} from "antd";
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
import { WithContext as ReactTags } from "react-tag-input";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const DynamicReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const { TextArea } = Input;
const { Dragger } = Upload;

function BlogForm({ initialValues }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState();
  const [Pdf, setPdf] = useState(null);
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [percent, setPercent] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [tags, setTags] = useState([]);
  // const dispatch = useDispatch();

  /////////////////////////////
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

  const handleCategoryChange = (value) => {
    form.setFieldsValue({ category: value });
  };

  const handleSubCategoryChange = (value) => {
    form.setFieldsValue({ subCategory: value });
  };
  const handledateChange = (value) => {
    form.setFieldsValue({ date: value });
  };
  const handleServiceDescriptionChange = (value) => {
    form.setFieldsValue({ description: value });
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

  ////////////////

  const onFinish = async (values) => {
    // Continue with the API call

    console.log(values, "doneee");
    console.log(text, "text");
    localStorage.setItem("blogFormData", JSON.stringify(values));
    const tagsArray = tags.map((tag) => tag.name);

    const dataForApi = {
      yourName: values.yourName,
      postTitle: values.postTitle,
      category: values.category,
      subCategory: values.subCategory,
      tag: tagsArray,
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
        setTags([]);
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
                      width: "22rem",
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
                      width: "22rem",
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
                <div>
                  Tags
                  <div className={Styles.wdthinputag}>
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
            </Col>
            <Col>
              <Form.Item name="date">
                <div className={Styles.divssss}>
                  Date
                  <DatePicker
                    className={Styles.inputgap}
                    placeholder="Date"
                    onChange={handledateChange}
                    format="YYYY-MM-DD"
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
                  <DynamicReactQuill
                    value={text}
                    onChange={handleServiceDescriptionChange}
                  />
                </div>
              </Form.Item>
            </Col>
          </Row>
          <div className={Styles1.draggercenter}>
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

export default BlogForm;
