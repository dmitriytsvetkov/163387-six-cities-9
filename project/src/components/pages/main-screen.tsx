import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import React, {useEffect, useState} from 'react';
import CityList from '../city-list/city-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getCurrentCityName, getOffers} from '../../store/selectors';
import {getOffersByCityName, getPointsFromOffers, sortOffers} from '../../utils';
import {FilterValue, MapHeight, PageClasses} from '../../const';
import OfferSorting from '../offer-sorting/offer-sorting';
import {setPageClass} from '../../store/action';
import NoOffers from '../no-offers/no-offers';

function MainScreen() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPageClass(PageClasses.PageMain));
  }, [dispatch]);

  const offers = useAppSelector(getOffers);

  const currentCity = useAppSelector(getCurrentCityName);

  const filteredOffers = getOffersByCityName(offers, currentCity);

  const offersLength = filteredOffers.length;

  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  const [selectedSortValue, setSelectedSortValue] = useState<FilterValue>(FilterValue.Popular);

  const newFilteredOffers = sortOffers(filteredOffers, selectedSortValue);

  const points = getPointsFromOffers(filteredOffers);

  const onListItemHover = (listItemId: number) => {
    setSelectedPoint(listItemId);
  };

  return (
    <main className={`page__main page__main--index ${offersLength === 0 ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityList/>
      </div>
      <div className="cities">
        <div className={`cities__places-container container ${offersLength === 0 ? 'cities__places-container--empty' : ''}`}>
          {
            (offersLength === 0) ?
              <NoOffers/> :
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersLength} places to stay in {currentCity}</b>
                <OfferSorting selectedSortValue={selectedSortValue} setSelectedSortValue={setSelectedSortValue}/>
                <OfferList offers={newFilteredOffers} onListItemHover={onListItemHover}/>
              </section>
          }
          <div className="cities__right-section">
            {
              (offersLength === 0) ?
                null :
                <section className="cities__map map">
                  <Map points={points} selectedPoint={selectedPoint} height={MapHeight.MainScreen}/>
                </section>
            }
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;
