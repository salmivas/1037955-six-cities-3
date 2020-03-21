import React from "react";
import PropTypes from "prop-types";

const Location = React.memo(
    ({city, currentCity, onLocationItemLinkClick}) => {
      return (
        <li className="locations__item" key>
          <a
            onClick = {() => onLocationItemLinkClick(city.name)}
            className={city.name === currentCity.name ? `locations__item-link tabs__item--active` : `locations__item-link tabs__item`}
            href="#"
          >
            <span>{city.name}</span>
          </a>
        </li>
      );
    });
Location.displayName = `Location`;

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
