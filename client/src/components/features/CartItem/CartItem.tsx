import { useEffect, useState } from 'react';
import Product from '../../../types/Product';
import Button from '../../common/Button/Button';
import { useAppDispatch } from '../../../store/store';
import {
  addProductComment,
  changeProductQuantity,
  recalculateTotalPrice,
  removeFromCart,
  storeCart,
} from '../Cart/cartSlice';
import { IMAGES_URL } from '../../../API/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './CartItem.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CartItemProps {
  product: Product;
  quantity: number;
}

const CartItem = ({ product, quantity }: CartItemProps) => {
  const [itemQuantity, setItemQuantity] = useState(quantity.toString());
  const [itemComment, setItemComment] = useState('');
  const [itemTotalPrice, setItemTotalPrice] = useState(
    quantity * product.price,
  );
  const dispatch = useAppDispatch();

  const showToast = () =>
    toast.success('Comment saved.', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'colored',
    });

  const handleQuantityChange = () => {
    const itemQuantityNumber = Number(itemQuantity);
    if (itemQuantityNumber > 0) {
      dispatch(
        changeProductQuantity({ product, quantity: itemQuantityNumber }),
      );
      dispatch(recalculateTotalPrice());
      dispatch(storeCart());
    } else {
      setItemQuantity(quantity.toString());
    }
  };

  const removeItemHandler = () => {
    dispatch(removeFromCart({ product }));
    dispatch(recalculateTotalPrice());
    dispatch(storeCart());
  };

  useEffect(() => {
    setItemTotalPrice(quantity * product.price);
  }, [quantity, product]);

  return (
    <div className={styles.cartProduct}>
      <div className={styles.cartProduct_ImageWrapper}>
        <img src={`${IMAGES_URL}/${product.photo}`} />
      </div>
      <div className={styles.cartProductFormWrapper}>
        <h3 className="cart-product-info">{product.name}</h3>
        <form
          className={styles.cartProductForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.cartProductForm_quantity}>
            <input
              id={product.id}
              value={itemQuantity}
              onChange={(e) => setItemQuantity(e.target.value)}
              onBlur={handleQuantityChange}
            />
            <span
              className={styles.itemPrice}
            >{`Price: $${itemTotalPrice}`}</span>
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
              maxLength={150}
            />
          </div>
          <Button
            buttonText="Save"
            buttonHandler={() => {
              if (itemComment.length > 150) {
                alert('Comment is too long! Use max 150 characters.');
              } else {
                dispatch(addProductComment({ product, comment: itemComment }));
                dispatch(storeCart());
                showToast();
              }
            }}
          />
        </form>
      </div>
      <FontAwesomeIcon
        icon={faTrash}
        onClick={removeItemHandler}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default CartItem;
