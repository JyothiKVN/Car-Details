import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { imageUrls } from "../utils/constants";
import CarCardComponent from "../components/carcard";
import AddCarDetailsComponent from "../components/addcardetails";

var allCarDetails = [];

function HomeComponent(props: any) {
  const dispatch = useDispatch();
  const [showAddCarDet, setShowAddCarDet] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  const closeAddForm = (carDetails) => {
    allCarDetails.push(carDetails);
    dispatch({ type: "UPDATE", payload: carDetails });
    props.setData([...props.data, carDetails]);
    setShowAddCarDet(false);
  };

  return (
    <div>
      <div style={{ background: "#ccc" }}>
        {imageUrls.map((item) => {
          return (
            <div
              className="home-carcard"
              key={item.name}
              onClick={() => {
                setShowAddCarDet(true);
                setSelectedModel(item.name);
              }}
            >
              <CarCardComponent name={item.name} url={item.url} />
            </div>
          );
        })}
      </div>
      {showAddCarDet && (
        <AddCarDetailsComponent
          closeAddForm={closeAddForm}
          selectedModel={selectedModel}
        />
      )}
    </div>
  );
}

export default HomeComponent;
