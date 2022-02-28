import React, { useState, useEffect } from "react";
import caffinderLogo from "../assets/caffinder-logo.png";
import Button from "./Button";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function CoffeeShop() {
  let navigate = useNavigate();
  const { id, name } = useParams();
  const location = useLocation();
  const all_data = location.state?.all_data;

  const [reviews, setReviews] = useState([]);

  let url_link = "http://localhost:1111/api/yelp/reviews";

  useEffect(() => {
    axios
      .post(url_link, {
        all_data,
      })
      .then((response) => {
        console.log("response", response.data);
        setReviews(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    console.log("reviews set", reviews);
  }, [reviews]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <button onClick={() => navigate(-1)}>Go Back</button>
          <a href={all_data.url} target="_blank" rel="noreferrer noopener">
            <img src={all_data.image_url} className="App-logo" alt="logo" />
          </a>
          <h1>{all_data.name}</h1>
          <p>Rating: {all_data.rating}</p>
          <a
            href={`http://maps.google.com/?q=${all_data.location.address1} ${all_data.location.city}, ${all_data.location.state} ${all_data.location.zip_code}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <small>{all_data.location.address1}</small>
            <br></br>
            <small>
              {all_data.location.city}, {all_data.location.state}{" "}
              {all_data.location.zip_code}
            </small>
          </a>
          <small>{all_data.phone}</small>
          <p>id: {id}</p>
          <div style={{ marginTop: 20 }}>
            <div style={styles.businessInfoBox}>
              <p>Wifi?</p>
              <p>Yes</p>
            </div>
          </div>
          {reviews.map((review) => {
            return (
              <div key={review.id}>
                <p>{review.rating}</p>
                <p>{review.user.name}</p>
                <p>{review.time_created}</p>
                <p>{review.text}</p>
              </div>
            );
          })}
        </header>
      </div>
    </>
  );
}

const styles = {
  businessInfoBox: {
    border: "solid orange 1px",
    width: "70vw",
    padding: "0 20px",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "start",
  },
};
