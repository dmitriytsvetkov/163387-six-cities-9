import reducer from '../reducer';
import {Middleware} from '@reduxjs/toolkit';
import {browserHistory} from '../../browser-history';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> = (store) => (next) => (action) => {
  if (action.type === 'user/redirectToRoute') {
    browserHistory.push(action.payload);
  }

  return next(action);
};
