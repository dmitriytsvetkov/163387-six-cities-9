import {useAppDispatch, useAppSelector} from '../../hooks';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Favorites from '../favorites/favorites';
import Footer from '../footer/footer';
import {useEffect} from 'react';
import {fetchFavoriteOffersAction} from '../../store/api-actions';

function FavoritesScreen() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  const offers = useAppSelector((state) => state.favoriteOffers);

  return (
    <>
      <main className={`page__main page__main--favorites ${offers.length === 0 ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          {
            offers.length === 0 ? <FavoritesEmpty /> : <Favorites offers={offers} />
          }
        </div>
      </main>
      <Footer />
    </>
  );
}

export default FavoritesScreen;
