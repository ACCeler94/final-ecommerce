import { Link } from 'react-router-dom';
import { IMAGES_URL } from '../../../API/config';
import Product from '../../../types/Product';
import styles from './ProductCard.module.css';
import { useState } from 'react';
import Button from '../../common/Button/Button';
import { useAppDispatch } from '../../../store/store';
import { addToCart } from '../Cart/CartSlice';

const ProductCard = (productData: Product) => {
  const [productQuantity, setProductQuantity] = useState<number | string>(1);
  const dispatch = useAppDispatch();

  const handleQuantityChange = (value: string) => {
    if (value === '') {
      setProductQuantity(value);
    } else {
      const numValue = Number(value);
      if (numValue < 0) setProductQuantity(0);
      else if (numValue > 99) setProductQuantity(99);
      else setProductQuantity(numValue);
    }
  };

  const addToCartHandler = () => {
    dispatch(addToCart({ quantity: productQuantity, product: productData }));
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
        <input
          type="number"
          id="product-quantity"
          name="product-quantity"
          min="0"
          max="99"
          value={productQuantity}
          onChange={(e) => handleQuantityChange(e.target.value)}
        />
        <Button buttonText="ADD TO CART" buttonHandler={addToCartHandler} />
      </div>
    </div>
  );
};

export default ProductCard;
