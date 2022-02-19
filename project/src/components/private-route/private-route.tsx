import Login from '../pages/login';

type PrivateRouteProps = {
  children: JSX.Element
}

function PrivateRoute({children}: PrivateRouteProps) {
  const hasAccess = false;

  return hasAccess ? children : <Login/>;
}

export default PrivateRoute;
