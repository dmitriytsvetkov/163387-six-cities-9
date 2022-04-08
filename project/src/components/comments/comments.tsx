import CommentForm from '../comment-form/comment-form';
import {Comments as CommentsType} from '../../types/comments';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import Comment from '../comment/comment';
import {sortByNewerDate} from '../../utils';

type Props = {
  comments: CommentsType,
}

function Comments({comments}:Props) {
  const isAuth = useAppSelector((state) => state.authorizationStatus);

  const sortedComments = comments.slice().sort(sortByNewerDate);
  const slicedComments = sortedComments.slice(0, 10);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{slicedComments.length}</span></h2>
      <ul className="reviews__list">
        {
          slicedComments.map((comment) => <Comment comment={comment} key={comment.id}/>)
        }
      </ul>
      {
        isAuth === AuthorizationStatus.Auth ? <CommentForm/> : null
      }
    </section>
  );
}

export default Comments;
