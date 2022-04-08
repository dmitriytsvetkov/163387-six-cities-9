import {FormEvent, useEffect, useRef, useState} from 'react';
import {AuthData} from '../../types/auth-data';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {setPageClass} from '../../store/action';
import {AppRoute, AuthorizationStatus, PageClasses} from '../../const';
import {useNavigate} from 'react-router-dom';

const passwordRegExp = new RegExp(/(?=.*[0-9])(?=.*[A-Za-z])[0-9A-Za-z]{2,}/);

function LoginScreen() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const authStatus = useAppSelector((state) => state.authorizationStatus);

  const userEmailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }

    dispatch(setPageClass(PageClasses.Login));
  }, [authStatus, dispatch, navigate]);

  const passwordValidation = (password: string) => {
    if (password === '') {
      setPasswordError('Password cannot be empty');
      return false;
    }
    if (!passwordRegExp.test(`${password}`.toLowerCase())) {
      setPasswordError('Password must contain letters and numbers');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt:FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (userEmailRef.current !== null && passwordRef.current !== null && passwordValidation(passwordRef.current.value)) {
      onSubmit({
        email: userEmailRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input ref={userEmailRef} className="login__input form__input" type="email" name="email" placeholder="Email" required/>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              {passwordError ? <div style={{color: '#d91818'}}>{passwordError}</div> : ''}
              <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required/>
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginScreen;
