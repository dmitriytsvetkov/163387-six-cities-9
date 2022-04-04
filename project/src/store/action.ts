import {createAction} from '@reduxjs/toolkit';
import {Offer, Offers} from '../types/offers';
import {AppRoute, AuthorizationStatus} from '../const';
import {Comments} from '../types/comments';

export const changeCurrentCity = createAction<string | null>('data/changeCity');

export const loadAllOffers = createAction<Offers>('data/loadAllOffers');

export const loadOffer = createAction<Offer>('data/loadOffer');

export const loadNearbyOffers = createAction<Offers>('data/loadNearbyOffers');

export const loadComments = createAction<Comments>('data/loadComments');

export const saveComment = createAction<Comments>('data/saveComment');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');

export const setPageClass = createAction<string>('data/setPageClass');
