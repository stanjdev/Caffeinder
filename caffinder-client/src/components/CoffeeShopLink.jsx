import React from 'react';
import { Link } from 'react-router-dom';
import coffeeShopLinkIcon from '../assets/coffee-shop-link-icon.png';

export default function CoffeeShopLink({id}) {
  return(
    <>
      <div style={styles.linkContainer}>
        <h2>Coffee Shop</h2>
        <Link to={`/coffee_shop/${id}`}>
          <img src={coffeeShopLinkIcon} alt='placeholder img'/>
        </Link>
        <p>caption, subheading</p>
      </div>
    </>
  )
};


const styles = {
  linkContainer: {
    border: 'solid 1px black',
    borderRadius: 7,
    width: '40%',
  }
}
