import {Offer} from '../../types/offers';
import PlaceCard from '../place-card/place-card';
import {useAppSelector} from '../../hooks';

function Favorites() {
  const {offers} = useAppSelector((state) => state);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {offers.map((offer:Offer) => (<PlaceCard offer={offer} key={offer.id} className={'favorites'}/>))}
              </div>
            </li>

            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Cologne</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {offers.map((offer:Offer) => (<PlaceCard offer={offer} key={offer.id} className={'favorites'}/>))}
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorites;
