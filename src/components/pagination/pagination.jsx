import React from "react";
import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";

const PageNumber = () => {
  const navigate = useNavigate();

  const onChangePage = (page) => {
    navigate(`/safetourbobo/destinations/page/${page}`);
  };

  return <Pagination defaultCurrent={1} total={50} onChange={onChangePage} />;
};

export default PageNumber;
