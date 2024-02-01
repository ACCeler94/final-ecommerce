import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store/store';
import CartItem from '../CartItem/CartItem';
import styles from './Cart.module.css';
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { recalculateTotalPrice } from './cartSlice';
import { nanoid } from 'nanoid';

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.shoppingCart);
  const navigate = useNavigate();
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const dispatch = useAppDispatch();

  // recalculate totalPrice on mount and cart change
  useEffect(() => {
    dispatch(recalculateTotalPrice());
  }, [dispatch, cart]);

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCartWrapper}>
        <h3>The Cart is empty.</h3>
        <Button buttonText="Go back" buttonHandler={() => navigate(-1)} />
      </div>
    );
  }

  return (
    <div className={styles.cartProductList}>
      <ul>
        {cart.map((cartObj) => {
          return (
            <li key={nanoid()} className={styles.cartItemWrapper}>
              <CartItem key={nanoid()} {...cartObj} />
            </li>
          );
        })}
      </ul>
      <section className={styles.cartSummary}>
        <p>Total price: ${totalPrice}</p>
        <Button
          buttonText="Checkout"
          buttonHandler={() => navigate('checkout')}
        />
      </section>
    </div>
  );
};

export default Cart;
