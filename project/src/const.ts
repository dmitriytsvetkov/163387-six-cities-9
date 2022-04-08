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
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum UserData {
  AvatarUrl = 'AvatarUrl',
  Email = 'Email',
  Id = 'Id',
  IsPro = 'IsPro',
  Name = 'Name',
  Token = 'Token',
}

export enum MapHeight {
  OfferScreen = 579,
  MainScreen = 782,
}

export enum FilterValue {
  Popular = 'Popular',
  PriceDesc = 'Price: low to high',
  PriceAsc = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum PageClasses {
  PageMain = 'page--gray page--main',
  Login = 'page--gray page--login',
  FavoritesEmpty = 'page--favorites-empty',
  Default = '',
}
