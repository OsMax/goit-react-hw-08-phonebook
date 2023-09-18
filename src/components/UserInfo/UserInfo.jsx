import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { selectUser, selectToken } from 'redux/auth/authSelector';

export const UserInfo = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut(token));
  };

  return (
    <div>
      <span>{user.name}</span>
      <button type="button" onClick={onLogOut}>
        logOut
      </button>
    </div>
  );
};
