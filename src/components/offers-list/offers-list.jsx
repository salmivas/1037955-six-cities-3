import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import PlaceCard from "../place-card/place-card.jsx";

const OffersList = React.memo(
    ({currentCity, currentCardHoverHandler}) =>{
      return (
        <div className="cities__places-list places__list tabs__content">
          {currentCity.offers.map((offer) => (
            <PlaceCard
              offer = {offer}
              key = {offer.id}
              currentCardHoverHandler = {currentCardHoverHandler}
            />
          ))}
        </div>
      );
    });
OffersList.displayName = `OfferList`;

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  currentActiveCardID: state.currentActiveCardID,
});

const mapDispatchToProps = (dispatch) => ({
  currentCardHoverHandler(cityID) {
    dispatch(ActionCreator.setCurrentActiveCardID(cityID));
  },
});


OffersList.propTypes = {
  currentCity: PropTypes.shape({
    offers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    })).isRequired
  }).isRequired,
  currentCardHoverHandler: PropTypes.func.isRequired,
};

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
