import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store/store';
import CartItem from '../CartItem/CartItem';
import styles from './Cart.module.css';

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.shoppingCart);

  return (
    <div className={styles.cartWrapper}>
      <div className="cart-product-list">
        <ul>
          {cart.map((cartObj) => {
            return (
              <li key={cartObj.product.id} className={styles.cartItemWrapper}>
                <CartItem {...cartObj} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
