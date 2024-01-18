import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchById,
  resetCurrentProduct,
} from '../ProductList/productListSlice';
import { RootState, useAppDispatch } from '../../../store/store';
import { useSelector } from 'react-redux';
import styles from './SingleProduct.module.css';
import { IMAGES_URL } from '../../../API/config';
import Button from '../../common/Button/Button';
import ErrorPage from '../../common/Error/Error';

// [TODO] Add spinner while loading
const SingleProduct = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const currentProduct = useSelector(
    (state: RootState) => state.products.currentProduct,
  );
  const error = useSelector((state: RootState) => state.products.error);
  const [productQuantity, setProductQuantity] = useState<number | string>(1);

  useEffect(() => {
    if (productId) {
      dispatch(fetchById(productId));
    }
    return () => {
      dispatch(resetCurrentProduct()); // reset currentProduct when the component unmounts
    };
  }, [productId, dispatch]);

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

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (currentProduct)
    return (
      <div className={styles.singleProductWrapper}>
        <div className={styles.productNameWrapper}>
          <h2 className="product-name">{currentProduct?.name}</h2>
          <h3 className="product-brand">{currentProduct?.brand}</h3>
        </div>
        <div className={styles.productContent}>
          <div className={styles.imageWrapper}>
            <img
              src={`${IMAGES_URL}/${currentProduct?.photo}`}
              alt="product-main-photo"
            />
          </div>
          <div>
            <p>{currentProduct?.description}</p>
          </div>
        </div>
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
          <Button buttonText="ADD TO CART" buttonHandler={() => {}} />
        </div>
      </div>
    );
};

export default SingleProduct;
