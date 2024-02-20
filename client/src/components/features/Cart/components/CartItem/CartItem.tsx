import { useEffect, useState } from 'react';
import Product from '../../../../../types/Product';
import Button from '../../../../common/Button/Button';
import { useAppDispatch } from '../../../../../store/store';
import {
  addProductComment,
  changeProductQuantity,
  changeProductSize,
  recalculateTotalPrice,
  removeFromCart,
  storeCart,
} from '../../cartSlice';
import { IMAGES_URL } from '../../../../../API/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './CartItem.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuantityField from '../../../../common/QuantityField/QuantityField';
import SizeMenu from '../../../../common/SizeMenu/SizeMenu';

interface CartItemProps {
  product: Product;
  quantity: number;
  size: string;
  cartItemId: string;
}

const CartItem = ({ product, quantity, size, cartItemId }: CartItemProps) => {
  const [itemQuantity, setItemQuantity] = useState<number | string>(quantity);
  const [itemComment, setItemComment] = useState('');
  const [itemTotalPrice, setItemTotalPrice] = useState(
    quantity * product.price,
  );
  const [productSize, setProductSize] = useState<string>(size);
  const dispatch = useAppDispatch();
  const sizesArr = product.sizes.split(', ');

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

  const removeItemHandler = () => {
    dispatch(removeFromCart({ cartItemId }));
    dispatch(recalculateTotalPrice());
    dispatch(storeCart());
  };

  useEffect(() => {
    setItemTotalPrice(quantity * product.price);
  }, [quantity, product]);

  useEffect(() => {
    if (
      itemQuantity &&
      typeof itemQuantity === 'number' &&
      itemQuantity !== quantity // check for change to prevent unnecessary dispatches
    ) {
      dispatch(changeProductQuantity({ quantity: itemQuantity, cartItemId }));
      dispatch(storeCart());
    }
  }, [dispatch, itemQuantity, cartItemId, quantity]);

  useEffect(() => {
    if (productSize !== size) {
      // check for change to prevent unnecessary dispatches
      dispatch(changeProductSize({ cartItemId, newSize: productSize }));
      dispatch(storeCart());
    }
  }, [dispatch, productSize, cartItemId, size]);

  return (
    <div className={styles.cartProduct}>
      <div className={styles.cartProductImageWrapper}>
        <img src={`${IMAGES_URL}/${product.photo}`} />
      </div>
      <div className={styles.cartProductFormWrapper}>
        <h3 className="cart-product-info">{product.name}</h3>
        <form
          className={styles.cartProductForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.cartProductFormQuantity}>
            <SizeMenu
              productId={product.id}
              sizes={sizesArr}
              changeHandler={(size) => setProductSize(size)}
              selectedValue={productSize}
            />
            <div className={styles.quantityFieldContainer}>
              <QuantityField
                productId={product.id}
                quantity={itemQuantity}
                changeQuantity={(value: number | string) =>
                  setItemQuantity(value)
                }
              />
            </div>
            <span
              className={styles.itemPrice}
            >{`Price: $${itemTotalPrice}`}</span>
          </div>
          <div className={styles.cartProductFormComment}>
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
                dispatch(
                  addProductComment({ cartItemId, comment: itemComment }),
                );
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
