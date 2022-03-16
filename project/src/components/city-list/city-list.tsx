import React from 'react';
import {City} from '../../types/offers';
import CityCard from '../city-card/city-card';
import {useAppSelector} from '../../hooks';
import {getCities} from '../../store/selectors';

function CityList() {
  const cities = useAppSelector(getCities);
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city: City) => (
          <CityCard city={city} key={city.name}/>))}
      </ul>
    </section>
  );
}

export default CityList;
