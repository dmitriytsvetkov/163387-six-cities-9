import React from 'react';
import {City} from '../../types/offers';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/action';
import {getCurrentCityName} from '../../store/selectors';

type CityCardProps = {
  city: City
}

function CityCard({city}: CityCardProps) {
  const currentCity = useAppSelector(getCurrentCityName);
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${currentCity === city.name ? 'tabs__item--active' : ''}`}
        href="#"
        onClick={
          (evt: React.MouseEvent<HTMLElement>) => {
            evt.preventDefault();
            const target = evt.target as HTMLSpanElement;
            if (typeof target.textContent === 'string') {
              dispatch(changeCity(target.textContent));
            }
          }
        }
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
}

export default CityCard;
