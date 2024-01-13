import { IMAGES_URL } from '../../../API/config';
import Product from '../../../types/Product';

const ProductCard = (productData: Product) => {
  return (
    <div className="productCard">
      <div className="product-info-wrapper">
        <h2 className="product-name">{productData.name}</h2>
        <h3 className="product-brand">{productData.brand}</h3>
      </div>
      <div className="image-wrapper">
        <img
          src={`${IMAGES_URL}/${productData.photo}`}
          alt="product-main-photo"
        />
      </div>
    </div>
  );
};

export default ProductCard;
