import {ErrorType} from '../types/error-type';
import request from 'axios';
import {HTTP_CODE} from '../const';
import {store} from '../store';
import {setError} from '../store/action';

export const errorHandle = (error:ErrorType) => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const handleError = (message: string) => {
    store.dispatch(setError(message));
  };

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODE.BAD_REQUEST:
        handleError(response.data.error);
        break;
      case HTTP_CODE.NOT_FOUND:
        handleError(response.data.error);
        break;
      case HTTP_CODE.UNAUTHORIZED:
        handleError(response.data.error);
        break;
    }
  }
};
