import { useState, useEffect } from "react";
import { filterBasedOnQuery } from "../utils/utils";
// import * as allCarDetails from "../cardetails.json";
import { useSelector, useDispatch } from "react-redux";

function ServicesComponent(props: CARDETAILS) {
  // const { allCarDetails } = props;
  const allCarDetails = useSelector((state) => state.allCarDetails);
  const [filterList, setFilterList] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});

  let allLocations,
    transmissionTypes,
    fuelType,
    budget,
    owners,
    brand,
    externalFitments;

  const [filteredBrands, setFilteredBrands] = useState([]);
  const [filteredOwners, setFilteredOwners] = useState([]);
  const [filteredBudget, setFilteredBudget] = useState([]);
  const [filteredLocation, setFilteredLocation] = useState([]);
  const [filteredTransmision, setFilteredTransmision] = useState([]);
  const [filteredFuelType, setFilteredFuelType] = useState([]);
  const [filteredBodyType, setFilteredBodyType] = useState([]);
  useEffect(() => {
    console.log("data", allCarDetails);
    allLocations = allCarDetails?.map((alllocation) => {
      return alllocation.location;
    });
    transmissionTypes = allCarDetails?.map((alllocation) => {
      return alllocation.transmission;
    });
    fuelType = allCarDetails?.map((alllocation) => {
      return alllocation.fuelType;
    });
    budget = allCarDetails?.map((alllocation) => {
      return alllocation.budget;
    });
    owners = allCarDetails?.map((alllocation) => {
      return alllocation.noOfOwners;
    });
    brand = allCarDetails?.map((alllocation) => {
      return alllocation.brand;
    });
    externalFitments = allCarDetails?.map((alllocation) => {
      return alllocation.externalFitments;
    });
    setFilteredLocation([...new Set(allLocations)]);
    setFilteredTransmision([...new Set(transmissionTypes)]);
    setFilteredFuelType([...new Set(fuelType)]);
    setFilteredBudget([...new Set(budget)]);
    setFilteredOwners([...new Set(owners)]);
    setFilteredBrands([...new Set(brand)]);
    setFilteredBodyType([...new Set(externalFitments)]);
  }, [allCarDetails]);

  return (
    <div>
      <h2>Services/Filter</h2>
      <div style={{ display: "flex" }}>
        <table>
          <tbody>
            <tr>
              <td>Location</td>
              <td>
                <select
                  onChange={(event) => {
                    console.log(filterList);
                    const options = { ...filterOptions };
                    options["location"] = event.target.value;
                    setFilterOptions(options);
                    setFilterList(filterBasedOnQuery(options, allCarDetails));
                  }}
                >
                  <option>--Select--</option>
                  {filteredLocation?.map((location) => {
                    return (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    );
                  })}
                </select>
              </td>
            </tr>
            <tr>
              <td> &nbsp;</td>
            </tr>
            <tr>
              <td>Body Type</td>
              <td>
                {filteredBodyType?.map((externalFitments) => {
                  return (
                    <div>
                      <input
                        type="checkbox"
                        value={externalFitments}
                        checked={
                          externalFitments === filterOptions.externalFitments
                        }
                        onChange={(event) => {
                          if (event.target.checked) {
                            console.log("filter list ", filterList);
                            const options = { ...filterOptions };
                            options["externalFitments"] = event.target.checked
                              ? event.target.value
                              : null;
                            setFilterOptions(options);
                            setFilterList(
                              filterBasedOnQuery(options, allCarDetails)
                            );
                          }
                        }}
                      />
                      {externalFitments}
                    </div>
                  );
                })}
              </td>
            </tr>
            <tr>
              <td> &nbsp;</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>
                {filteredBrands?.map((brand) => {
                  return (
                    <div>
                      <input
                        type="checkbox"
                        value={brand}
                        checked={brand === filterOptions.brand}
                        onChange={(event) => {
                          if (event.target.checked) {
                            const options = { ...filterOptions };
                            options["brand"] = event.target.value;
                            setFilterOptions(options);
                            setFilterList(
                              filterBasedOnQuery(options, allCarDetails)
                            );
                          }
                        }}
                      />
                      {brand}
                    </div>
                  );
                })}
              </td>
            </tr>
            <tr>
              <td> &nbsp;</td>
            </tr>
            <tr>
              <td>Owners</td>
              <td>
                {filteredOwners?.map((owners) => {
                  return (
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          value={owners}
                          name="owner"
                          onChange={(event) => {
                            console.log(filterList);
                            const options = { ...filterOptions };
                            options["noOfOwners"] = event.target.value;
                            setFilterOptions(options);
                            setFilterList(
                              filterBasedOnQuery(options, allCarDetails)
                            );
                          }}
                        />
                        {owners} owner
                      </label>
                    </div>
                  );
                })}
              </td>
            </tr>
            <tr>
              <td> &nbsp;</td>
            </tr>
            <tr>
              <td>Budget</td>
              <td>
                {filteredBudget?.map((budget) => {
                  return (
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          value={budget}
                          name="Budget"
                          onChange={(event) => {
                            console.log(filterList);
                            const options = { ...filterOptions };
                            options["budget"] = event.target.value;
                            setFilterOptions(options);
                            setFilterList(
                              filterBasedOnQuery(options, allCarDetails)
                            );
                          }}
                        />
                        {budget} L
                      </label>
                    </div>
                  );
                })}
              </td>
            </tr>
            <tr>
              <td> &nbsp;</td>
            </tr>
            <tr>
              <td>Fuel Type</td>
              <td>
                {filteredFuelType?.map((fuelType) => {
                  return (
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          value={fuelType}
                          name="FuelType"
                          onChange={(event) => {
                            console.log(filterList);
                            const options = { ...filterOptions };
                            options["fuelType"] = event.target.value;
                            setFilterOptions(options);
                            setFilterList(
                              filterBasedOnQuery(options, allCarDetails)
                            );
                          }}
                        />
                        {fuelType}
                      </label>
                    </div>
                  );
                })}
              </td>
            </tr>
            <tr>
              <td> &nbsp;</td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td>
                {filteredTransmision?.map((transmission) => {
                  return (
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="transmission"
                          value={transmission}
                          onChange={(event) => {
                            console.log(filterList);
                            const options = { ...filterOptions };
                            options["transmission"] = event.target.value;
                            setFilterOptions(options);
                            setFilterList(
                              filterBasedOnQuery(options, allCarDetails)
                            );
                          }}
                        />
                        {transmission}
                      </label>
                    </div>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          {filterList.length > 0 ? <b>Car Search Retulsts</b> : ""}
          {filterList?.map((item, index) => {
            return (
              <div>
                <p>{item.model}</p>
                <img
                  src={URL.createObjectURL(item.photo)}
                  alt="Photo"
                  style={{ width: 100 }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServicesComponent;
