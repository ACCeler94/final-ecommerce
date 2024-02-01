import { Link } from 'react-router-dom';
import { IMAGES_URL } from '../../../API/config';
import Product from '../../../types/Product';
import styles from './ProductCard.module.css';
import { useState } from 'react';
import Button from '../../common/Button/Button';
import { useAppDispatch } from '../../../store/store';
import { addToCart, recalculateTotalPrice, storeCart } from '../Cart/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuantityField from '../../common/QuantityField/QuantityField';
import SizeMenu from '../../common/SizeMenu/SizeMenu';
import { nanoid } from 'nanoid';

const ProductCard = (productData: Product) => {
  const sizesArr = productData.sizes.split(', ');

  const [productQuantity, setProductQuantity] = useState<number | string>(1);
  const [productSize, setProductSize] = useState<string>(sizesArr[0]);
  const dispatch = useAppDispatch();

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
    <div className={styles.productCard}>
      <Link to={`/product/${productData.id}`}>
        <div className={styles.imageWrapper}>
          <img
            src={`${IMAGES_URL}/${productData.photo}`}
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
        <Button buttonText="Add to cart" buttonHandler={addToCartHandler} />
      </div>
    </div>
  );
};

export default ProductCard;
