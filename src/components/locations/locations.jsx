import React from "react";
import PropTypes from "prop-types";
import Location from "../location/location.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

const Locations = React.memo(
    ({cities, currentCity, onLocationItemLinkClick}) => {
      return (
        <ul className="locations__list tabs__list">
          {cities.map((city) =>
            <Location
              city = {city}
              currentCity = {currentCity}
              key = {city.id}
              onLocationItemLinkClick = {onLocationItemLinkClick}
            />
          )}
        </ul>
      );
    });
Locations.displayName = `Locations`;

const mapStateToProps = (state) => ({
  cities: state.cities,
  currentCity: state.currentCity,
});

const mapDispatchToProps = (dispatch) => ({
  onLocationItemLinkClick(cityName) {
    dispatch(ActionCreator.swapCity(cityName));
    dispatch(ActionCreator.getOffers(cityName));
  },
});

Locations.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  currentCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onLocationItemLinkClick: PropTypes.func.isRequired,
};

export {Locations};
export default connect(mapStateToProps, mapDispatchToProps)(Locations);

