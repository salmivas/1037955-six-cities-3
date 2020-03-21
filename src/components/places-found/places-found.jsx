import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const PlacesFound = ({cityName, offersCount}) => (
  <b className="places__found">{offersCount} places to stay in {cityName}</b>
);

const mapStateToProps = (state) => ({
  cityName: state.currentCity.name,
  offersCount: state.currentCity.offersCount,
});


PlacesFound.propTypes = {
  cityName: PropTypes.string.isRequired,
  offersCount: PropTypes.number.isRequired,
};

export {PlacesFound};
export default connect(mapStateToProps)(PlacesFound);
