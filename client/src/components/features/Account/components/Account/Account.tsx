import { useSelector } from 'react-redux';
import styles from './Account.module.css';
import { RootState, useAppDispatch } from '../../../../../store/store';
import { useState } from 'react';
import { fetchAccountData } from '../../AccountSlice';
import { useEffect } from 'react';
import { Statuses } from '../../../productList/productListSlice';
import {
  NavLink,
  Outlet,
  useNavigate,
  useOutletContext,
} from 'react-router-dom';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';
import { AccountData } from '../../../../../types/AccountData';
import LogOutButton from '../../../../common/LogOutButton/LogOutButton';

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

  useEffect(() => {
    if (status === Statuses.Failed || error) {
      navigate('/account/sign-in');
    }
  }, [status, error, navigate]);

  if (status === Statuses.Pending)
    return (
      <div className={styles.accountInfo}>
        <LoadingSpinner />
      </div>
    );

  if (status === Statuses.Success && userData) {
    return (
      <div className={styles.accountInfo}>
        <div className={styles.welcomeAndLogout}>
          <h1>
            <span className={styles.welcomeMsg}>Welcome</span> {userData.name}
          </h1>
          <LogOutButton />
        </div>
        <div className={styles.navAndOutlet}>
          <div className={styles.accountNav}>
            <NavLink
              to="orders"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Orders
            </NavLink>
            <NavLink
              to="account-info"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Account Info
            </NavLink>
          </div>
          <div className={styles.outletWrapper}>
            <Outlet context={userData} />
          </div>
        </div>
      </div>
    );
  }
};
export default Account;

type ContextType = AccountData;

export function useUserData() {
  return useOutletContext<ContextType>();
}
