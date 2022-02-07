import React, { useState, useEffect, useRef } from 'react';
import caffinderLogo from '../assets/caffinder-logo.png';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {
  const [ currentLocation, setCurrentLocation ] = useState('California');
  const address = useRef();
  const navigate = useNavigate();

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation(position);
      fetchAndNavigate(currentLocation);
    })
    // THEN, Axios or fetch get request to Yelp API, then carry returned data and navigate over to next page.
    // OR flash alert error message saying unable to get current location, and instructions on how to enable location
    // https://dev.to/codebucks/how-to-get-user-s-location-in-react-js-1691
  };

  const searchAddress = () => {
    console.log(address.current.value);
    setCurrentLocation(address.current.value);
    address.current.value = '';
    // Axios or fetch get request to Yelp API, then carry returned data and navigate over to next page.
    fetchAndNavigate(currentLocation);
  };

  const keyPressEnterSearch = (evt) => {
    if (evt.key === 'Enter') {
      searchAddress()
    }
  };

  const fetchAndNavigate = (location) => {
    console.log(location, 'to the next page!')
    navigate("search_results", {search: location})
  };

  return (
    <>
      <div className="App">
      <header className="App-header">
        <img src={caffinderLogo} className="App-logo" alt="logo" />
        <h1 style={{ fontFamily:'Abril_Fatface' }}>
          caffinder
        </h1>
        <Button onClick={getCurrentLocation} 
          customWidth={'70vw'} customText={'Use Current Location'}/>
        <div style={{marginTop: 20}} >
          <input 
            onKeyDown={(evt) => keyPressEnterSearch(evt)}
            ref={address}
            placeholder='Enter Address'
            style={{ padding: 20, borderRadius: 10, width: '44vw', textAlign: 'center', }} 
          />
          <Button onClick={searchAddress} customWidth={'17vw'} customText={'Search'} color={'black'} textColor={'white'} />
        </div>
        <Link to="/search_results">Search Results</Link>
      </header>
    </div>
    </>
  );
};



