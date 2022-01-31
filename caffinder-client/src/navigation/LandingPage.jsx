import React from 'react';
import logo from '../logo.svg';
import Button from '../components/Button';

export default function LandingPage() {
  return (
    <>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Caffinder
        </h1>
        <Button customWidth={'70vw'} customText={'Use Current Location'}/>
        <div style={{marginTop: 20}} >
          <input 
            placeholder='Enter Address'
            style={{ padding: 20, borderRadius: 10, width: '44vw', textAlign: 'center', }} 
          />
          <Button onClick={() => console.log('test press')} customWidth={'17vw'} customText={'Search'} color={'black'} textColor={'white'} />
        </div>
      </header>
    </div>
    </>
  );
};



