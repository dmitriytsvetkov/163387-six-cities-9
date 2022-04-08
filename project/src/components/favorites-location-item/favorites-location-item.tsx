import {Offer, Offers} from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type Props = {
  offers: Offers,
  city: string,
}

function FavoritesLocationItem({offers, city}: Props) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer:Offer) => {
          if (city === offer.city.name) {
            return (<OfferCard offer={offer} key={offer.id} className={'favorites'} imgSize={'sm'}/>);
          }
        })}
      </div>
    </li>
  );
}

export default FavoritesLocationItem;
