import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import React, {useEffect, useState} from 'react';
import CityList from '../city-list/city-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getCurrentCityName, getOffers} from '../../store/selectors';
import {getOffersByCityName, getPointsFromOffers} from '../../utils';
import {FilterValue, MapHeight, PageClasses} from '../../const';
import OfferSorting from '../offer-sorting/offer-sorting';
import {Offers} from '../../types/offers';
import {setPageClass} from '../../store/action';

const sortOffers = (offers: Offers, filterValue: FilterValue) => {
  switch (filterValue) {
    case FilterValue.PRICE_DESC:
      return offers.sort((a, b) => a.price - b.price);
    case FilterValue.PRICE_ASC:
      return offers.sort((a, b) => b.price - a.price);
    case FilterValue.TOP_RATED:
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

function Main() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPageClass(PageClasses.PAGE_MAIN));
  }, [dispatch]);


  const offers = useAppSelector(getOffers);
  const currentCity = useAppSelector(getCurrentCityName);

  const filteredOffers = getOffersByCityName(offers, currentCity);

  const offersLength = filteredOffers.length;

  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  const [selectedSortValue, setSelectedSortValue] = useState<FilterValue>(FilterValue.POPULAR);

  const newFilteredOffers = sortOffers(filteredOffers, selectedSortValue);

  const points = getPointsFromOffers(filteredOffers);

  const onListItemHover = (listItemId: number) => {
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
            <OfferSorting selectedSortValue={selectedSortValue} setSelectedSortValue={setSelectedSortValue}/>
            <OfferList offers={newFilteredOffers} onListItemHover={onListItemHover}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map points={points} selectedPoint={selectedPoint} height={MapHeight.MAIN_SCREEN}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
