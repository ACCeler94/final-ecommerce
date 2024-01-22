import { useSelector } from 'react-redux';
import styles from './Checkout.module.css';
import { RootState } from '../../../store/store';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../../common/Button/Button';
import Order from '../../../types/Order';
import ordersAPI from '../../../API/ordersApi';

const Checkout = () => {
  const cart = useSelector((state: RootState) => state.cart.shoppingCart);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  }, [navigate, cart]);

  const orderSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !address) {
      alert('Please fill all required fields!');
    } else {
      const orderObj: Order = {
        userData: { name, email, address },
        products: cart,
      };
      ordersAPI
        .placeOrder(orderObj)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="checkout-wrapper">
      <section className={styles.orderSummary}>
        <ul>
          {cart.map((cartObj) => {
            return (
              <li key={cartObj.product.id} className={styles.itemSummary}>
                <h3 className="cart-product-name">{cartObj.product.name}</h3>
                <span>Quantity: {cartObj.quantity}</span>
                <span className={styles.subtotal}>
                  Subtotal price: ${cartObj.quantity * cartObj.product.price}
                </span>
              </li>
            );
          })}
        </ul>
        <div className={styles.priceSummary}>
          <h3>Total price: ${totalPrice}</h3>
        </div>
      </section>
      <section className={styles.checkoutFormWrapper}>
        <form className={styles.userDataForm} onSubmit={orderSubmitHandler}>
          <label htmlFor="name">First and last name*</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email address*</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="address">Shipping address*</label>
          <textarea
            name="address"
            id="address"
            rows={5}
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          {/* Submit handler is assigned to a form, button is getting type submit by default */}
          <Button buttonText="Place Order" buttonHandler={() => {}} />
        </form>
      </section>
    </div>
  );
};

export default Checkout;
