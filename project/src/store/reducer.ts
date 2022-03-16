import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeOffers} from './action';
import {offers} from '../mocks/offers';
import {cities} from '../mocks/cities';

const initialState = {
  currentCity: 'Paris',
  offers,
  cities,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeOffers, (state) => {
      state.offers = offers;
    })
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    });
});

export default reducer;
