import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import CartItem from '../CartItem/CartItem';
import styles from './Cart.module.css';
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.shoppingCart);
  const navigate = useNavigate();
  const summedPrice = useSelector((state: RootState) => state.cart.totalPrice);

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
      <section className={styles.cartSummary}>
        <p>Total price: ${summedPrice}</p>
        <Button
          buttonText="Checkout"
          buttonHandler={() => navigate('checkout')}
        />
      </section>
    </div>
  );
};

export default Cart;
