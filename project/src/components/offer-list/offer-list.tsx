import {Offer, Offers} from '../../types/offers';
import PlaceCard from '../place-card/place-card';
import React from 'react';

type OfferListProps = {
  offers: Offers
  onListItemHover: (listItemId: number) => void,
}

function OfferList({offers, onListItemHover}: OfferListProps) {

  const listItemHoverHandler = (evt: number) => {
    onListItemHover(evt);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => (
        <PlaceCard offer={offer} key={offer.id} listItemHoverHandler={listItemHoverHandler} className={'place-card'}/>),
      )}
    </div>
  );
}

export default OfferList;
