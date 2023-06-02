import React, { useState } from "react";
import Styles from "../../styles/Coupon.module.css";
import { DownOutlined, DashOutlined } from "@ant-design/icons";
import {
  Input,
  Space,
  Button,
  Dropdown,
  Tag,
  Modal,
  Row,
  Col,
  Form,
  DatePicker,
  Select,
} from "antd";
import DataTable from "react-data-table-component";
import Image from "next/image";
import Frame from "../../public/images/Frame 44979.png";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const { Search } = Input;

const onSearch = (value) => console.log(value);
const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Code",
    selector: (row) => (
      <div>
        <Tag className={Styles.btn}>{row.code}</Tag>
      </div>
    ),
  },
  {
    name: "Amount",
    selector: (row) => row.amount,
  },
  {
    name: "Status",
    selector: (row) => (
      <div>
        <Tag className={Styles.btn}>{row.status}</Tag>
      </div>
    ),
  },
  {
    name: "Product",
    selector: (row) => row.product,
  },
  {
    name: "Action",
    selector: (row) => (
      <div>
        <Dropdown
          menu={{
            items: items1,
          }}
          placement="bottomLeft"
          arrow={{
            pointAtCenter: true,
          }}
        >
          {row.action}
        </Dropdown>
      </div>
    ),
  },
];

const data = [
  {
    id: 1,
    name: "Black Friday",
    code: "Black Friday",
    amount: "50%",
    status: "Active",
    product: "All Products",
    action: <DashOutlined />,
  },
  {
    id: 2,
    name: "Black Friday",
    code: "Black Friday",
    amount: "50%",
    status: "Active",
    product: "All Products",
    action: <DashOutlined />,
  },
  {
    id: 3,
    name: "Black Friday",
    code: "Black Friday",
    amount: "50%",
    status: "Active",
    product: "All Products",
    action: <DashOutlined />,
  },
];

const items = [
  {
    key: "1",
    label: <a>Active </a>,
  },
  {
    key: "2",
    label: <a>Disable</a>,
  },
  {
    key: "3",
    label: <a>Archive</a>,
  },
  {
    key: "4",
    label: <a>Delete</a>,
  },
];
const items1 = [
  {
    key: "1",
    label: <a>Active </a>,
  },
  {
    key: "2",
    label: <a>Disable</a>,
  },
  {
    key: "3",
    label: <a>Archive</a>,
  },
  {
    key: "4",
    label: <a>Edit</a>,
  },
  {
    key: "5",
    label: <a>Delete</a>,
  },
];

function Coupon() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className={Styles.twobtnds}>
        <div>
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{
                width: 200,
              }}
            />
          </Space>
        </div>
        <div className={Styles.flexxxx}>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
            arrow={{
              pointAtCenter: true,
            }}
          >
            <Button>
              Filter
              <DownOutlined />
            </Button>
          </Dropdown>
          <Image
            src={Frame}
            alt=""
            className={Styles.mrleft}
            onClick={showModal}
          />
        </div>
      </div>
      <div>
        <DataTable
          className={Styles.datatbl}
          columns={columns}
          data={data}
          selectableRows
        />
      </div>
      <div>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <Row justify="center">
            <Col lg={12} md={12}>
              <div className={Styles.centerdiv}>
                <div>
                  <br />
                  <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <p className={Styles.namtext}>Campaigns Name</p>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your Campaigns Name!",
                        },
                      ]}
                    >
                      <Input
                        className={Styles.input}
                        placeholder="Campaigns Name"
                      />
                    </Form.Item>
                    <p className={Styles.namtext}>Start Date </p>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your Start Date !",
                        },
                      ]}
                    >
                      <DatePicker
                        className={Styles.input}
                        placeholder="Start Date "
                      />
                    </Form.Item>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your Code!",
                        },
                      ]}
                    >
                      <p className={Styles.namtext}>Code</p>
                      <Input className={Styles.input} placeholder="Code" />
                    </Form.Item>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Button htmlType="submit" className={Styles.btnsub}>
                        Generate
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </Col>
            <Col lg={12} md={12}>
              <div className={Styles.centerdiv}>
                <div>
                  <br />
                  <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <p className={Styles.namtext}>Percentage</p>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your Percentage!",
                        },
                      ]}
                    >
                      <Input
                        className={Styles.input}
                        placeholder="Percentage"
                      />
                    </Form.Item>
                    <p className={Styles.namtext}>End Date</p>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your End Date!",
                        },
                      ]}
                    >
                      <DatePicker
                        className={Styles.input}
                        placeholder="End Date"
                      />
                    </Form.Item>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your Product Type!",
                        },
                      ]}
                    >
                      <p className={Styles.namtext}>Product Type</p>
                      <Select
                        placeholder="Product Type"
                        defaultValue="Product Type"
                        className={Styles.input}
                        onChange={handleChange}
                        options={[
                          {
                            value: "Product Type",
                            label: "Product Type",
                          },
                          {
                            value: "Product Type",
                            label: "Product Type",
                          },
                        ]}
                      />
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Modal>
      </div>
    </div>
  );
}
export default Coupon;
