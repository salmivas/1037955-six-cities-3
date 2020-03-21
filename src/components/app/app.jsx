import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes, {object} from "prop-types";
import Places from "../places/places.jsx";
import MainEmpty from "../main-empty/main-empty.jsx";
import Locations from "../locations/locations.jsx";

class App extends PureComponent {
  _renderPlaces() {
    const {currentCity} = this.props;
    return (currentCity.offers.length > 0) ? <Places/> : <MainEmpty/>;
  }

  render() {
    return (
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <Locations/>
            </section>
          </div>
          <div className="cities">
            {this._renderPlaces()}
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
});

App.propTypes = {
  currentCity: PropTypes.shape({
    offers: PropTypes.arrayOf(object).isRequired
  }).isRequired,
};

export {App};
export default connect(mapStateToProps)(App);
