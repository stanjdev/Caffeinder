import React, { useState, useEffect, useRef } from "react";
import caffinderLogo from "../assets/coffee-cup.png";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const [currentLocation, setCurrentLocation] = useState("Austin, Texas");
  const address = useRef();
  const navigate = useNavigate();
  const [loadingMessage, setLoadingMessage] = useState();

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { longitude, latitude } = position.coords;
      // console.log(longitude, latitude);
      setCurrentLocation([longitude, latitude]);
      fetchAndNavigate([longitude, latitude]);
    });
    displayLoadingMessage();
  };

  const searchAddress = () => {
    address.current.value = "";
    fetchAndNavigate(currentLocation);
    displayLoadingMessage();
  };

  const inputChange = (evt) => {
    setCurrentLocation(evt.target.value.trim());
  };

  const keyPressEnterSearch = (evt) => {
    if (currentLocation && evt.key === "Enter") {
      searchAddress();
    }
  };

  const fetchAndNavigate = (location) => {
    if (currentLocation !== "") {
      // console.log(location, 'to the next page!')
      navigate(`search_results/${location}`, { query: location });
    } else {
      console.log("no empty query allowed");
    }
  };

  const displayLoadingMessage = () => {
    setLoadingMessage(<p style={{ color: "lightgreen" }}>Searching...</p>);
  };

  return (
    <>
      <div className="pure-g tx-c">
        <div className="pure-u-sm-3-5 df-c-c">
          <img src={caffinderLogo} className="logo-main" alt="logo" />
          <h1 className="name">CAFFINDER</h1>
          <p className="sub-heading">Satisfy your coffee cravings!</p>
          <Button
            onClick={getCurrentLocation}
            customWidth={"70vw"}
            customText={"Use Current Location"}
          />
          <div style={{ marginTop: 20 }}>
            <form className="pure-form">
              <input
                className="address-input"
                onKeyDown={keyPressEnterSearch}
                onChange={inputChange}
                ref={address}
                placeholder="Enter Address"
              />
              <Button
                onClick={searchAddress}
                customWidth={"17vw"}
                customText={"Search"}
                color={"black"}
                textColor={"white"}
              />
            </form>
          </div>
          {/* <Link to={`/search_results/${currentLocation}`}>Search Results</Link> */}
        </div>
      </div>
    </>
  );
}
