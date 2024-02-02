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
import { addToCart, recalculateTotalPrice, storeCart } from '../Cart/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuantityField from '../../common/QuantityField/QuantityField';
import SizeMenu from '../../common/SizeMenu/SizeMenu';
import { nanoid } from 'nanoid';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';

// [TODO] Add spinner while loading
const SingleProduct = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const currentProduct = useSelector(
    (state: RootState) => state.products.currentProduct,
  );
  const error = useSelector((state: RootState) => state.products.error);
  const status = useSelector((state: RootState) => state.products.status);

  const sizesArr = currentProduct ? currentProduct.sizes.split(', ') : [];

  const [productQuantity, setProductQuantity] = useState<number | string>(1);
  const [productSize, setProductSize] = useState<string>('');

  useEffect(() => {
    const controller = new AbortController();
    if (productId) {
      dispatch(fetchById(productId));
    }
    return () => {
      controller.abort(); // abort fetch request if the component unmounts before it is finished
      dispatch(resetCurrentProduct()); // reset currentProduct when the component unmounts
    };
  }, [productId, dispatch]);

  const showToast = () =>
    toast.success('Item added to cart.', {
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
        product: currentProduct,
        size: productSize,
      }),
    );
    dispatch(recalculateTotalPrice());
    dispatch(storeCart());
    showToast();
  };

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (status === 'pending') {
    return (
      <section>
        <LoadingSpinner />
      </section>
    );
  }

  if (currentProduct)
    return (
      <section className={styles.singleProductWrapper}>
        <div className={styles.productContent}>
          <div className={styles.imageWrapper}>
            <img
              src={`${IMAGES_URL}/${currentProduct.photo}`}
              alt="product-main-photo"
            />
          </div>
          <div className={styles.productInfoContainer}>
            <div className={styles.productInfo}>
              <div className={styles.productNameWrapper}>
                <h2 className="product-name">{currentProduct.name}</h2>
                <h3 className="product-brand">{currentProduct.brand}</h3>
              </div>
              <p>{currentProduct.description}</p>
            </div>
            <div className={styles.cartButtonsWrapper}>
              <div className={styles.productPriceAndSize}>
                <div className={styles.priceWrapper}>
                  Price: <h4>${currentProduct.price}</h4>
                </div>
                <span className={styles.sizeLabel}>Size:</span>
                <SizeMenu
                  sizes={sizesArr}
                  changeHandler={(size) => setProductSize(size)}
                  productId={currentProduct.id}
                  selectedValue={productSize}
                />
              </div>
              <div className={styles.quantityFieldContainer}>
                <QuantityField
                  quantity={productQuantity}
                  changeQuantity={(value: number | string) =>
                    setProductQuantity(value)
                  }
                  productId={productId ? productId : ''}
                />
                <Button
                  buttonText="Add to Cart"
                  buttonHandler={addToCartHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default SingleProduct;
