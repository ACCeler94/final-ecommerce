import Button from '../../common/Button/Button';
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
  return (
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
        <label htmlFor="shippingStreet">Shipping Street*</label>
        <input
          name="shippingStreet"
          id="shippingStreet"
          required
          value={shippingStreet}
          onChange={(e) => setShippingStreet(e.target.value)}
        />
        <label htmlFor="shippingCity">Shipping City*</label>
        <input
          name="shippingCity"
          id="shippingCity"
          required
          value={shippingCity}
          onChange={(e) => setShippingCity(e.target.value)}
        />
        <label htmlFor="shippingZip">Shipping Zip*</label>
        <input
          name="shippingZip"
          id="shippingZip"
          required
          value={shippingZip}
          onChange={(e) => setShippingZip(e.target.value)}
        />
        {/* Submit handler is assigned to a form, button is getting type submit by default */}
        <Button buttonText="Place Order" />
      </form>
    </section>
  );
};

export default CheckoutForm;
