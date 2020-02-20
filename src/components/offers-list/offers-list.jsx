import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentActiveCard: {}
    };

    this._currentCardHoverHandler = this._currentCardHoverHandler.bind(this);
  }

  _currentCardHoverHandler(offer) {
    this.setState({currentActiveCard: offer});
  }

  render() {
    const {offers} = this.props;
    const {currentActiveCard: {}} = this.state;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, index) => (
          <PlaceCard
            onHover = {this._currentCardHoverHandler}
            offer = {offer}
            key = {index}
          />
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        offerHeader: PropTypes.string.isRequired,
        offerImage: PropTypes.string.isRequired,
        offerPrice: PropTypes.string.isRequired,
        offerType: PropTypes.string.isRequired,
      })
  )
};

export default OffersList;
