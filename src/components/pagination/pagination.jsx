import { Pagination } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const PageNumber = () => {
  const [current, setCurrent] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // Lấy số trang từ URL bằng biểu thức chính quy
    const match = location.pathname.match(/page\/(\d+)/);
    console.log(match);
    if (match) {
      const page = parseInt(match[1], 10);
      if (page !== current) {
        setCurrent(page);
      }
    }
  }, [location, current]);
  const onChangePage = (page) => {
    navigate(`/safetourbobo/destinations/page/${page}`);
  };

  return <Pagination current={current} total={50} onChange={onChangePage} />;
};

export default PageNumber;
