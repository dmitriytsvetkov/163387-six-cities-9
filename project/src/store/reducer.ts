import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, setError} from './action';
import {cities} from '../mocks/cities';
import {AuthorizationStatus} from '../const';
import {Cities, Offers} from '../types/offers';
import {ErrorType} from '../types/error-type';

type InitialState = {
  currentCity: string,
  offers: Offers,
  cities: Cities,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  error: ErrorType,
}

const initialState:InitialState = {
  currentCity: 'Paris',
  offers: [],
  cities,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export default reducer;
