import {useAppDispatch} from '../../hooks';
import {useEffect} from 'react';
import {setPageClass} from '../../store/action';
import {PageClasses} from '../../const';

function FavoritesEmpty() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPageClass(PageClasses.FavoritesEmpty));
  }, [dispatch]);

  return (
    <section className="favorites favorites--empty">
      <h1 className="visually-hidden">Favorites (empty)</h1>
      <div className="favorites__status-wrapper">
        <b className="favorites__status">Nothing yet saved.</b>
        <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
      </div>
    </section>
  );
}

export default FavoritesEmpty;
