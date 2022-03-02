import businesses from "../mockdata/businesses.json";
import businesses_id from "../mockdata/businesses_id.json";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CoffeeShopLink from "../components/CoffeeShopLink";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "./SearchResults.css";
const axios = require("axios").default;

const API_KEY = process.env.REACT_APP_MAPBOXGL_ACCESSTOKEN;

export default function SearchResults({ route, navigation }) {
  const { query } = useParams();

  let location = query.split(",").map((coord) => Number(coord));
  if (isNaN(location[0])) {
    location = query;
  }

  const [map, setMap] = useState();

  const [lng, setLng] = useState(-100.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(3);
  const currentMarkers = useRef([]);
  const [stateMarkers, setStateMarkers] = useState([]);
  const [foundCoffeeShops, setFoundCoffeeShops] = useState([]);
  const [coffeeShopMarkers, setCoffeeShopMarkers] = useState([]);

  const yelpSearch = (location) => {
    axios
      .post(`http://localhost:1111/api/yelp/businesses`, {
        term: "coffee",
        location: location,
        limit: 12, // 12 businesses
        radius: 16100, // 10 miles
      })
      .then(function (response) {
        setFoundCoffeeShops(response.data);
      })
      .then(function (json) {
        if (json.businesses) {
          return json.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              url: business.url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0]
                ? business.categories[0].title
                : null,
              rating: business.rating,
              reviewCount: business.review_count,
              coordinates: business.coordinates,
            };
          });
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const renderMap = useCallback(() => {
    loadScript("https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js");
    window.initMap = initMap;
    window.initMap();
  }, []);

  useEffect(() => {
    renderMap();
  }, [renderMap]);

  const initMap = () => {
    mapboxgl.accessToken = API_KEY;
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      attributionControl: false,
      center: [lng, lat],
      zoom: zoom,
    });

    map.on("load", () => {
      setMap(map);
      map.resize();
    });
  };

  useEffect(() => {
    if (!map) return; // wait for map to initialize
    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
  });

  useEffect(() => {
    // FROM REAL YELP SEARCH
    yelpSearch(location);
    setCoffeeShopMarkers(
      foundCoffeeShops.map((coffeeShop) => {
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [
              coffeeShop.coordinates.longitude,
              coffeeShop.coordinates.latitude,
            ],
          },
          properties: {
            title: coffeeShop.name,
            address: coffeeShop.address,
            city: coffeeShop.city,
            category: coffeeShop.category,
            url: coffeeShop.url,
            id: coffeeShop.id,
          },
        };
      })
    );

    // FAKE INCOMING FOUND COFFEE SHOPS DATA
    setCoffeeShopMarkers([
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-77.032, 38.913],
        },
        properties: {
          title: "Mapbox",
          description: "Washington, D.C.",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-122.414, 37.776],
        },
        properties: {
          title: "Mapbox",
          description: "San Francisco, California",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-97.7431, 30.2672],
        },
        properties: {
          title: `Searched for: ${query}`,
          description: query,
        },
      },
    ]);
  }, []);

  const updateMarkers = useCallback(() => {
    const geojson = {
      type: "FeatureCollection",
      features: coffeeShopMarkers,
    };

    if (currentMarkers.current.length > 20) {
      currentMarkers.current.forEach((marker) => marker.remove());
      currentMarkers.current = [];
    }

    for (const marker of geojson.features) {
      let el = document.createElement("div");
      el.className = "marker";
      let myMarker = new mapboxgl.Marker(el);
      myMarker
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3>${marker.properties.title}</h3><p>${marker.properties.description}</p>`
          )
        )
        .addTo(map);
      currentMarkers.current.push(myMarker);
      setStateMarkers([currentMarkers.current]);

      el.addEventListener("click", function (evt) {
        flyToSpot(marker);
      });
    }
  });

  function flyToArea(currentArea) {
    map.flyTo({
      center: currentArea.geometry.coordinates,
      zoom: 10,
    });
  }

  function flyToSpot(currentMarker) {
    map.flyTo({
      center: currentMarker.geometry.coordinates,
      zoom: 14,
    });
  }

  useEffect(() => {
    updateMarkers();
  }, [coffeeShopMarkers]);

  const coffeeShopLinks = foundCoffeeShops.map((shop) => {
    const subHeading = shop.categories[0].title;
    const { id, name, image_url } = shop;
    return (
      <CoffeeShopLink
        key={id}
        id={id}
        name={name}
        subHeading={subHeading}
        image={image_url}
        all_data={shop}
      />
    );
  });

  return (
    <>
      <div className="map-container">
        <div id="map" className="map-content" />
      </div>

      <div style={styles.resultsContainer}>
        {/* Query GET /reviews once they click the coffee shop. 
        Make API call once this is mounted */}
        {coffeeShopLinks}
      </div>
    </>
  );
}

const styles = {
  mapContainer: {
    border: "solid 1px orange",
    // maxHeight: '40vh',
    // height: '400px',
  },
  resultsContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  marker: {
    backgroundImage: "url('map-marker.png')",
    backgroundSize: "cover",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    cursor: "pointer",
  },
};

// Loads the MapBox API script
function loadScript(url) {
  const index = window.document.getElementsByTagName("script")[0];
  const script = window.document.createElement("script");
  script.src = url;
  index.parentNode.insertBefore(script, index);
}
