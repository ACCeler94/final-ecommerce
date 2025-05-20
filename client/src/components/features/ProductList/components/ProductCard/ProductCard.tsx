import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { THUMBNAILS_URL } from '../../../../../API/config';
import { useAppDispatch } from '../../../../../store/store';
import Product from '../../../../../types/Product';
import Button from '../../../../common/Button/Button';
import QuantityField from '../../../../common/QuantityField/QuantityField';
import SizeMenu from '../../../../common/SizeMenu/SizeMenu';
import {
  addToCart,
  recalculateTotalPrice,
  storeCart,
} from '../../../Cart/cartSlice';
import styles from './ProductCard.module.css';

const ProductCard = (productData: Product) => {
  const sizesArr = productData.sizes.split(', ');

  const [productQuantity, setProductQuantity] = useState<number | string>(1);
  const [productSize, setProductSize] = useState<string>(sizesArr[0]);
  const dispatch = useAppDispatch();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const showToast = () =>
    toast.success('Item added to cart', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'colored',
    });

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        cartItemId: nanoid(),
        quantity: productQuantity,
        product: productData,
        size: productSize,
      }),
    );
    dispatch(recalculateTotalPrice());
    dispatch(storeCart());
    showToast();
  };

  return (
    <div
      className={`${styles.productCard} ${isFocused ? styles.focused : ''}`}
      tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <Link to={`/product/${productData.id}`}>
        <div className={styles.imageWrapper}>
          <img
            src={`${THUMBNAILS_URL}/${productData.photo}`}
            alt="product-main-photo"
          />
        </div>
        <div className={styles.productInfoWrapper}>
          <h2 className="product-name">{productData.name}</h2>
          <h3 className="product-brand">{productData.brand}</h3>
          <h4 className="product-price">${productData.price}</h4>
        </div>
      </Link>
      <div className={styles.cartButtonsWrapper}>
        <div className={styles.sizeAndQuantityWrapper}>
          <SizeMenu
            sizes={sizesArr}
            changeHandler={(size) => setProductSize(size)}
            productId={productData.id}
            selectedValue={productSize}
          />
          <QuantityField
            productId={productData.id}
            changeQuantity={(value: number | string) =>
              setProductQuantity(value)
            }
            quantity={productQuantity}
          />
        </div>
        <Button buttonText="Add to Cart" buttonHandler={addToCartHandler} />
      </div>
    </div>
  );
};

export default ProductCard;
