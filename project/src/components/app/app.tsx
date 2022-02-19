import Main from '../pages/main';
import Header from '../header/header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import Favorites from '../pages/favorites';
import NotFound from '../pages/not-found';
import Login from '../pages/login';
import Offer from '../pages/offer';
import PrivateRoute from '../private-route/private-route';

type AppMainProps = {
  placesCount: number,
}

function App({placesCount}: AppMainProps): JSX.Element {
  return (
    <BrowserRouter>
      <div className="page">
        <Header/>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Main placesCount={placesCount}/>}
          />
          <Route
            path={AppRoute.Favorites}
            element={<PrivateRoute><Favorites/></PrivateRoute>}
          />
          <Route
            path="*"
            element={<NotFound/>}
          />
          <Route
            path={AppRoute.Login}
            element={<Login/>}
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<Offer/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
