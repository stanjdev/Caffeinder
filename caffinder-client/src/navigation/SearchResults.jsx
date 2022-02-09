import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CoffeeShopLink from '../components/CoffeeShopLink';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './SearchResults.css';

// const API_KEY = process.env.MAPBOXGL_ACCESSTOKEN;
const API_KEY = 'pk.eyJ1Ijoic3Rhbi1kZXYiLCJhIjoiY2tlYm9leWpjMGFpMjJ0cndybWdpbmVwMSJ9.I0CXw1DFG7WYKgyVm7x07A';

mapboxgl.accessToken = API_KEY;

export default function SearchResults({ route, navigation }) {
  const { query } = useParams();
  // const mapContainer = useRef(null);
  // const map = useRef(null);
  const [map, setMap] = useState();

  const [lng, setLng] = useState(-100.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(3);
  const currentMarkers = useRef([]);
  const [stateMarkers, setStateMarkers] = useState([]);
  
  const renderMap = useCallback(() => {
    loadScript('https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js');
    window.initMap = initMap;
    window.initMap();
  }, []);

  useEffect(() => {
    renderMap();
  }, [renderMap])
  
  const initMap = () => {
    mapboxgl.accessToken = API_KEY;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      attributionControl: false,
      center: [lng, lat],
      zoom: zoom
    });

      map.on('load', () => {
        setMap(map);
        map.resize();
      });
    };
  
  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     attributionControl: false,
  //     center: [lng, lat],
  //     zoom: zoom
  //   });
  //   updateMarkers();
  //   // map.current.on('load', () => {
  //   //   map.current.resize();
  //   // });
  // }, []);

  useEffect(() => {
    if (!map) return; // wait for map to initialize
    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
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

    if (currentMarkers.current.length > 20) {
      currentMarkers.current.forEach((marker) => marker.remove());
      currentMarkers.current = [];
    }

    for (const marker of geojson.features) {
      console.log(currentMarkers.current)
      // const el = (
      //   <div className={styles.marker}>
      //   </div>
      // );
      let el = document.createElement('div');
      // el.className = styles.marker;
      el.className = 'marker';
      // make a marker for each feature and add to the map
      let myMarker = new mapboxgl.Marker(el);
      myMarker.setLngLat(marker.geometry.coordinates)
      .addTo(map);
      currentMarkers.current.push(myMarker);
      setStateMarkers([currentMarkers.current]);

      el.addEventListener('click', function(evt) {
        flyToSpot(marker);
      })
    }
  });

  function flyToArea(currentArea) {
    map.flyTo({
      center: currentArea.geometry.coordinates,
      zoom: 10
    });
  };

  function flyToSpot(currentMarker) {
    map.flyTo({
      center: currentMarker.geometry.coordinates,
      zoom: 14
    });
  };


  useEffect(() => {
    console.log(query);
    updateMarkers();
  }, [])


  return(
    <>
      <h2>Coffee shops in {query}</h2>
      <div style={styles.mapContainer}>
        <div id='map' className="map-container" />
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
    // maxHeight: '40vh',
    // height: '400px',
  },
  resultsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  marker: {
    backgroundImage: "url('map-marker.png')",
    backgroundSize: 'cover',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    cursor: 'pointer',
  }
};


// Loads the MapBox API script
function loadScript(url) {
  const index = window.document.getElementsByTagName('script')[0];
  const script = window.document.createElement('script');
  script.src = url;
  index.parentNode.insertBefore(script, index);
}

