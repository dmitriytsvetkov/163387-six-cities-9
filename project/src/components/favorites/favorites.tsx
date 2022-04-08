import {Offers} from '../../types/offers';
import {useAppDispatch} from '../../hooks';
import {useEffect} from 'react';
import {setPageClass} from '../../store/action';
import {PageClasses} from '../../const';
import {getFilteredCitiesFromOffers} from '../../utils';
import FavoritesLocationItem from '../favorites-location-item/favorites-location-item';

type Props = {
  offers: Offers,
}

function Favorites ({offers}: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPageClass(PageClasses.Default));
  }, [dispatch]);

  const cityList = getFilteredCitiesFromOffers(offers);

  return (
    <section className='favorites'>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          cityList.map((city) => (<FavoritesLocationItem offers={offers} key={city} city={city}/>))
        }
      </ul>
    </section>
  );
}

export default Favorites;
