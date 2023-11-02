import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Modal,
  Progress,
  Row,
  Select,
  Tag,
  message,
  Input,
} from "antd";
import Styles from "../../styles/servicecard.module.css";
import Switch from "./Switch";
import { jobCategory, jobForm } from "@/helper/axios";
import { DeleteFilled, FormOutlined } from "@ant-design/icons";
import { Storage } from "../../firebase";
import {
  uploadBytes,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

function JobCard() {
  const [hovered, setHovered] = useState(false);
  // const router = useRouter();
  const [data, setData] = useState();
  const [loading, setloading] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [idData, setIdData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(1);
  const [names, setNames] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImages] = useState([]);
  const [categories, setCategories] = useState("");
  const [address, setAddress] = useState("");
  const [cdata, csetdata] = useState([]);
  const [percent, setPercent] = useState("");
  const [url, setUrl] = useState("");
  const [Pdf, setPdf] = useState(null);
  const [loadingedit, setLoadingEdit] = useState(false);
  const [jobDescription, setJobDescription] = useState("");

  const showModal = (item) => {
    setIdData(item);
    setNames(item.name);
    setTitle(item.title);
    setCategories(item.category);
    setAddress(item.address);
    setImages(item?.image?.[0]);
    setJobDescription(item.jobDescription);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setUrl("");
  };
  const onChanges = (item, available) => {
    const updatedItem = { ...item, available }; // Create a new object with updated "available" status
    console.log(updatedItem, "ava");
    handleUpdateA(updatedItem);
  };
  //////
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const handlesubmit = (e) => {
    let values = e.target.files?.[0];
    if (e.target.files?.[0]) {
      setPdf(e.target.files?.[0]);
    }
    const imageDocument = ref(Storage, `images/${Pdf?.name + showTime}`);
    const uploadTask = uploadBytesResumable(imageDocument, Pdf);
    uploadBytes(imageDocument, values)
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
      })
      .finally(() => {
        setPdf(null); // Reset the Pdf state variable to null
      });
    uploadTask.on("state_changed", (snapshot) => {
      const percent = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setPercent(percent);
    });
  };
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handleUpdateA = (item) => {
    setloading(true);

    // Create an object with only the "available" field to update
    const data = {
      available: item.available,
    };

    // Make an API request to update only the "available" field
    jobForm(`/${item.id}`, {
      method: "patch",
      data: data,
    })
      .then(() => {
        getJobForm();
        setloading(false);
        message.success("Available status updated!");
      })
      .catch(() => {
        setLoadingEdit(false);
        message.error("Something went wrong, please try again!");
      })
      .finally(() => {
        setIsModalVisible(false);
      });
  };

  const handleUpdate = (item) => {
    setloading(true);

    // let token = localStorage.getItem("talbeilm-token");

    let data = {
      name: item.name,
      title: item.title,
      category: item.category,
      address: item.address,
      buySellDescription: item.buySellDescription,
      price: item.price,
      priceType: item.priceType,
      image: url !== "" ? [url] : [item.image],
    };

    jobForm(`/${item.id}`, {
      method: "patch",
      data: data,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    })
      .then(() => {
        getJobForm("");
        setUrl("");
        setloading(false);
        message.success("Updated!");
        // deleteImage();
      })

      .catch(() => {
        setLoadingEdit(false);
        message.error("something went wrong, please try again!");
      })
      .finally(() => {
        setIsModalVisible(false);
      });
  };
  ///////////////////////////api
  const getJobForm = () => {
    setloading(true);
    // let token = localStorage.getItem("talbeilm-token");

    jobForm({
      method: "get",
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data.results, "user");
        setData(res.data.results);
        setloading(false);
      })
      .catch(() => {
        message.error("an error occured please try later");
        setloading(false);
      });
  };
  const deleteOperation = (id) => {
    // let token = localStorage.getItem("talbeilm-token");
    console.log(id, "iddd");
    jobForm(`/${id}`, {
      method: "delete",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    })
      .then(() => {
        message.success("User Deleted");
        getJobForm();
      })
      .catch(() => {
        message.error("an error occured please try later");
      });
  };
  const getJobCategory = () => {
    setloading(true);
    // let token = localStorage.getItem("talbeilm-token");
    jobCategory({
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
        setloading(false);
      })
      .catch(() => {
        message.error("an error occured please try later");
        setloading(false);
      });
  };
  useEffect(() => {
    getJobForm();
    getJobCategory();
  }, []);
  return (
    <div>
      <div>
        {data?.map((item, index) => (
          <div key={index}>
            <Card bordered={false}>
              <Row className={Styles.gapro}>
                <Col>
                  {" "}
                  <img
                    src={item.image?.[0]}
                    alt="abc"
                    width={150}
                    height={150}
                  />
                </Col>
                <Col>
                  <div className={Styles.butico}>
                    <button className={Styles.btnconst}>
                      {" "}
                      {item?.category}
                    </button>
                    <div className={Styles.gapro}>
                      <a onClick={() => showModal(item)}>
                        <FormOutlined
                          style={{
                            fontSize: "1rem",
                            color: "grey",
                            marginLeft: "1rem",
                          }}
                        />
                      </a>
                      <a onClick={() => deleteOperation(item?.id)}>
                        <DeleteFilled
                          style={{
                            fontSize: "1rem",
                            color: "grey",
                            marginLeft: "1rem",
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <div className={Styles.seconddiv}>
                    <p className={Styles.nam}>{item.title}</p>
                    <p className={Styles.pric}>{item.price}</p>
                  </div>
                  <p className={Styles.det}>{item.jobDescription}</p>
                  <div className={Styles.stat}>
                    <img alt="abc" src="../images/jobb.png" />
                    <p>{item.jobType}</p>
                  </div>
                  <div className={Styles.stat}>
                    <p>Status:</p>
                    <Tag
                      style={{
                        backgroundColor: item.status ? "#DEF5D3" : "#FFF7D8",
                        color: item.status ? "#42B00F" : "#ffab00",
                      }}
                    >
                      {item.status ? "Approved" : "Deny"}
                    </Tag>{" "}
                    <button className={Styles.btncompp}>
                      {item.jobPosition}
                    </button>
                  </div>
                  <Row className={Styles.rowlastt}>
                    <Col className={Styles.collstw}>
                      {" "}
                      <div className={Styles.collstww}>
                        <img
                          className={Styles.imgs}
                          alt="abc"
                          src="../images/watch.png"
                        />{" "}
                        <p>{data.time}</p>{" "}
                      </div>
                      <div className={Styles.collstww}>
                        <img
                          className={Styles.imgs}
                          alt="abc"
                          src="../images/locationone.png"
                        />{" "}
                        <p>{item.address}</p>{" "}
                      </div>
                      <div className={Styles.collstww}>
                        <img
                          className={Styles.imgs}
                          alt="abc"
                          src="../images/Eye3.png"
                        />{" "}
                        <p>{data.views} Views</p>{" "}
                      </div>
                    </Col>
                    <Col className={Styles.availbleswitch}>
                      <p> {item.available ? "Available" : "Unavailable"}</p>
                      {/* <Switch /> */}
                      <label>
                        <input
                          type="checkbox"
                          checked={item?.available ? true : false}
                          onChange={() => onChanges(item, !item?.available)}
                          style={{ display: "none" }}
                        />
                        <span
                          style={{
                            display: "inline-block",
                            width: "50px",
                            height: "30px",
                            borderRadius: "15px",
                            backgroundColor: item?.available ? "green" : "red",
                            transition: "background-color 0.3s ease",
                          }}
                        >
                          <span
                            style={{
                              display: "inline-block",
                              width: "26px",
                              height: "26px",
                              borderRadius: "13px",
                              backgroundColor: "white",
                              margin: "2px",
                              transition: "transform 0.3s ease",
                              transform: item?.available
                                ? "translateX(20px)"
                                : "translateX(0)",
                            }}
                          />
                        </span>
                      </label>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </div>
        ))}
      </div>
      <Modal
        title="Edit Post"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loadingedit}
            onClick={() => {
              handleUpdate({
                name: names,
                title: title,
                category: categories,
                address: address,
                id: idData.id,
                jobDescription: jobDescription,
                image: idData.image,
              });
            }}
          >
            Save
          </Button>,
        ]}
      >
        <p>{idData.id}</p>
        <div className="dispaly-flex">
          <div>
            <h4>name</h4>
            <Input
              value={names}
              className="input-update"
              onChange={(e) => setNames(e.target.value)}
            />
          </div>
          <div className="divspacer">
            <h4>title</h4>
            <Input
              value={title}
              className="input-update"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="divspacer">
            <h4>address</h4>
            <Input
              value={address}
              className="input-update"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="dispaly-flex2">
          <div>
            <h4>category</h4>
            <Select
              value={categories ? categories : idData?.category}
              defaultValue="Category"
              style={{
                width: "22rem",
              }}
              onChange={(e) => {
                console.log(e, "chh");
                setCategories(e);
              }}
              options={cdata?.map((a, index) => ({
                key: index,
                value: a.name,
                label: a.name,
              }))}
            />
          </div>
          <div className="dispaly-flex3">
            <div>
              <h4>Image:</h4>
            </div>
            <div className="form-item3">
              <input
                type="file"
                style={{ width: "28vw" }}
                onChange={handlesubmit}
                // value={image}
              />
              <Progress
                className="progress"
                percent={percent}
                status="active"
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default JobCard;
