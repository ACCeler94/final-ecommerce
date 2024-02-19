import { useSelector } from 'react-redux';
import styles from './Account.module.css';
import { RootState, useAppDispatch } from '../../../store/store';
import { useState } from 'react';
import { fetchAccountData } from './AccountSlice';
import { useEffect } from 'react';
import { Statuses } from '../ProductList/productListSlice';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import { AccountData } from '../../../types/AccountData';

const Account = () => {
  const status = useSelector((state: RootState) => state.account.status);
  const error = useSelector((state: RootState) => state.account.error);
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState<AccountData>();
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchAccountData())
      .unwrap()
      .then((data) => setUserData(data)); // set action.payload as userData
    return () => controller.abort(); // abort fetch request if the component unmounts before it is finished
  }, [dispatch]);

  if (status === Statuses.Failed || error) navigate('/account/sign-in');

  if (status === Statuses.Pending)
    return (
      <div className="account-info">
        <LoadingSpinner />
      </div>
    );

  if (status === Statuses.Success && userData) {
    return (
      <div className="account-info">
        <h1>Welcome {userData.name}</h1>
        {
          //<OrdersList userId={userData.id} />
        }
      </div>
    );
  }
};
export default Account;
