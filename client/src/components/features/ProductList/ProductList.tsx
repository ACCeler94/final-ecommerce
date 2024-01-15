import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store/store';
import { useEffect } from 'react';
import { fetchAllProducts } from './productListSlice';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.css';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  if (error) {
    return (
      <div>
        <h2>Error</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <section className={styles.productList}>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard {...product} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProductList;
