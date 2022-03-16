import {MutableRefObject, useEffect, useState} from 'react';
import {City} from '../types/offers';
import {Map, TileLayer} from 'leaflet';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  currentCity: City | undefined,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null && currentCity !== undefined) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: currentCity.location.latitude,
          lng: currentCity.location.longitude,
        },
        zoom: 10,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );

      instance.addLayer(layer);

      setMap(instance);
    }

    if (map !== null && currentCity !== null && currentCity !== undefined) {
      map.setView([currentCity.location.latitude, currentCity.location.longitude], currentCity.location.zoom);
    }

  }, [mapRef, map, currentCity]);

  return map;
}

export default useMap;
