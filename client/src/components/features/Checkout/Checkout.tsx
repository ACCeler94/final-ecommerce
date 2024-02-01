import { useSelector } from 'react-redux';
import styles from './Checkout.module.css';
import { RootState, useAppDispatch } from '../../../store/store';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../../common/Button/Button';
import Order from '../../../types/Order';
import ordersAPI from '../../../API/ordersApi';
import {
  recalculateTotalPrice,
  resetCart,
  resetCartInStorage,
} from '../Cart/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from '../../common/Error/Error';

const Checkout = () => {
  const cart = useSelector((state: RootState) => state.cart.shoppingCart);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  }, [navigate, cart]);

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
    if (!name || !email || !address) {
      alert('Please fill all required fields!');
    } else {
      if (totalPrice) {
        const orderObj: Order = {
          userData: { name, email, address },
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
            return <ErrorPage error={err} />;
          });
      }
    }
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
      <section className={styles.checkoutFormWrapper}>
        <form className={styles.userDataForm} onSubmit={orderSubmitHandler}>
          <label htmlFor="name">First and last name*</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email address*</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="address">Shipping address*</label>
          <textarea
            name="address"
            id="address"
            rows={5}
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {/* Submit handler is assigned to a form, button is getting type submit by default */}
          <Button buttonText="Place Order" buttonHandler={() => {}} />
        </form>
      </section>
    </div>
  );
};

export default Checkout;
