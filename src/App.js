import { useState, useEffect } from "react";
import React from "react";
import Header from "./layouts/header/header";
import Footer from "./layouts/footer/footer";
import AppRoutes from "./routes/routes";
import { useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const validPaths = [
      "/safetourbobo",
      "/safetourbobo/",
      "/safetourbobo/about",
      "/safetourbobo/destinations",
      "/safetourbobo/destinations/page/1",
      "/safetourbobo/destinations/page/2",
      "/safetourbobo/blog/page/2",
      "/safetourbobo/blog/content/1",
      "/safetourbobo/blog",
      "/safetourbobo/contact",
      "/safetourbobo/tour",
    ];
    if (validPaths.includes(location.pathname)) {
      setShowHeaderFooter(true);
    } else {
      setShowHeaderFooter(false);
    }
  }, [location]);
  return (
    <div>
      {showHeaderFooter && <Header />}
      <AppRoutes />
      {showHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
