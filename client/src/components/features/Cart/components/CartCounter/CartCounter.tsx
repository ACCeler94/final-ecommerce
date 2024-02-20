import { useSelector } from 'react-redux';
import styles from './CartCounter.module.css';
import { RootState } from '../../../../../store/store';
import { useMemo } from 'react';

const CartCounter = () => {
  const cart = useSelector((state: RootState) => state.cart.shoppingCart);

  const totalQuantity = useMemo(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    return count;
  }, [cart]);

  const formatCartCount = () => {
    if (totalQuantity === 0) {
      return null;
    } else if (totalQuantity > 99) {
      return '99+';
    } else return totalQuantity;
  };

  return (
    totalQuantity > 0 && (
      <span className={styles.cartCounter}>{formatCartCount()}</span>
    )
  );
};

export default CartCounter;
