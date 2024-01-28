// Styles
import "./styles.css";
// Libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import HomeComponent from "./pages/home";
import ServicesComponent from "./pages/services";
import GalleryComponent from "./pages/gallery";
import ContactusComponent from "./pages/contactus";
// Components
import NavigationComponent from "./components/navigation";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/filter" element={<ServicesComponent />} />
          <Route path="/gallery" element={<GalleryComponent />} />
          <Route path="/contact" element={<ContactusComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const jsonschema = {
  model: "Maruthi Suzuki",
  color: "Grey",
  yearofmanufacutre: "2022",
  insturancevalid: "2025",
  kmsran: "2356",
  location: "Chennai",
  owners: "1",
  transmission: "Manual",
  bodytype: "SUV",
  budget: "4Lacs",
  photo: "",
  fueltype: "Petrol",
};
