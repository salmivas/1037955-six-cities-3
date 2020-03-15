import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

class OffersList extends PureComponent {
  render() {
    const {currentCity, currentCardHoverHandler} = this.props;

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
  }
}

OffersList.propTypes = {
  currentCity: PropTypes.shape({
    offers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    })).isRequired
  }).isRequired,
  currentCardHoverHandler: PropTypes.func.isRequired,
};

export default OffersList;
