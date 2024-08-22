import React from "react";
import { DownOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";

// Định nghĩa các mục menu cho từng dropdown
const menuItems1 = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
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
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

const menuItems2 = [
  {
    key: "1",
    label: "Another menu item 1",
  },
  {
    key: "2",
    label: "Another menu item 2",
  },
];

const menuItems3 = [
  {
    key: "1",
    label: "User Profile",
    icon: <UserOutlined />,
  },
  {
    key: "2",
    label: "Settings",
  },
  {
    key: "3",
    label: "Logout",
  },
];

// Component chính với ba dropdown
const MultiDropdowns = () => (
  <div className="hero__search">
    <div className="hero__search-list">
      <div className="hero__search--item">
        <p className="hero__search-title">Location</p>
        <Dropdown menu={<Menu items={menuItems1} />}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Location
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div className="hero__search--item">
        <p className="hero__search-title">City</p>
        <Dropdown menu={<Menu items={menuItems2} />}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              City
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div className="hero__search--item">
        <p className="hero__search-title">City</p>
        <Dropdown menu={<Menu items={menuItems3} />}>
          <button onClick={(e) => e.preventDefault()}>
            <Space>
              Guest
              <DownOutlined />
            </Space>
          </button>
        </Dropdown>
      </div>
    </div>
  </div>
);

export default MultiDropdowns;
