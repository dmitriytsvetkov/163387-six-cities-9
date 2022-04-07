import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function NotFoundScreen() {
  return (
    <main className="container">
      <h1>Not Found</h1>
      <Link to={AppRoute.Root} className="form__submit button">To Home Page</Link>
    </main>
  );
}

export default NotFoundScreen;
