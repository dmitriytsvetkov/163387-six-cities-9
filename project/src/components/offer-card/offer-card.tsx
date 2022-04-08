import {Offer} from '../../types/offers';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {calculateRatingStars} from '../../utils';
import {useAppDispatch} from '../../hooks';
import {changeFavoriteOfferStatusAction} from '../../store/api-actions';

type Props = {
  offer: Offer,
  listItemHoverHandler?: (listItemId: number) => void,
  className: string,
  imgSize?: string,
}

function OfferCard({offer, listItemHoverHandler, className, imgSize}: Props) {
  const dispatch = useAppDispatch();
  const {isFavorite} = offer;

  return (
    <article className={`${className === 'favorites' ? 'favorites__card' : 'cities__place-card'} place-card`} onMouseEnter={() => {listItemHoverHandler?.(offer.id);}}>
      {offer.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width={imgSize === 'sm' ? '150' : '260'} height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(changeFavoriteOfferStatusAction({offerId: offer.id, isFavorite: Number(!isFavorite)}));
            }}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${calculateRatingStars(offer.rating)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
