import {createReducer} from '@reduxjs/toolkit';
import {changeCurrentCity, loadAllOffers, loadNearbyOffers, loadOffer, requireAuthorization} from './action';
import {cities} from '../mocks/cities';
import {AuthorizationStatus, FilterValue} from '../const';
import {Cities, Offer, Offers} from '../types/offers';

type InitialState = {
  currentCity: string,
  currentFilter: string,
  offers: Offers,
  nearbyOffers: Offers,
  currentOffer: Offer | null,
  cities: Cities,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
}

const initialState:InitialState = {
  currentCity: 'Paris',
  currentFilter: FilterValue.POPULAR,
  offers: [],
  nearbyOffers: [],
  currentOffer: null,
  cities,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAllOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(changeCurrentCity, (state, action) => {
      state.currentCity = action.payload as string;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export default reducer;
