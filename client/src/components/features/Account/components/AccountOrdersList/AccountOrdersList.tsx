import { useEffect, useState } from 'react';
import { AccountData } from '../../../../../types/AccountData';
import styles from './AccountOrdersList.module.css';

interface OrdersListProps {
  orders: AccountData['orders'] | [];
}

const AccountOrdersList = ({ orders }: OrdersListProps) => {
  const [ordersNumberToShow, setOrdersNumberToShow] = useState(3);

  useEffect(() => {
    if (orders.length < ordersNumberToShow)
      setOrdersNumberToShow(orders.length);
  }, [orders.length, ordersNumberToShow]);

  return (
    <>
      <h2>Your orders</h2>
      <div>
        {orders.length === 0 ? (
          'You have no orders to show.'
        ) : (
          <ul>
            {orders.slice(0, ordersNumberToShow).map((order) => {
              return (
                <li key={order.id}>
                  <div className={styles.orderData}>
                    <h2 className={styles.orderId}>{order.id}</h2>
                    <ul>
                      <h3>Products:</h3>
                      {order.products.map((productItem) => (
                        <li>
                          <span className={styles.infoBold}>
                            {productItem.product.name}
                          </span>
                          Size:
                          <span className={styles.infoBold}>
                            {productItem.size}
                          </span>
                          Quantity:
                          <span className={styles.infoBold}>
                            {productItem.quantity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p>
                    Order Total:
                    <span className={styles.infoBold}>{order.orderTotal}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default AccountOrdersList;
