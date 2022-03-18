import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import {Offers} from '../types/offers';
import {APIRoute} from '../const';
import {loadOffers} from './action';
import {errorHandle} from '../services/error-handle';

export const fetchOfferAction = createAsyncThunk(
  'data/loadOffers',
  async () => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Offers);
      store.dispatch(loadOffers(data));
    } catch (err) {
      errorHandle(err);
    }
  },
);
