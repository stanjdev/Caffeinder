import React from 'react';
import CoffeeShop from '../components/CoffeeShop';

export default function ActiveView() {
  return(
    <>
      <div>
        <h1>MAP</h1>
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{ border: 'solid 1px black', borderRadius: 7, width: '40%' }}>
          <h2>Coffee Shop</h2>
          <img src='' alt='placeholder img'/>
          <p>caption, subheading</p>
        </div>
        <div style={{ border: 'solid 1px black', borderRadius: 7, width: '40%' }}>
          <h2>Coffee Shop</h2>
          <img src='' alt='placeholder img'/>
          <p>caption, subheading</p>
        </div>
      </div>

      {/* <CoffeeShop /> */}

    </>
  )
};
