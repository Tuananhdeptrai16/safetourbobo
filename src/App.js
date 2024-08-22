import { useState, useEffect } from "react";
import React from "react";
import Header from "./layouts/header/header";
import Footer from "./layouts/footer/footer";
import AppRoutes from "./routes/routes";
import { useLocation } from "react-router-dom";

function App() {
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const validPaths = ["/", "/about", "/destinations", "/blog", "/contact"];
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
