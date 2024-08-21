// App.js
import React from "react";
import Header from "./layouts/header/header";
import Footer from "./layouts/footer/footer";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <div>
      <Header />
      <AppRoutes></AppRoutes>
      <Footer />
    </div>
  );
}

export default App;
