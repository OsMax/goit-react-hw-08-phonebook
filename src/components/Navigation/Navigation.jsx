import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { selectIsLogIn, selectUser } from 'redux/auth/authSelector';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader';
import { UserInfo } from 'components/UserInfo/UserInfo';
import css from './Navigation.module.css';

export const Navigation = () => {
  // const dispatch = useDispatch();
  const isLogIn = useSelector(selectIsLogIn);
  const user = useSelector(selectUser);

  return (
    <>
      <header className={css.header}>
        <div className={css.navContainer}>
          <h1 className={css.title}>PhoneBook</h1>
          {!isLogIn && (
            <ul className={css.navLists}>
              <li className={css.navList}>
                <NavLink className={css.navLink} to="/register">
                  Register
                </NavLink>
              </li>
              <li className={css.navList}>
                <NavLink className={css.navLink} to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          )}

          {isLogIn && <UserInfo user={user} />}
        </div>
      </header>
      <main>
        <>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      </main>
    </>
  );
};
