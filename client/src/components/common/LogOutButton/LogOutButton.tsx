import { useNavigate } from 'react-router-dom';
import authAPI from '../../../API/authApi';
import { useAppDispatch } from '../../../store/store';
import { resetState } from '../../features/SignIn/signInSlice';
import Button from '../Button/Button';

const LogOutButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOutHandler = async () => {
    try {
      const response = await authAPI.logoutUser();

      if (response.status !== 200) {
        alert('Logout failed, please try again');
      }
      dispatch(resetState());
      navigate('/');
    } catch (error) {
      alert('Logout failed, please try again');
      console.error('Failed to logout:', error);
    }
  };

  return <Button buttonText="Log Out" buttonHandler={logOutHandler} />;
};

export default LogOutButton;
