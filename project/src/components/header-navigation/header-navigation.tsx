import React from 'react';
import {useAppSelector} from '../../hooks';
import UserInfo from '../user-info/user-info';
import {AuthorizationStatus} from '../../const';
import SignIn from '../sign-in/sign-in';

function HeaderNavigation() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth ? <UserInfo/> : <SignIn/>}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
