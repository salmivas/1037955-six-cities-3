import React, {PureComponent, createRef} from "react";
import L from "leaflet";
import PropTypes from "prop-types";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._city = [52.38333, 4.9];
    this._zoomMap = 12;

    this._mapConfig = {
      center: this._city,
      zoom: this._zoomMap,
      zoomControl: false,
      marker: true
    };
    this._iconConfig = L.icon({
      iconUrl: `../../../public/img/pin.svg`,
      iconSize: [30, 30]
    });

    this._mapRef = createRef();
    this._map = null;
  }

  componentDidMount() {
    const {points} = this.props;

    if (this._mapRef.current) {
      this._map = L.map(this._mapRef.current, this._mapConfig);
      this._map.setView(this._city, this._zoomMap);

      L
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this._map);

      points.map((it) => {
        L
        .marker(it, this._iconConfig)
        .addTo(this._map);
      });
    }
  }

  componentWillUnmount() {
    this._map = null;
  }

  render() {
    return (
      <section className="cities__map map" ref={this._mapRef} />
    );
  }
}

Map.propTypes = {
  points: PropTypes.arrayOf(
      PropTypes.arrayOf(
          PropTypes.number.isRequired
      ).isRequired
  ).isRequired
};

export default Map;
