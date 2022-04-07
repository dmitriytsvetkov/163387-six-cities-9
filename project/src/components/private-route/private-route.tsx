import LoginScreen from '../pages/login-screen';
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

  return hasAccess ? children : <LoginScreen/>;
}

export default PrivateRoute;
