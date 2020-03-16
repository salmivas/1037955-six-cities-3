import React from "react";
import PropTypes from "prop-types";

const Location = ({city, currentCity, onLocationItemLinkClick}) => (
  <li className="locations__item" key>
    <a
      onClick = {() => onLocationItemLinkClick(city.name)}
      className = {`locations__item-link tabs__item` + (city.name === currentCity.name ? ` tabs__item--active` : ``)}
      href="#"
    >
      <span>{city.name}</span>
    </a>
  </li>
);

Location.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  currentCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onLocationItemLinkClick: PropTypes.func.isRequired,
};

export default Location;
