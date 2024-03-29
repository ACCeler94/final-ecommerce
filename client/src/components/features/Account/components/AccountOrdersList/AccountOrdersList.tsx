import { useEffect, useState } from 'react';
import styles from './AccountOrdersList.module.css';
import { Link } from 'react-router-dom';
import Button from '../../../../common/Button/Button';
import { useUserData } from '../Account/Account';

const AccountOrdersList = () => {
  const [ordersNumberToShow, setOrdersNumberToShow] = useState(3);
  const { orders } = useUserData();

  useEffect(() => {
    if (orders.length < ordersNumberToShow)
      setOrdersNumberToShow(orders.length);
  }, [orders.length, ordersNumberToShow]);

  return (
    <>
      {orders.length === 0 ? (
        <div className={styles.noOrdersText}>You have no orders to show.</div>
      ) : (
        <div className={styles.ordersListWrapper}>
          <ul className={styles.ordersList}>
            {orders.slice(0, ordersNumberToShow).map((order) => {
              return (
                <li key={order.id} className={styles.orderItem}>
                  <details className={styles.orderData}>
                    <summary className={styles.orderSummary}>
                      <span>Order number:</span>
                      <h2 className={styles.orderId}>{order.id}</h2>
                    </summary>
                    <ul className={styles.orderDetails}>
                      <h3>Products:</h3>
                      {order.products.map((productItem, index) => (
                        <li key={index}>
                          <div className={styles.productInfo}>
                            <span className={styles.productLink}>
                              <Link to={`/product/${productItem.product.id}`}>
                                {productItem.product.name}
                              </Link>
                            </span>
                            Size:
                            <span className={styles.infoSemiBold}>
                              {productItem.size.toUpperCase()}
                            </span>
                          </div>
                          <div>
                            Quantity:
                            <span className={styles.infoSemiBold}>
                              {productItem.quantity}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <p>
                      Order Total:
                      <span className={styles.infoSemiBold}>
                        ${order.orderTotal}
                      </span>
                    </p>
                  </details>
                </li>
              );
            })}
          </ul>
          {ordersNumberToShow < orders.length ? (
            <Button
              buttonText="Show more"
              buttonHandler={() =>
                setOrdersNumberToShow(ordersNumberToShow + 3)
              }
            />
          ) : null}
        </div>
      )}
    </>
  );
};

export default AccountOrdersList;
