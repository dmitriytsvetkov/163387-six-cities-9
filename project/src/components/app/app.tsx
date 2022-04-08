import MainScreen from '../pages/main-screen';
import Header from '../header/header';
import {Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import FavoritesScreen from '../pages/favorites-screen';
import NotFoundScreen from '../pages/not-found-screen';
import LoginScreen from '../pages/login-screen';
import OfferScreen from '../pages/offer-screen';
import PrivateRoute from '../private-route/private-route';
import {useAppSelector} from '../../hooks';
import Preloader from '../preloader/preloader';
import HistoryRouter from '../../history-route';
import {browserHistory} from '../../browser-history';

function App() {
  const isDataLoaded = useAppSelector((state) => state.isDataLoaded);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const pageClass = useAppSelector((state) => state.currentPageClass);

  if (!isDataLoaded) {
    return <Preloader/>;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <div className={`page ${pageClass}`}>
        <Header/>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainScreen/>}
          />
          <Route
            path={AppRoute.Favorites}
            element={<PrivateRoute authorizationStatus={authorizationStatus}><FavoritesScreen/></PrivateRoute>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen/>}
          />
          <Route path={AppRoute.Offer}>
            <Route index element={<OfferScreen/>}/>
            <Route path=':offerId' element={<OfferScreen/>}/>
          </Route>
          <Route
            path="*"
            element={<NotFoundScreen/>}
          />
        </Routes>
      </div>
    </HistoryRouter>
  );
}

export default App;
