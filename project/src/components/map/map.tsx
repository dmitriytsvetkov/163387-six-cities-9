import {City, Points} from '../../types/offers';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import leaflet from 'leaflet';

type MapProps = {
  city: City,
  points: Points,
  selectedPoint: number | null,
}

function Map({city, points, selectedPoint}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet.marker({
          lat: point.latitude,
          lng: point.longitude}, {
          icon: (point.id === selectedPoint) ? currentCustomIcon : defaultCustomIcon},
        ).addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <div
      style={{height: '845px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
