import {createReducer} from '@reduxjs/toolkit';
import {
  changeCurrentCity,
  loadAllOffers,
  loadComments,
  loadNearbyOffers,
  loadOffer,
  requireAuthorization, saveComment
} from './action';
import {cities} from '../mocks/cities';
import {AuthorizationStatus} from '../const';
import {Cities, Offer, Offers} from '../types/offers';
import {Comments} from '../types/comments';

type InitialState = {
  currentCity: string,
  offers: Offers,
  comments: Comments,
  nearbyOffers: Offers,
  currentOffer: Offer | null,
  cities: Cities,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
}

const initialState:InitialState = {
  currentCity: 'Paris',
  offers: [],
  comments: [],
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
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(saveComment, (state, action) => {
      state.comments = action.payload;
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
