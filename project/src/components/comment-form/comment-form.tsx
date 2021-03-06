import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {sendCommentAction} from '../../store/api-actions';

export const FORM_DATA_INIT_STATE = {
  review: '',
  rating: 0,
};

function CommentForm() {
  const {offerId} = useParams();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState(FORM_DATA_INIT_STATE);
  const [isDisabled, setIsDisabled] = useState(false);

  const fieldChangeHandler = (evt: (React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>)) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    setIsDisabled(true);
    dispatch(sendCommentAction({review: formData.review, rating: formData.rating, offerId: offerId, setFormData, setIsDisabled}));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" checked={formData.rating.toString() === '5'} onChange={fieldChangeHandler} disabled={isDisabled}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" checked={formData.rating.toString() === '4'} onChange={fieldChangeHandler} disabled={isDisabled}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" checked={formData.rating.toString() === '3'} onChange={fieldChangeHandler} disabled={isDisabled}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" checked={formData.rating.toString() === '2'} onChange={fieldChangeHandler} disabled={isDisabled}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" checked={formData.rating.toString() === '1'} onChange={fieldChangeHandler} disabled={isDisabled}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={formData.review} onChange={fieldChangeHandler} disabled={isDisabled}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={(formData.review.length < 50 || formData.review.length > 300) && !isDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
