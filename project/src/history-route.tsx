import {BrowserHistory} from 'history';
import React, {useLayoutEffect, useState} from 'react';
import {Router} from 'react-router-dom';

export interface HistoryRouterProps {
  basename?: string,
  children?: React.ReactNode,
  history: BrowserHistory,
}

function HistoryRouter(
  {
    basename,
    children,
    history,
  }: HistoryRouterProps) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      location={state.location}
      navigator={history}
      basename={basename}
      navigationType={state.action}
    >
      {children}
    </Router>
  );
}

export default HistoryRouter;
