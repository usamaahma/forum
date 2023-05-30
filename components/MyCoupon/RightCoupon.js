import React from "react";
import Styles from "../../styles/rightcoupon.module.css";
import { DownOutlined } from "@ant-design/icons";
import { Input, Space, Button, Dropdown } from "antd";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
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
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
export default RightCoupon;
