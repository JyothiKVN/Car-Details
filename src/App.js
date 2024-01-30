// Styles
import "./styles.css";
// Libraries
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as all from "./cardetails.json";
// Pages
import HomeComponent from "./pages/home";
import ServicesComponent from "./pages/services";
import GalleryComponent from "./pages/gallery";
import ContactusComponent from "./pages/contactus";
// Components
import NavigationComponent from "./components/navigation";

export default function App() {
  const [data, setData] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <NavigationComponent />
        <Routes>
          <Route
            path="/"
            element={<HomeComponent data={data} setData={setData} />}
          />
          <Route
            path="/filter"
            element={<ServicesComponent allCarDetails={data} />}
          />
          <Route path="/gallery" element={<GalleryComponent />} />
          <Route path="/contact" element={<ContactusComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
