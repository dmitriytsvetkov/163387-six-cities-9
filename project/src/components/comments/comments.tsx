import CommentForm from '../comment-form/comment-form';
import Comment from '../comment/comment';
import {Comments as CommentsType} from '../../types/comments';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';

type Props = {
  comments: CommentsType,
}

function Comments({comments}:Props) {
  const isAuth = useAppSelector((state) => state.authorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {
          comments.map((comment) => <Comment comment={comment} key={comment.id}/>)
        }
      </ul>
      {
        isAuth === AuthorizationStatus.AUTH ? <CommentForm/> : null
      }
    </section>
  );
}

export default Comments;
