import Main from '../pages/main';
import Header from '../header/header';
import {Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import Favorites from '../pages/favorites';
import NotFound from '../pages/not-found';
import Login from '../pages/login';
import Offer from '../pages/offer';
import PrivateRoute from '../private-route/private-route';
import {useAppSelector} from '../../hooks';
import Preloader from '../preloader/preloader';
import HistoryRouter from '../../history-route';
import {BrowserHistory} from '../../browser-history';

function App() {
  const isDataLoaded = useAppSelector((state) => state.isDataLoaded);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const pageClass = useAppSelector((state) => state.currentPageClass);

  if (!isDataLoaded) {
    return <Preloader/>;
  }

  return (
    <HistoryRouter history={BrowserHistory}>
      <div className={`page ${pageClass}`}>
        <Header/>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Main/>}
          />
          <Route
            path={AppRoute.Favorites}
            element={<PrivateRoute authorizationStatus={authorizationStatus}><Favorites/></PrivateRoute>}
          />
          <Route
            path={AppRoute.Login}
            element={<Login/>}
          />
          <Route path={AppRoute.Offer}>
            <Route index element={<Offer/>}/>
            <Route path=':offerId' element={<Offer/>}/>
          </Route>
          <Route
            path="*"
            element={<NotFound/>}
          />
        </Routes>
      </div>
    </HistoryRouter>
  );
}

export default App;
