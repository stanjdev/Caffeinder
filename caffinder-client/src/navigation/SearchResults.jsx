import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CoffeeShopLink from '../components/CoffeeShopLink';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoic3Rhbi1kZXYiLCJhIjoiY2tlYm9leWpjMGFpMjJ0cndybWdpbmVwMSJ9.I0CXw1DFG7WYKgyVm7x07A';

export default function SearchResults({ route, navigation }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const currentMarkers = useRef([]);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      attributionControl: false,
      center: [lng, lat],
      zoom: zoom
    });
    // map.current.on('load', () => {
    //   map.current.resize();
    // });
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
    // console.log('longitude', lng);
    // console.log('latitude', lat);
    // console.log('zoom', zoom);
  });
  

  const updateMarkers = useCallback(() => {
    const geojson = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-77.032, 38.913]
          },
          properties: {
            title: 'Mapbox',
            description: 'Washington, D.C.'
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-122.414, 37.776]
          },
          properties: {
            title: 'Mapbox',
            description: 'San Francisco, California'
          }
        }
      ]
    };

    for (const feature of geojson.features) {
      const el = (
        <div className={styles.marker}>
          <p>I am a marker</p>
        </div>
      );
      // const el = document.createElement('div');
      // el.className = 'marker';
      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map.current);
    }
  }, [])

  return(
    <>
      <div style={styles.mapContainer}>
        <div ref={mapContainer} className="map-container" />
      </div>

      <div style={styles.resultsContainer}>
        <CoffeeShopLink id={1254}/>
        <CoffeeShopLink id={2314}/>
        <CoffeeShopLink id={5432}/>
        <CoffeeShopLink id={6432}/>
      </div>
    </>
  )
};

const styles = {
  mapContainer: {
    border: 'solid 1px orange',
    maxHeight: '40vh',
    // height: '400px',
  },
  resultsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  marker: {
    backgroundImage: "url('mapbox-icon.png')",
    backgroundSize: 'cover',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    cursor: 'pointer',
  }
};
