import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Map from "../map/map.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import MainEmpty from "../main-empty/main-empty.jsx";
import {ActionCreator} from "../../reducer.js";

class Places extends PureComponent {
  render() {
    const {currentCity, currentCardHoverHandler, currentActiveCardID} = this.props;

    if (currentCity.offers.length > 0) {
      return (
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{currentCity.offersCount} places to stay in {currentCity.name}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                  Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
            <OffersList
              currentCity = {currentCity}
              currentCardHoverHandler = {currentCardHoverHandler}
            />
          </section>
          <div className="cities__right-section">
            <Map
              currentCity = {currentCity}
              currentActiveCardID = {currentActiveCardID}
            />
          </div>
        </div>
      );
    }
    return <MainEmpty cityName = {currentCity.name}/>;
  }
}

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  currentActiveCardID: state.currentActiveCardID,
});

const mapDispatchToProps = (dispatch) => ({
  currentCardHoverHandler(cityID) {
    dispatch(ActionCreator.setCurrentActiveCardID(cityID));
  },
});

Places.propTypes = {
  currentCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    offersCount: PropTypes.number.isRequired,
    offers: PropTypes.array.isRequired
  }).isRequired,
  currentCardHoverHandler: PropTypes.func.isRequired,
  currentActiveCardID: PropTypes.number.isRequired,
};

export {Places};
export default connect(mapStateToProps, mapDispatchToProps)(Places);
