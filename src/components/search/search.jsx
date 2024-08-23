import React from "react";
import { DownOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

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
        <div className="hero__item">
          <Dropdown menu={{ items: menuItems1 }}>
            <button onClick={(e) => e.preventDefault()}>
              <Space>
                Bali, Indonesia
                <DownOutlined />
              </Space>
            </button>
          </Dropdown>
        </div>
      </div>
      <div className="hero__search--item">
        <p className="hero__search-title">City</p>
        <div className="hero__item">
          <Dropdown menu={{ items: menuItems2 }}>
            <button onClick={(e) => e.preventDefault()}>
              <Space>
                Prambanan
                <DownOutlined />
              </Space>
            </button>
          </Dropdown>
        </div>
      </div>
      <div className="hero__search--item">
        <p className="hero__search-title">Guest</p>
        <div className="hero__item">
          <Dropdown menu={{ items: menuItems3 }}>
            <button onClick={(e) => e.preventDefault()}>
              <Space>
                8 Persons
                <DownOutlined />
              </Space>
            </button>
          </Dropdown>
        </div>
      </div>
    </div>
    <div className="hero__search-btn">
      <button className="btn hero__search-btn--button">
        <img src="./images/icon/search.svg" alt="search" />
        Search
      </button>
    </div>
  </div>
);

export default MultiDropdowns;
