import CommentForm from '../comment-form/comment-form';
import Comment from '../comment/comment';

function Comments() {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        <Comment/>
      </ul>
      <CommentForm/>
    </section>
  );
}

export default Comments;
