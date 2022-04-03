import {fetchComments, fetchNearbyOffersAction, fetchOfferAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {calculateRatingStars, getPointsFromOffers} from '../../utils';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Comments from '../comments/comments';
import Map from '../map/map';
import OfferList from '../offer-list/offer-list';
import {MapHeight} from '../../const';

function Offer() {
  const {offerId} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOfferAction(Number((offerId))));
    dispatch(fetchNearbyOffersAction(Number((offerId))));
    dispatch(fetchComments(Number((offerId))));
  }, [dispatch, offerId]);

  const currentOffer = useAppSelector((state) => state.currentOffer);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);
  const comments = useAppSelector((state) => state.comments);

  const points = getPointsFromOffers(nearbyOffers);

  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  const onListItemHover = (listItemId: number ) => {
    setSelectedPoint(listItemId);
  };

  if (currentOffer !== null) {
    const {images, isPremium, title, rating, type, bedrooms, maxAdults, price, goods, host} = currentOffer;
    const slicedImages = images.slice(0, 6);

    return (
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {slicedImages.map((image, index) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt="studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium ?
                  <div className="property__mark">
                    <span>Premium</span>
                  </div> : null
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${calculateRatingStars(rating)}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods.map((item) => (
                      <li className="property__inside-item" key={item}>
                        {item}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {
                    host.isPro ?
                      <span className="property__user-status">
                        Pro
                      </span> : null
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The
                    building is green and from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where
                    the
                    bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <Comments comments={comments}/>
            </div>
          </div>
          <section className="property__map map">
            <Map points={points} selectedPoint={selectedPoint} height={MapHeight.OFFER_SCREEN}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferList offers={nearbyOffers} onListItemHover={onListItemHover} />
            </div>
          </section>
        </div>
      </main>
    );
  }
  return (
    <div>
      no data
    </div>
  );
}

export default Offer;
