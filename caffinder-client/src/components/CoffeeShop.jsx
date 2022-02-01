import React from 'react';
import caffinderLogo from '../assets/caffinder-logo.png';
import Button from './Button';

export default function CoffeeShop() {
  return (
    <>
      <div className="App">
      <header className="App-header">
        <img src={caffinderLogo} className="App-logo" alt="logo" />
        <h1>Java Stop</h1>
        <p>Stars, address here</p>
        <div style={{ marginTop: 20 }} >
          <div style={{ border: 'solid orange 1px', width: '70vw', padding: '0 20px', borderRadius: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'start' }}>
            <p>Wifi?</p>
            <p>Yes</p>
          </div>
        </div>
      </header>
    </div>
    </>
  );
};



