import {Points} from '../../types/offers';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import leaflet from 'leaflet';
import {useAppSelector} from '../../hooks';
import {getCities, getCurrentCityName} from '../../store/selectors';
import {findCityByName} from '../../utils';
import L from 'leaflet';

type MapProps = {
  points: Points,
  selectedPoint: number | null,
}

function Map({points, selectedPoint}: MapProps) {
  const mapRef = useRef(null);

  const currentCity = findCityByName(useAppSelector(getCurrentCityName), useAppSelector(getCities));

  const map = useMap(mapRef, currentCity);

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
    const markerGroup = L.layerGroup();

    if (map) {
      markerGroup.addTo(map);
      points.forEach((point) => {
        L.marker({
          lat: point.latitude,
          lng: point.longitude}, {
          icon: (point.id === selectedPoint) ? currentCustomIcon : defaultCustomIcon},
        ).addTo(markerGroup);
      });
    }

    return () => {
      markerGroup.clearLayers();
    };
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
