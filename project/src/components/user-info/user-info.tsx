import React from 'react';
import {useAppDispatch} from '../../hooks';
import {logoutAction} from '../../store/api-actions';
import {getUserData} from '../../services/user-data';
import {AppRoute, UserData} from '../../const';
import { Link } from 'react-router-dom';

function UserInfo() {
  const dispatch = useAppDispatch();

  const userEmail = getUserData(UserData.email);
  const userAvatar = getUserData(UserData.avatarUrl);

  const handleClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    dispatch(logoutAction());
  };

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div
            className="header__avatar-wrapper user__avatar-wrapper"
            style={{
              backgroundImage: `url(${userAvatar})`,
            }}
          >
          </div>
          <span className="header__user-name user__name">{userEmail}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a className="header__nav-link" href="#" onClick={handleClick}>
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </>
  );
}

export default UserInfo;
