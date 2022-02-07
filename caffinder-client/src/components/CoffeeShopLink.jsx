import React from 'react';
import { Link } from 'react-router-dom';
import coffeeShopLinkIcon from '../assets/coffee-shop-link-icon.png';

export default function CoffeeShopLink({id}) {
  return(
    <>
      <div style={styles.linkContainer}>
        <h3>Coffee Shop</h3>
        <Link to={`/coffee_shop/${id}`}>
          <div style={{ textAlign: 'center' }}>
            <img src={coffeeShopLinkIcon} alt='placeholder img'/>
          </div>
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
    width: '175px',
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center'
  }
}
