import React from "react";
import Styles from "../../styles/rightcoupon.module.css";
import { DownOutlined, DeleteOutlined } from "@ant-design/icons";
import { Input, Space, Button, Dropdown } from "antd";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Image",
    selector: (row) => row.img,
  },
  {
    name: "Status",
    selector: (row) => row.status,
  },
  {
    name: "Discount",
    selector: (row) => row.discount,
  },
  {
    name: "Stock",
    selector: (row) => row.stock,
  },
  {
    name: "Price",
    selector: (row) => row.price,
  },
  {
    name: "Views",
    selector: (row) => row.views,
  },
  {
    name: "Type",
    selector: (row) => row.type,
  },
  ,
  {
    name: "Earning",
    selector: (row) => row.earning,
  },
];

const data = [
  {
    id: 1,
    img: <img alt="abc" src="../images/headphone.png" />,
    picname: "Default Picture",
    date: "Apr 16, 2022",
    status: (
      <p
        style={{
          padding: ".3rem",
          color: "#42B00F",
          backgroundColor: "#DEF5D3",
        }}
      >
        Online
      </p>
    ),
    discount: "50%",
    stock: (
      <p
        style={{
          padding: ".3rem",
          color: "#D60101",
          backgroundColor: "#F7CCCC",
          fontSize: ".7rem",
        }}
      >
        Out of Stock
      </p>
    ),
    price: "$60",
    views: "30",
    type: "||",
    earning: "$360",
  },
  {
    id: 2,
    img: <img alt="abc" src="../images/headphone.png" />,
    picname: "Default Picture",
    date: "Apr 16, 2022",
    status: (
      <p
        style={{
          padding: ".3rem",
          color: "#42B00F",
          backgroundColor: "#DEF5D3",
        }}
      >
        Online
      </p>
    ),
    discount: "50%",
    stock: (
      <p
        style={{
          padding: ".3rem",
          color: "#42B00F",
          backgroundColor: "#DEF5D3",
        }}
      >
        In Stock
      </p>
    ),
    price: "$60",
    views: "30",
    type: "||",
    earning: "$360",
  },
  {
    id: 3,
    img: <img alt="abc" src="../images/headphone.png" />,
    picname: "Default Picture",
    date: "Apr 16, 2022",
    status: (
      <p
        style={{
          padding: ".3rem",
          color: "#42B00F",
          backgroundColor: "#DEF5D3",
        }}
      >
        Online
      </p>
    ),
    discount: "50%",
    stock: (
      <p
        style={{
          padding: ".3rem",
          color: "#42B00F",
          backgroundColor: "#DEF5D3",
        }}
      >
        In Stock
      </p>
    ),
    price: "$60",
    views: "30",
    type: "||",
    earning: "$360",
  },
  ,
  {
    id: 4,
    img: <img alt="abc" src="../images/headphone.png" />,
    picname: "Default Picture",
    date: "Apr 16, 2022",
    status: (
      <p
        style={{
          padding: ".3rem",
          color: "#42B00F",
          backgroundColor: "#DEF5D3",
        }}
      >
        Online
      </p>
    ),
    discount: "50%",
    stock: (
      <p
        style={{
          padding: ".3rem",
          color: "#42B00F",
          backgroundColor: "#DEF5D3",
        }}
      >
        In Stock
      </p>
    ),
    price: "$60",
    views: "30",
    type: "||",
    earning: "$360",
  },
];

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Active{" "}
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Expired{" "}
      </a>
    ),
  },
];
const { Search } = Input;

const onSearch = (value) => console.log(value);

function ProductsTable() {
  return (
    <div>
      <div className={Styles.twobtndss}>
        <div className={Styles.threetxt}>
          <p>All(3)</p>
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
              Select Category
              <DownOutlined />
            </Button>
          </Dropdown>
          <img alt="abc" src="../images/calendarblack.png" />
          <p>
            70
            <sup>
              <img alt="abc" src="../images/Ellipse 192.png" />
            </sup>
          </p>
        </div>
        <div>
          <Space direction="vertical">
            <Search
              placeholder="Search"
              onSearch={onSearch}
              style={{
                width: 200,
              }}
              className={Styles.abc}
            />
          </Space>
        </div>
      </div>
      <div>
        <DataTable
          className={Styles.datatbl}
          columns={columns}
          data={data}
          selectableRows
        />{" "}
      </div>
    </div>
  );
}
export default ProductsTable;
