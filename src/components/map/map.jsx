import React, {PureComponent, createRef} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._city = props.currentCity.position;
    this._zoomMap = 12;

    this._mapConfig = {
      center: this._city,
      zoom: this._zoomMap,
      zoomControl: false,
      marker: true
    };

    this._iconConfig = {
      iconBlue: leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 40]
      }),
      iconOrange: leaflet.icon({
        iconUrl: `img/pin-active.svg`,
        iconSize: [30, 40]
      })
    };

    this._mapRef = createRef();
    this._map = null;
    this._layerGroupStorage = null;
  }

  componentDidMount() {
    if (this._mapRef.current) {
      this._map = leaflet.map(this._mapRef.current, this._mapConfig);
      this._map.setView(this._city, this._zoomMap);

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this._map);

      this._layerGroupStorage = {map: this._map, layerGroup: leaflet.layerGroup().addTo(this._map)};

      this.updateMap();
    }
  }

  componentWillUnmount() {
    this._map = null;
  }

  componentDidUpdate() {
    const {layerGroup} = this._layerGroupStorage;
    const {currentCity} = this.props;

    this._map.setView(currentCity.position, this._zoomMap);

    layerGroup.clearLayers();
    this.updateMap();
  }

  updateMap() {
    const {currentCity, currentActiveCardID} = this.props;
    const {layerGroup} = this._layerGroupStorage;

    currentCity.offers.forEach((offer) => {
      const icon = currentActiveCardID && currentActiveCardID === offer.id ? this._iconConfig.iconOrange : this._iconConfig.iconBlue;

      leaflet
      .marker(offer.position, {icon})
      .addTo(layerGroup);
    });
  }

  render() {
    return (
      <section className="cities__map map" ref={this._mapRef}/>
    );
  }
}

Map.propTypes = {
  currentCity: PropTypes.shape({
    position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    offers: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    })).isRequired
  }).isRequired,
  currentActiveCardID: PropTypes.number.isRequired,
};

export default Map;
