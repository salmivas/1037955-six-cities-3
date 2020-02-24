import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import L from "leaflet";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
    this.state = {

    };
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const icon = L.icon({
      iconUrl: `../../../public/img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = L.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);
    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(map);

    const offerCords = [52.3709553943508, 4.89309666406198];
    L.marker(offerCords, {icon}).addTo(map);
    this._mapRef.current = map;
  }

  render() {
    return (
      <div id="map" ref = {this._mapRef}></div>
    );
  }
}

export default Map;
