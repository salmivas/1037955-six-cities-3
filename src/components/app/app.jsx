import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const locationItemLinkHandler = () => {};

const App = ({offersCount, offers}) => {
  return (
    <Main
      offersCount = {offersCount}
      offers = {offers}
      onLocationItemLinkClick = {locationItemLinkHandler}
    />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerHeader: PropTypes.string.isRequired,
        offerImage: PropTypes.string.isRequired,
        offerPrice: PropTypes.string.isRequired,
        offerType: PropTypes.string.isRequired,
      })
  )
};

export default App;
