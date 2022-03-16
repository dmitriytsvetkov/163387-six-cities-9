import {State} from '../types/store';

export const getCities = (state: State) => state.cities;

export const getOffers = (state: State) => state.offers;

export const getCurrentCityName = (state: State) => state.currentCity;
