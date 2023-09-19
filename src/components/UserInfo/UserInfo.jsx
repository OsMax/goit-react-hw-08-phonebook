import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { selectUser, selectToken } from 'redux/auth/authSelector';

import css from './UserInfo.module.css';

export const UserInfo = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut(token));
  };

  return (
    <div className={css.userCont}>
      <span>Hi, {user.name}</span>
      <button
        className={css.userOut}
        title="LogOut"
        type="button"
        onClick={onLogOut}
      >
        x
      </button>
    </div>
  );
};
