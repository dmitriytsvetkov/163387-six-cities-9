import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import React, {useState} from 'react';
import CityList from '../city-list/city-list';
import {useAppSelector} from '../../hooks';
import {getCurrentCityName, getOffers} from '../../store/selectors';
import {getOffersByCityName, getPointsFromOffers} from '../../utils';
import {MAP_HEIGHT} from '../../const';
import OffersSorting from '../offers-sorting/offers-sortings';

function Main() {
  const offers = useAppSelector(getOffers);
  const currentCity = useAppSelector(getCurrentCityName);

  const filteredOffers = getOffersByCityName(offers, currentCity);

  const offersLength = filteredOffers.length;

  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  const points = getPointsFromOffers(filteredOffers);

  const onListItemHover = (listItemId: number ) => {
    setSelectedPoint(listItemId);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityList/>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersLength} places to stay in {currentCity}</b>
            <OffersSorting/>
            <OfferList offers={filteredOffers} onListItemHover={onListItemHover} />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map points={points} selectedPoint={selectedPoint} height={MAP_HEIGHT.MAIN_SCREEN}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
