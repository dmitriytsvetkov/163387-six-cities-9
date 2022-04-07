import {createReducer} from '@reduxjs/toolkit';
import {
  changeCurrentCity,
  loadAllOffers,
  loadComments, loadFavoriteOffers,
  loadNearbyOffers,
  loadOffer,
  requireAuthorization, saveComment, setPageClass
} from './action';
import {cities} from '../mocks/cities';
import {AuthorizationStatus, PageClasses} from '../const';
import {Cities, Offer, Offers} from '../types/offers';
import {Comments} from '../types/comments';

type InitialState = {
  currentCity: string | null,
  currentPageClass: string,
  offers: Offers,
  favoriteOffers: Offers,
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
  favoriteOffers: [],
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
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
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
