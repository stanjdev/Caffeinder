import React, { useState, useEffect } from "react";
import caffinderLogo from "../assets/caffinder-logo.png";
import Button from "./Button";
import "../components/CoffeeShop.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function CoffeeShop() {
  let navigate = useNavigate();
  const { id, name } = useParams();
  const location = useLocation();
  const all_data = location.state?.all_data;

  const [reviews, setReviews] = useState([]);
  const [shopDetails, setShopDetails] = useState({});
  const [hours, setHours] = useState([]);

  const DAYS_OF_THE_WEEK = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let url_link_details = "http://localhost:1111/api/yelp/details";
  let url_link_reviews = "http://localhost:1111/api/yelp/reviews";

  useEffect(() => {
    axios
      .post(url_link_details, {
        all_data,
      })
      .then((response) => {
        setShopDetails(response.data);
        setHours(response.data.hours[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .post(url_link_reviews, {
        all_data,
      })
      .then((response) => {
        setReviews(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [shopDetails]);

  const formatHours = (hour) => {
    let timing = hour.split("");
    if (timing[0] == 0) {
      timing.shift();
      timing.splice(1, 0, ":");
      timing.join("");
      return timing;
    } else {
      let time = timing[0] + timing[1];
      let newTime = parseInt(time);
      if (newTime > 12) {
        let timeOverTime = newTime - 12;
        let currentTiming = timeOverTime.toString() + ":00";
        return currentTiming;
      } else {
        timing.splice(2, 0, ":");
        timing.join("");
        return timing;
      }
    }
  };

  const formatTimeCreated = (time) => {
    let dayTime = "";
    let splitCreated = time.split(" ");
    let postDate = splitCreated[0];
    let splitDate = postDate.split("-");
    let year = splitDate[0];
    let monthInt = parseInt(splitDate[1]);
    let month = MONTHS[monthInt];
    let day = splitDate[2];
    return `${month} ${day}, ${year}`;
  };

  return (
    <>
      <div className="shop-container">
        <button onClick={() => navigate(-1)}>Go Back</button>
        <a href={all_data.url} target="_blank" rel="noreferrer noopener">
          <img src={all_data.image_url} className="c-s-image" alt="logo" />
        </a>
        <h1 className="shop-name">{all_data.name}</h1>
        <div className="shop-rating">
          <p>Rating: {all_data.rating} / 5</p>
          <p>Price: {all_data.price}</p>
        </div>
        <a
          href={`http://maps.google.com/?q=${all_data.location.address1} ${all_data.location.city}, ${all_data.location.state} ${all_data.location.zip_code}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <p>{all_data.location.address1}</p>
          <p>
            {all_data.location.city}, {all_data.location.state}{" "}
            {all_data.location.zip_code}
          </p>
        </a>
        <div>
          <p>Current Hours: {hours.is_open_now ? "Open" : "Closed"}</p>
          {hours.open.map((hour) => {
            return (
              <div className="shop-hours">
                <p>{DAYS_OF_THE_WEEK[hour.day]}</p>
                <p>
                  Opens: {formatHours(hour.start)} a.m. - Closes:{" "}
                  {formatHours(hour.end)} p.m.
                </p>
              </div>
            );
          })}
        </div>
        <div>
          <p className="review-header">Reviews: </p>
          {reviews.map((review) => {
            return (
              <div className="review" key={review.id}>
                <div></div>
                <p>{review.user.name}</p>
                <div className="rating-created">
                  <p>Overall Rating: {review.rating} / 5</p>
                  <p>{formatTimeCreated(review.time_created)}</p>
                </div>
                <p>{review.text}</p>
                <div></div>
              </div>
            );
          })}
        </div>
        <form className="pure-form pure-form-stacked">
          <fieldset>
            <legend>Add A Review</legend>
            <label for="stacked-name">Name</label>
            <input type="text" id="stacked-name" placeholder="Name" />
            <br></br>
            <label for="stacked-email">Email</label>
            <input type="email" id="stacked-email" placeholder="Email" />
            <br></br>
            <label for="stacked-rating">Rating</label>
            <input
              type="number"
              id="stacked-rating"
              min="0"
              max="5"
              step=".5"
            />
            <br></br>
            <label for="stacked-review">Review</label>
            <input type="blurb" id="stacked-review" placeholder="Review" />
            <br></br>
            <button type="submit" className="pure-button pure-button-primary">
              Add Reivew
            </button>
          </fieldset>
        </form>
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
