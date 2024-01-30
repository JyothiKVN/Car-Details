import { useState } from "react";

function AddCarDetailsComponent(props: any) {
  const [addCarDetails, setAddCarDetails] = useState({
    model: props.selectedModel,
  });

  const update = (key: string, value: string) => {
    const carobj = { ...addCarDetails };
    carobj[key] = value;
    setAddCarDetails(carobj);
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h2>Add Car Details</h2>
      <table>
        <tbody>
          <tr>
            <td>Model</td>
            <td>
              <input disabled type="text" value={props.selectedModel} />
            </td>
          </tr>
          <tr>
            <td>Color</td>
            <td>
              <input
                onInput={(event) => {
                  update("color", event.target.value);
                }}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td>Year of Manufacutre</td>
            <td>
              <input
                onInput={(event) => {
                  update("yearOfManufacture", event.target.value);
                }}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td>Insturance valid upto</td>
            <td>
              <input
                onInput={(event) => {
                  update("insuranceValidUpTo", event.target.value);
                }}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td>Kms</td>
            <td>
              <input
                onInput={(event) => {
                  update("kms", event.target.value);
                }}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td>Location</td>
            <td>
              <input
                onInput={(event) => {
                  update("location", event.target.value);
                }}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td>Brand</td>
            <td>
              <input
                onInput={(event) => {
                  update("brand", event.target.value);
                }}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td>No of owners</td>
            <td>
              <input
                onInput={(event) => {
                  update("noOfOwners", event.target.value);
                }}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td>Transmission</td>
            <td>
              <input
                onInput={(event) => {
                  update("transmission", event.target.value);
                }}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td>External Fitments</td>
            <td>
              <input
                onInput={(event) => {
                  update("externalFitments", event.target.value);
                }}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td>Budget</td>
            <td>
              <input
                onInput={(event) => {
                  update("budget", event.target.value);
                }}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td>Photo</td>
            <td>
              <input
                onInput={(event) => {
                  update("photo", event.target.files[0]);
                  console.log(event.target.files[0]);
                }}
                type="file"
              />
            </td>
          </tr>
          <tr>
            <td>Fuel Type</td>
            <td>
              <input
                onInput={(event) => {
                  update("fuelType", event.target.value);
                }}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="2" style={{ textAlign: "center" }}>
              <button
                onClick={() => {
                  props.closeAddForm(addCarDetails);
                }}
              >
                Submit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AddCarDetailsComponent;
