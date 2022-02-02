import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CoffeeShopLink from '../components/CoffeeShopLink';

export default function SearchResults({ route, navigation }) {

  return(
    <>
      <div style={styles.mapContainer}>
        <h1>MAP GOES HERE</h1>
      </div>

      <div style={styles.resultsContainer}>
        <CoffeeShopLink id={1254}/>
        <CoffeeShopLink id={2314}/>
      </div>
    </>
  )
};

const styles = {
  mapContainer: {
    border: 'solid 1px orange',
    minHeight: '40vh',
  },
  resultsContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
};
