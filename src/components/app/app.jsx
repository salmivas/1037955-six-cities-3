import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = ({offersCount, offers}) => {
  return (
    <Main
      offersCount = {offersCount}
      offers = {offers}
    />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerName: PropTypes.string.isRequired,
        offerImage: PropTypes.string.isRequired,
      })
  )
};

export default App;
