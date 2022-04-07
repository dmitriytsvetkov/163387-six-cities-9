export enum AppRoute {
  Login = '/login',
  Root = '/',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '/404',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export enum AuthorizationStatus {
  AUTH = 'AUTH',
  NO_AUTH = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum UserData {
  avatarUrl = 'avatarUrl',
  email = 'email',
  id = 'id',
  isPro = 'isPro',
  name = 'name',
  token = 'token',
}

export enum MapHeight {
  OFFER_SCREEN = 579,
  MAIN_SCREEN = 782,
}

export enum FilterValue {
  POPULAR = 'Popular',
  PRICE_DESC = 'Price: low to high',
  PRICE_ASC = 'Price: high to low',
  TOP_RATED = 'Top rated first',
}

export enum PageClasses {
  PAGE_MAIN = 'page--gray page--main',
  LOGIN = 'page--gray page--login',
  FAVORITES_EMPTY = 'page--favorites-empty',
  DEFAULT = '',
}
