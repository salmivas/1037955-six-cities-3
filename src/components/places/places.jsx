import React, {PureComponent} from "react";
import Map from "../map/map.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import PlacesFound from "../places-found/places-found.jsx";

class Places extends PureComponent {
  render() {
    return (
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <PlacesFound/>
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
          <OffersList/>
        </section>
        <div className="cities__right-section">
          <Map/>
        </div>
      </div>
    );
  }
}

export default Places;
