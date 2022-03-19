import Login from '../pages/login';
import {AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  children: JSX.Element,
  authorizationStatus: AuthorizationStatus,
}

function PrivateRoute({children, authorizationStatus}: PrivateRouteProps) {
  let hasAccess = false;

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    hasAccess = true;
  }

  return hasAccess ? children : <Login/>;
}

export default PrivateRoute;
