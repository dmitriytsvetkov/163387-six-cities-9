import {createReducer} from '@reduxjs/toolkit';
import {
  changeCurrentCity,
  loadAllOffers,
  loadComments,
  loadNearbyOffers,
  loadOffer,
  requireAuthorization, saveComment, saveFavoriteOffer, setPageClass
} from './action';
import {cities} from '../mocks/cities';
import {AuthorizationStatus, PageClasses} from '../const';
import {Cities, Offer, Offers} from '../types/offers';
import {Comments} from '../types/comments';
import {replaceObjectInArray} from '../utils';

type InitialState = {
  currentCity: string | null,
  currentPageClass: string,
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
  currentPageClass: PageClasses.DEFAULT,
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
    .addCase(saveFavoriteOffer, (state, action) => {
      state.offers = replaceObjectInArray(state.offers, action.payload);
      state.nearbyOffers = replaceObjectInArray(state.nearbyOffers, action.payload);

      if (state.currentOffer !== null && (action.payload[0].id === state.currentOffer.id) ) {
        state.currentOffer = action.payload[0];
      }
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(changeCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setPageClass, (state, action) => {
      state.currentPageClass = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export default reducer;
