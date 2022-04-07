import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import {Offers} from '../types/offers';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {
  loadAllOffers,
  loadComments,
  loadNearbyOffers,
  loadOffer,
  redirectToRoute,
  requireAuthorization, saveComment
} from './action';
import {errorHandle} from '../services/error-handle';
import {AuthData} from '../types/auth-data';
import {dropUserData, saveUserData} from '../services/user-data';
import {Comment} from '../types/comment';

export const fetchAllOffersAction = createAsyncThunk(
  'data/loadOffers',
  async () => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Offers);
      store.dispatch(loadAllOffers(data));
    } catch (err) {
      errorHandle(err);
    }
  },
);

export const fetchOfferAction = createAsyncThunk(
  'data/loadOffer',
  async (offerId: number) => {
    try {
      const {data} = await api.get(`${APIRoute.Offers}/${offerId}`);
      store.dispatch(loadOffer(data));
    } catch (err) {
      errorHandle(err);
    }
  },
);

export const fetchNearbyOffersAction = createAsyncThunk(
  'data/loadNearbyOffers',
  async (offerId: number) => {
    try {
      const {data} = await api.get(`${APIRoute.Offers}/${offerId}/nearby`);
      store.dispatch(loadNearbyOffers(data));
    } catch (err) {
      errorHandle(err);
    }
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'data/loadComments',
  async (offerId: number) => {
    try {
      const {data} = await api.get(`${APIRoute.Comments}/${offerId}`);
      store.dispatch(loadComments(data));
    } catch (err) {
      errorHandle(err);
    }
  },
);

export const sendCommentAction = createAsyncThunk(
  'data/sendComment',
  async ({comment, rating, offerId}: Comment) => {
    try {
      const {data} = await api.post(`${APIRoute.Comments}/${offerId}`, {comment, rating});
      store.dispatch(saveComment(data));
    } catch (err) {
      errorHandle(err);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    } catch (err) {
      errorHandle(err);
      store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({email, password}:AuthData) => {
    try {
      const {data} = await api.post(APIRoute.Login, {email, password});
      saveUserData(data);
      store.dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      store.dispatch(redirectToRoute(AppRoute.Root));
    } catch (err) {
      errorHandle(err);
      store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropUserData();
      store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    } catch (err) {
      errorHandle(err);
    }
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk(
  'data/loadFavoriteOffers',
  async () => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Favorite);
      store.dispatch(loadAllOffers(data));
    } catch (err) {
      errorHandle(err);
    }
  },
);
