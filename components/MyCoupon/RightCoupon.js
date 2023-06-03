import React from "react";
import Styles from "../../styles/rightcoupon.module.css";
import { DownOutlined, DeleteOutlined } from "@ant-design/icons";
import { Input, Space, Button, Dropdown } from "antd";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Code",
    selector: (row) => row.code,
  },
  {
    name: "Amount",
    selector: (row) => row.amount,
  },
  {
    name: "Status",
    selector: (row) => row.status,
  },
  {
    name: "Product",
    selector: (row) => row.product,
  },
  {
    name: "Action",
    selector: (row) => row.action,
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
    action: <DeleteOutlined />,
  },
  {
    id: 2,
    name: "Black Friday",
    code: "Black Friday",
    amount: "50%",
    status: "Expired",
    product: "All Products",
    action: <DeleteOutlined />,
  },
  {
    id: 3,
    name: "Black Friday",
    code: "Black Friday",
    amount: "50%",
    status: "Expired",
    product: "All Products",
    action: <DeleteOutlined />,
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

function RightCoupon() {
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
        <div>
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
    </div>
  );
}
export default RightCoupon;
