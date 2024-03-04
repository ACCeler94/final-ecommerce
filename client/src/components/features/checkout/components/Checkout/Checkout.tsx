import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../../store/store';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Order from '../../../../../types/Order';
import ordersAPI from '../../../../../API/ordersApi';
import {
  recalculateTotalPrice,
  resetCart,
  resetCartInStorage,
} from '../../../cart/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from '../../../../common/Error/Error';
import { fetchAccountData } from '../../../account/AccountSlice';
import { AccountData } from '../../../../../types/AccountData';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import CheckoutSummary from '../CheckoutSummary/CheckoutSummary';
import { Statuses } from '../../../productList/productListSlice';

const Checkout = () => {
  const cart = useSelector((state: RootState) => state.cart.shoppingCart);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const userId = useSelector((state: RootState) => state.signIn.userId);
  const accountStatus = useSelector((state: RootState) => state.account.status);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [userData, setUserData] = useState<AccountData>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [shippingStreet, setShippingStreet] = useState('');
  const [shippingCity, setShippingCity] = useState('');
  const [shippingZip, setShippingZip] = useState('');
  const [error, setError] = useState();
  const [isPending, setIsPending] = useState(false);

  // redirect if userId is falsy (user is not signed in)
  useEffect(() => {
    if (!userId && accountStatus === Statuses.Failed) {
      navigate('/account/sign-in');
    }
  }, [navigate, userId, accountStatus]);

  // fetch account data to fill form with default values
  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchAccountData())
      .unwrap()
      .then((data) => setUserData(data)); // set action.payload as userData
    return () => controller.abort(); // abort fetch request if the component unmounts before it is finished
  }, [dispatch]);

  // if userData exist, fill the form with values from the database
  useEffect(() => {
    if (userData) {
      setName(userData.name);
      setEmail(userData.email);
      setShippingStreet(userData.street);
      setShippingCity(userData.street);
      setShippingZip(userData.zip);
    }
  }, [userData]);

  // recalculate totalPrice if the component mounts to make sure it is up to date
  useEffect(() => {
    dispatch(recalculateTotalPrice());
  }, [dispatch, cart]);

  // disable form submission after one attempt until component dismounts (after attempt user will be redirected anyway)
  useEffect(() => {
    return () => {
      setIsPending(false);
    };
  }, []);

  const showToast = () =>
    toast.success('Order successfully placed. You will be redirected.', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'colored',
    });

  const redirectOnSuccess = () => {
    setTimeout(() => {
      navigate('/');
      dispatch(resetCart()); // reset cart on success
      dispatch(resetCartInStorage()); // reset cart in storage on success
    }, 2000);
  };

  const orderSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // prevent form submission before getting response from the server
    if (isPending) {
      return;
    }
    if (!name || !email || !shippingStreet || !shippingCity || !shippingZip) {
      alert('Please fill all required fields!');
    } else {
      if (totalPrice && cart.length !== 0) {
        setIsPending(true);
        const orderObj: Order = {
          userData: { name, email, shippingCity, shippingStreet, shippingZip },
          products: cart,
          orderTotal: totalPrice,
        };
        ordersAPI
          .placeOrder(orderObj)
          .then(() => {
            showToast();
            redirectOnSuccess();
          })
          .catch((err) => {
            setError(err);
          });
      }
    }
  };

  const CheckoutFormProps = {
    name,
    setName,
    email,
    setEmail,
    shippingStreet,
    setShippingStreet,
    shippingCity,
    setShippingCity,
    shippingZip,
    setShippingZip,
    orderSubmitHandler,
  };

  const CheckoutSummaryProps = {
    cart,
    totalPrice,
  };

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="checkout-wrapper">
      <CheckoutSummary {...CheckoutSummaryProps} />
      <CheckoutForm {...CheckoutFormProps} />
    </div>
  );
};

export default Checkout;
