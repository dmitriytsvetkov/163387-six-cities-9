import {createAction} from '@reduxjs/toolkit';
import {Offer, Offers} from '../types/offers';
import {AppRoute, AuthorizationStatus} from '../const';

export const changeCity = createAction<string>('data/changeCity');

export const loadAllOffers = createAction<Offers>('data/loadAllOffers');

export const loadOffer = createAction<Offer>('data/loadOffer');

export const loadNearbyOffers = createAction<Offers>('data/loadNearbyOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');
