import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offers';
import {AppRoute, AuthorizationStatus} from '../const';

export const changeCity = createAction<string>('data/changeCity');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');
