import React, { useState } from "react";
import Styles from "../../styles/rightcoupon.module.css";
import { DownOutlined, CheckOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Dropdown, Row } from "antd";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Order",
    selector: (row) => row.order,
  },
  {
    name: "Order Total",
    selector: (row) => row.ordertot,
  },
  {
    name: "Earning",
    selector: (row) => row.earning,
  },
  {
    name: "Status",
    selector: (row) => row.status,
  },
  {
    name: "Customer",
    selector: (row) => row.customer,
  },
  {
    name: "Date",
    selector: (row) => row.date,
  },
  {
    name: "Action",
    selector: (row) => row.action,
    style: {
      display: "flex",
      textAlign: "left",
    },
  },
];

const data = [
  {
    id: 1,
    order: "3210",
    ordertot: "$30",
    earning: "$30",
    status: (
      <p
        style={{
          padding: ".3rem",
          color: "#007799",
          backgroundColor: "#C6F2FF",
        }}
      >
        Processing
      </p>
    ),
    customer: "Firoz Efat",

    date: "Oct 12,12",
    action: (
      <div style={{ display: "flex" }}>
        <Button
          style={{
            width: ".3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CheckOutlined />
        </Button>
        <Button
          style={{
            width: ".3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EyeOutlined />
        </Button>
        <Button
          style={{
            width: ".3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img alt="abc" src="../images/locationone.png" />
        </Button>
      </div>
    ),
  },
  {
    id: 2,
    order: "3210",
    ordertot: "$30",
    earning: "$30",
    status: (
      <p
        style={{
          padding: ".3rem",
          color: "#42B00F",
          backgroundColor: "#DEF5D3",
        }}
      >
        completed
      </p>
    ),
    customer: "Firoz Efat",

    date: "Oct 12,12",
    action: (
      <div style={{ display: "flex" }}>
        <Button
          style={{
            width: ".3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CheckOutlined />
        </Button>
        <Button
          style={{
            width: ".3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EyeOutlined />
        </Button>
        <Button
          style={{
            width: ".3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img alt="abc" src="../images/locationone.png" />
        </Button>
      </div>
    ),
  },
  {
    id: 3,
    order: "3210",
    ordertot: "$30",
    earning: "$30",
    status: (
      <p
        style={{
          padding: ".3rem",
          color: "#42B00F",
          backgroundColor: "#DEF5D3",
        }}
      >
        completed
      </p>
    ),
    customer: "Firoz Efat",

    date: "Oct 12,12",
    action: (
      <div style={{ display: "flex" }}>
        <Button
          style={{
            width: ".3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CheckOutlined />
        </Button>
        <Button
          style={{
            width: ".3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EyeOutlined />
        </Button>
        <Button
          style={{
            width: ".3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img alt="abc" src="../images/locationone.png" />
        </Button>
      </div>
    ),
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
const itemss = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Completed(3)
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
        Processing(3)
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        On Hold(3)
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Pending(3)
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Cancelled(3)
      </a>
    ),
  },
  {
    key: "6",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Refunded(3)
      </a>
    ),
  },
  {
    key: "7",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Failded(3)
      </a>
    ),
  },
];

function OrderTable() {
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
              <div
                style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
              >
                Registered Customer
                <DownOutlined />
              </div>
            </Button>
          </Dropdown>
          <Dropdown
            menu={
              <div>
                {itemss.map((item) => (
                  <div key={item.key}>{item.label}</div>
                ))}
              </div>
            }
            placement="bottomLeft"
            arrow={{
              pointAtCenter: true,
            }}
          >
            <Button>
              <div>
                All Activities <DownOutlined />
              </div>
            </Button>
          </Dropdown>

          <img className={Styles.imgw} alt="abc" src="../images/calendarblack.png" />
        </div>
        <div className={Styles.threetxt}>
          <p>Export All</p>
          <p>Export Filtered</p>
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
export default OrderTable;
