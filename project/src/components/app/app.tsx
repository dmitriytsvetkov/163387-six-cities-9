import Main from '../pages/main';
import Header from '../header/header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import Favorites from '../pages/favorites';
import NotFound from '../pages/not-found';
import Login from '../pages/login';
import Offer from '../pages/offer';
import PrivateRoute from '../private-route/private-route';
import {Offers} from '../../types/offers';

type AppMainProps = {
  placesCount: number,
  offers: Offers,
}

function App({placesCount, offers}: AppMainProps) {
  return (
    <BrowserRouter>
      <div className="page">
        <Header/>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Main placesCount={placesCount} offers={offers}/>}
          />
          <Route
            path={AppRoute.Favorites}
            element={<PrivateRoute><Favorites offers={offers}/></PrivateRoute>}
          />
          <Route
            path={AppRoute.Login}
            element={<Login/>}
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<Offer/>}
          />
          <Route
            path="*"
            element={<NotFound/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
