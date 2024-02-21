import Product from '../../../../../types/Product';
import styles from './CheckoutSummary.module.css';

interface CheckoutSummaryProps {
  cart: {
    quantity: number;
    product: Product;
    comment: string;
    size: string;
    cartItemId: string;
  }[];
  totalPrice: number | null;
}

const CheckoutSummary = ({ cart, totalPrice }: CheckoutSummaryProps) => {
  return (
    <section className={styles.orderSummary}>
      <h1 className={styles.sectionTitle}>Your items:</h1>
      <ul className={styles.orderItemsList}>
        {cart.map((cartObj) => {
          return (
            <li key={cartObj.product.id} className={styles.itemSummary}>
              <h3 className="cart-product-name">{cartObj.product.name}</h3>
              <p>
                Size:{' '}
                <span className={styles.summaryValue}>
                  {cartObj.size.toUpperCase()}
                </span>
              </p>
              <p>
                Quantity:{' '}
                <span className={styles.summaryValue}>{cartObj.quantity}</span>
              </p>
              {cartObj.comment ? (
                <p>
                  Additional comment:{' '}
                  <span className={styles.comment}>{cartObj.comment}</span>
                </p>
              ) : null}
              <p className={styles.subtotal}>
                Subtotal price: ${cartObj.quantity * cartObj.product.price}
              </p>
            </li>
          );
        })}
      </ul>
      <div className={styles.priceSummary}>
        <h3>Total price: ${totalPrice}</h3>
      </div>
    </section>
  );
};

export default CheckoutSummary;
