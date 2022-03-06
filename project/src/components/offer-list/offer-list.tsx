import {Offer, Offers} from '../../types/offers';
import PlaceCard from '../place-card/place-card';
import {useState} from 'react';

type OfferListProps = {
  offers: Offers
}

function OfferList ({offers}:OfferListProps):JSX.Element {
  const [activeOfferCard, setActiveOfferCard] = useState(null);
  return (
    <div className="cities__places-list places__list tabs__content" >
      {offers.map((offer:Offer) => {
        return (<PlaceCard offer={offer} key={offer.id} func={setActiveOfferCard} className={'place-card'}/>)
      })}
    </div>
  )
}

export default OfferList;
