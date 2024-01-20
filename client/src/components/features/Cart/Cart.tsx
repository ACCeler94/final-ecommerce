import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import CartItem from '../CartItem/CartItem';
import styles from './Cart.module.css';
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.shoppingCart);
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((cartElem) => {
      const itemTotal = cartElem.quantity * cartElem.product.price;
      total += itemTotal;
    });
    setTotalPrice(total);
  }, [cart]);

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
            <li key={cartObj.product.id} className={styles.cartItemWrapper}>
              <CartItem {...cartObj} />
            </li>
          );
        })}
      </ul>
      <div className={styles.cartSummary}>
        <p>Total price: ${totalPrice}</p>
        <Button
          buttonText="Checkout"
          buttonHandler={() => navigate('checkout')}
        />
      </div>
    </div>
  );
};

export default Cart;
