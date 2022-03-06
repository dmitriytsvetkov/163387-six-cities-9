import {Offer, Offers} from '../../types/offers';
import PlaceCard from '../place-card/place-card';
import {useState} from 'react';

type OfferListProps = {
  offers: Offers
}

function OfferList ({offers}:OfferListProps):JSX.Element {
  const [, setActiveOfferCard] = useState(0);
  return (
    <div className="cities__places-list places__list tabs__content" >
      {offers.map((offer:Offer) => (<PlaceCard offer={offer} key={offer.id} setActiveOfferCard={setActiveOfferCard} className={'place-card'}/>))}
    </div>
  );
}

export default OfferList;
