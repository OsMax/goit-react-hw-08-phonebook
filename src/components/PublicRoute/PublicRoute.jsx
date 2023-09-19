import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Navigate } from 'react-router-dom';
import { selectIsLogIn } from 'redux/auth/authSelector';

export function PublicRoute({ children }) {
  const isLogIn = useSelector(selectIsLogIn);
  return isLogIn ? <Navigate to="/contacts" /> : children;
  //   console.log('!!!');
}
