import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offers';
import {ErrorType} from '../types/error-type';

export const changeCity = createAction<string>('data/changeCity');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const setError = createAction<ErrorType>('data/setError');
