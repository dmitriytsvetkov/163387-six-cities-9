import {useAppSelector} from '../../hooks';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Favorites from '../favorites/favorites';
import Footer from '../footer/footer';
import {getFavoriteOffers} from '../../utils';

function FavoritesScreen() {
  const offers = useAppSelector((state) => state.offers);

  const filteredOffers = getFavoriteOffers(offers);

  return (
    <>
      <main className={`page__main page__main--favorites ${filteredOffers.length === 0 ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          {
            filteredOffers.length === 0 ? <FavoritesEmpty /> : <Favorites offers={filteredOffers} />
          }
        </div>
      </main>
      <Footer />
    </>
  );
}

export default FavoritesScreen;
