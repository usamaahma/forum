import React, { useState, useEffect } from "react";
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
import { buyCategory, buySellForm } from "@/helper/axios";
import { DeleteFilled, FormOutlined } from "@ant-design/icons";
import { Storage } from "../../firebase";
import {
  uploadBytes,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
const { TextArea } = Input;

function BuySellCard() {
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
  const [metaDescription, setMetaDescription] = useState("");
  const [price, setPrice] = useState("");
  const [deliveryType, setDeliveryType] = useState("");
  //////

  const showModal = (item) => {
    setIdData(item);
    setNames(item.name);
    setTitle(item.title);
    setCategories(item.category);
    setAddress(item.address);
    setMetaDescription(item.buySellDescription);
    setImages(item?.image?.[0]);
    setPrice(item.price);
    setDeliveryType(item.deliveryType);
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
  /////////////////

  const handleUpdateA = (item) => {
    setloading(true);

    // Create an object with only the "available" field to update
    const data = {
      available: item.available,
    };

    // Make an API request to update only the "available" field
    buySellForm(`/${item.id}`, {
      method: "patch",
      data: data,
    })
      .then(() => {
        getBuySellForm();
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
      c: item.category,
      address: item.address,
      buySellDescription: item.buySellDescription,
      price: item.price,
      deliveryType: item.deliveryType,
      image: url !== "" ? [url] : [item.image],
    };

    buySellForm(`/${item.id}`, {
      method: "patch",
      data: data,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    })
      .then(() => {
        getBuySellForm("");
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
  const getBuySellForm = () => {
    setloading(true);
    // let token = localStorage.getItem("talbeilm-token");

    buySellForm({
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
    buySellForm(`/${id}`, {
      method: "delete",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    })
      .then(() => {
        message.success("User Deleted");
        getBuySellForm();
      })
      .catch(() => {
        message.error("an error occured please try later");
      });
  };
  const getBuyCategory = () => {
    setloading(true);
    // let token = localStorage.getItem("talbeilm-token");
    buyCategory({
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
    getBuySellForm();
    getBuyCategory();
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
                  <p className={Styles.det}>{item.buySellDescription}</p>
                  <div className={Styles.stat}>
                    <img alt="abc" src="../images/homedelivery.png" />
                    <p>{item.deliveryType}</p>
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
                    <button className={Styles.btncompp}>{data.status1}</button>
                  </div>
                  <Row className={Styles.rowlast}>
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
                metaDescription: metaDescription,
                id: idData.id,
                deliveryType: deliveryType,
                image: idData.image,
              });
            }}
          >
            Save
          </Button>,
        ]}
      >
        <p>{idData.id}</p>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
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
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div className="divspacer">
              <h4>address</h4>
              <Input
                value={address}
                className="input-update"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="divspacer">
              <h4>price</h4>
              <Input
                value={price}
                className="input-update"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="dispaly-flex2">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div>
              <h4>category</h4>
              <Select
                value={categories ? categories : idData?.category}
                defaultValue="Category"
                style={{
                  width: "11.5rem",
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
            <div>
              <h4>deliveryType</h4>
              <Select
                value={deliveryType}
                defaultValue="deliveryType"
                style={{
                  width: "11.5rem",
                }}
                onChange={(e) => {
                  console.log(e, "type");
                  setDeliveryType(e);
                }}
                options={[
                  {
                    value: "Cod",
                    label: "Cod",
                  },
                  {
                    value: "Online",
                    label: "Online",
                  },
                ]}
              />
            </div>
          </div>
          <div className="divspacer">
            <h4>metaDescription</h4>
            <TextArea
              value={metaDescription}
              className="input-update"
              onChange={(e) => setMetaDescription(e.target.value)}
              autoSize={{
                minRows: 2,
                maxRows: 12,
              }}
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

export default BuySellCard;
