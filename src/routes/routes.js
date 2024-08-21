// AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import { About } from "../pages/about/about";
import { Destination } from "../pages/destinations/destination";
import { Blog } from "../pages/blog/blog";
import Contact from "../pages/contacts/contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/destinations" element={<Destination />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
