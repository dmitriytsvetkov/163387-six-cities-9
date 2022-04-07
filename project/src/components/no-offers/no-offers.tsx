import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {setPageClass} from '../../store/action';
import {PageClasses} from '../../const';

function NoOffers() {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.currentCity);

  useEffect(() => {
    dispatch(setPageClass(PageClasses.LOGIN));
  }, [dispatch]);

  return (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
      </div>
    </section>
  );
}

export default NoOffers;
