import React from 'react';
import caffinderLogo from '../assets/caffinder-logo.png';
import Button from './Button';
import { useParams, useNavigate } from 'react-router-dom';

export default function CoffeeShop() {
  const { id } = useParams();
  // https://ui.dev/react-router-url-parameters/
  let navigate = useNavigate();

  return (
    <>
      <div className="App">
      <header className="App-header">
        <button onClick={() => navigate(-1)}>Go Back</button>
        <img src={caffinderLogo} className="App-logo" alt="logo" />
        <h1>Java Stop</h1>
        <p>{id}</p>
        <p>Stars, address here</p>
        <div style={{ marginTop: 20 }} >
          <div style={ styles.businessInfoBox }>
            <p>Wifi?</p>
            <p>Yes</p>
          </div>
          <div style={ styles.businessInfoBox }>
            <p>Student friendly?</p>
            <p>Yes</p>
          </div>
        </div>
      </header>
    </div>
    </>
  );
};

const styles = {
  businessInfoBox: {
    border: 'solid orange 1px', 
    width: '70vw', 
    padding: '0 20px', 
    borderRadius: 20, 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-evenly', 
    alignItems: 'start'
  },
};


