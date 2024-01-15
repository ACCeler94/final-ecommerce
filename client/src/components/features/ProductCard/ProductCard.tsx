import { IMAGES_URL } from '../../../API/config';
import Product from '../../../types/Product';
import styles from './ProductCard.module.css';

const ProductCard = (productData: Product) => {
  return (
    <div className={styles.productCard}>
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
      <div className={styles.cartWrapper}></div>
    </div>
  );
};

export default ProductCard;
