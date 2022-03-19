import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, requireAuthorization} from './action';
import {cities} from '../mocks/cities';
import {AuthorizationStatus} from '../const';
import {Cities, Offers} from '../types/offers';

type InitialState = {
  currentCity: string,
  offers: Offers,
  cities: Cities,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
}

const initialState:InitialState = {
  currentCity: 'Paris',
  offers: [],
  cities,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export default reducer;
