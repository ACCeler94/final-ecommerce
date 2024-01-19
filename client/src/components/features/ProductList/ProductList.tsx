import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store/store';
import { useEffect, useState } from 'react';
import { fetchAllProducts } from './productListSlice';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.css';
import ErrorPage from '../../common/Error/Error';
import Product from '../../../types/Product';

interface ProductListProps {
  category?: string;
}

const ProductList = ({ category }: ProductListProps) => {
  const dispatch = useAppDispatch();
  const products = useSelector(
    (state: RootState) => state.products.productList,
  );
  const error = useSelector((state: RootState) => state.products.error);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (category) {
      const filteredByCategory = products.filter(
        (product) => product.sex === category.toLowerCase(),
      );
      setFilteredProducts(filteredByCategory);
    }
  }, [category, products]);

  // return error page if error occurred
  if (error) {
    return <ErrorPage error={error} />;
  }

  // return categorized products
  if (category) {
    return (
      <section className={styles.productList}>
        <ul>
          {filteredProducts.map((product) => {
            return (
              <li key={product.id}>
                <ProductCard {...product} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  // default return
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
