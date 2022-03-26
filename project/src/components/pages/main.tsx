import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import React, {useState} from 'react';
import CityList from '../city-list/city-list';
import {useAppSelector} from '../../hooks';
import {getCurrentCityName, getOffers} from '../../store/selectors';
import {getOffersByCityName, getPointsFromOffers} from '../../utils';
import {MAP_HEIGHT} from '../../const';

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
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                    Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"/>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
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
