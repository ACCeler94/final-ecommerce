import { useSelector } from 'react-redux';
import styles from './Checkout.module.css';
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from '../../../../common/Error/Error';
import { fetchAccountData } from '../../../account/AccountSlice';
import { AccountData } from '../../../../../types/AccountData';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = () => {
  const cart = useSelector((state: RootState) => state.cart.shoppingCart);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [userData, setUserData] = useState<AccountData>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [shippingStreet, setShippingStreet] = useState('');
  const [shippingCity, setShippingCity] = useState('');
  const [shippingZip, setShippingZip] = useState('');

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  }, [navigate, cart]);

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
  }, [dispatch]);

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
    if (!name || !email || !shippingStreet || !shippingCity || !shippingZip) {
      alert('Please fill all required fields!');
    } else {
      if (totalPrice) {
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
            return <Error error={err} />;
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

  return (
    <div className="checkout-wrapper">
      <ToastContainer />
      <section className={styles.orderSummary}>
        <ul>
          {cart.map((cartObj) => {
            return (
              <li key={cartObj.product.id} className={styles.itemSummary}>
                <h3 className="cart-product-name">{cartObj.product.name}</h3>
                <p>
                  Size:{' '}
                  <span className={styles.summaryValue}>
                    {cartObj.size.toUpperCase()}
                  </span>
                </p>
                <p>
                  Quantity:{' '}
                  <span className={styles.summaryValue}>
                    {cartObj.quantity}
                  </span>
                </p>
                {cartObj.comment ? (
                  <p>
                    Additional comment:{' '}
                    <span className={styles.comment}>{cartObj.comment}</span>
                  </p>
                ) : null}
                <p className={styles.subtotal}>
                  Subtotal price: ${cartObj.quantity * cartObj.product.price}
                </p>
              </li>
            );
          })}
        </ul>
        <div className={styles.priceSummary}>
          <h3>Total price: ${totalPrice}</h3>
        </div>
      </section>
      <CheckoutForm {...CheckoutFormProps} />
    </div>
  );
};

export default Checkout;
