import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToAnchor from "./ScrollToAnchor.tsx";

import "./index.css";
import Home from "./pages/home/home";
import FormPage from "./pages/form.tsx";
import ProductsPage from "./pages/product/ProductsPage.tsx";
import ProductsDetailsPage from "./pages/product/ProductsDetailPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductsDetailsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
