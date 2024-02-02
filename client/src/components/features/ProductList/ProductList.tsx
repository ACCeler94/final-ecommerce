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
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchAllProducts());

    return () => controller.abort(); // abort fetch request if the component unmounts before it is finished
  }, [dispatch]);

  useEffect(() => {
    if (category) {
      const filteredByCategory = products.filter(
        (product) => product.sex === category.toLowerCase(),
      );
      setProductsToShow(filteredByCategory);
    } else setProductsToShow(products);
  }, [category, products]);

  // return error page if error occurred
  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <section className={styles.productList}>
      <ul>
        {productsToShow.map((product) => {
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
