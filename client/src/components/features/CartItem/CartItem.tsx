import { useState } from 'react';
import Product from '../../../types/Product';
import Button from '../../common/Button/Button';
import { useAppDispatch } from '../../../store/store';
import {
  addProductComment,
  changeProductQuantity,
  removeFromCart,
} from '../Cart/cartSlice';
import { IMAGES_URL } from '../../../API/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './CartItem.module.css';

interface CartItemProps {
  product: Product;
  quantity: number;
}

const CartItem = ({ product, quantity }: CartItemProps) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [itemComment, setItemComment] = useState('');
  const dispatch = useAppDispatch();

  const handleQuantityChange = () => {
    dispatch(changeProductQuantity({ product, quantity: itemQuantity }));
  };

  return (
    <div className={styles.cartProduct}>
      <div className={styles.cartProduct_ImageWrapper}>
        <img src={`${IMAGES_URL}/${product.photo}`} />
      </div>
      <div className={styles.cartProductFormWrapper}>
        <h3 className="cart-product-info">{product.name}</h3>
        <form
          className="cart-product-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.cartProductForm_quantity}>
            <input
              id={product.id}
              value={itemQuantity}
              onChange={(e) => setItemQuantity(Number(e.target.value))}
              onBlur={handleQuantityChange}
            />
          </div>
          <div className={styles.cartProductForm_comment}>
            <textarea
              id={`comment-item-${product.id}`}
              placeholder="Add comment to the item..."
              name="cart item comment"
              value={itemComment}
              onChange={(e) => setItemComment(e.target.value)}
              rows={3}
              cols={25}
            />
          </div>
          <Button
            buttonText="Save"
            buttonHandler={() => {
              dispatch(addProductComment({ product, comment: itemComment }));
            }}
          />
        </form>
      </div>
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() => dispatch(removeFromCart({ product }))}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default CartItem;
