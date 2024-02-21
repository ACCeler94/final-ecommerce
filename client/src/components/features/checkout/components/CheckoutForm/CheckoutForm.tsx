import { useState } from 'react';
import Button from '../../../../common/Button/Button';
import styles from './CheckoutFrom.module.css';

interface CheckoutFormProps {
  orderSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  shippingStreet: string;
  setShippingStreet: React.Dispatch<React.SetStateAction<string>>;
  shippingCity: string;
  setShippingCity: React.Dispatch<React.SetStateAction<string>>;
  shippingZip: string;
  setShippingZip: React.Dispatch<React.SetStateAction<string>>;
}

const CheckoutForm = ({
  name,
  setName,
  email,
  setEmail,
  shippingStreet,
  setShippingStreet,
  shippingCity,
  setShippingCity,
  shippingZip,
  setShippingZip,
  orderSubmitHandler,
}: CheckoutFormProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <section className={styles.checkoutFormWrapper}>
      <h1 className={styles.sectionTitle}>Shipping Data</h1>
      <form className={styles.userDataForm} onSubmit={orderSubmitHandler}>
        <div className={styles.userDataFormCheckbox}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            id="customAddressCheckbox"
            name="customAddressCheckbox"
          />
          <label htmlFor="customAddressCheckbox">
            Ship to a different address
          </label>
        </div>
        <label htmlFor="name">First and last name*</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={!isChecked}
        />
        <label htmlFor="email">Email address*</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!isChecked}
        />
        <label htmlFor="shippingStreet">Shipping Street*</label>
        <input
          name="shippingStreet"
          id="shippingStreet"
          required
          value={shippingStreet}
          onChange={(e) => setShippingStreet(e.target.value)}
          disabled={!isChecked}
        />
        <label htmlFor="shippingCity">Shipping City*</label>
        <input
          name="shippingCity"
          id="shippingCity"
          required
          value={shippingCity}
          onChange={(e) => setShippingCity(e.target.value)}
          disabled={!isChecked}
        />
        <label htmlFor="shippingZip">Shipping Zip*</label>
        <input
          name="shippingZip"
          id="shippingZip"
          required
          value={shippingZip}
          onChange={(e) => setShippingZip(e.target.value)}
          disabled={!isChecked}
        />
        {/* Submit handler is assigned to a form, button is getting type submit by default */}
        <Button buttonText="Place Order" />
      </form>
    </section>
  );
};

export default CheckoutForm;
