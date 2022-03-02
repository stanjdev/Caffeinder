import React from "react";
import { Link } from "react-router-dom";
import "../components/CoffeeShopLink.css";
import coffeeShopLinkIcon from "../assets/coffee-shop-link-icon.png";

export default function CoffeeShopLink({
  id,
  name,
  subHeading,
  image,
  all_data,
}) {
  let shop_address_street = "";
  let shop_address_city = "";
  if (all_data.location.display_address.length == 3) {
    shop_address_street =
      all_data.location.display_address[0] +
      ", " +
      all_data.location.display_address[1];
    shop_address_city = all_data.location.display_address[2];
  } else {
    shop_address_street = all_data.location.display_address[0];
    shop_address_city = all_data.location.display_address[1];
  }
  return (
    <>
      <div className="coffee-shop-container pure-u-sm-1">
        <Link to={`/coffee_shop/${id}`} state={{ all_data: all_data }}>
          <div className="coffee-shop">
            <div>
              <img src={image} alt={subHeading} className="coffee-shop-image" />
            </div>
            <div className="coffee-shop-details">
              <div className="c-s-n-c">
                <p className="txt-name">{name}</p>
              </div>
              <div className="c-s-address">
                <p className="txt">{shop_address_street}</p>
                <p className="txt">{shop_address_city}</p>
              </div>
              <div className="c-s-rating">
                <p className="txt">{all_data.rating} / 5</p>
                <p className="txt">({all_data.review_count}) Reviews</p>
              </div>
              <div className="c-s-details">
                <p className="txt">Price: {all_data.price}</p>
                <p className="txt">
                  {all_data.is_closed ? "Currently Closed" : "Currently Open"}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
