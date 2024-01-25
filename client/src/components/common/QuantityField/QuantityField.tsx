import styles from './QuantityField.module.css';

interface QuantityFieldProps {
  productId: string;
  quantity: number | string;
  changeQuantity: (value: number | string) => void;
}

const QuantityField = ({
  productId,
  quantity,
  changeQuantity,
}: QuantityFieldProps) => {
  const changeHandler = (value: string | number) => {
    if (value === '') changeQuantity('');
    // allow for leaving an empty field while typing - it will be corrected onBlur
    else {
      const numValue = Number(value);
      if (numValue <= 0) changeQuantity(1);
      else if (numValue > 99) changeQuantity(99);
      else changeQuantity(numValue);
    }
  };

  const blurHandler = (value: number | string) => {
    if (value === '') changeQuantity(1); // change to default value of 1 in the input field if the user leaves the input empty
  };

  const decreaseQuantity = () => {
    if (typeof quantity === 'number') {
      changeHandler(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (typeof quantity === 'number') {
      changeHandler(quantity + 1);
    }
  };

  return (
    <div className={styles.quantityWrapper}>
      <button className={styles.quantityButton} onClick={decreaseQuantity}>
        -
      </button>
      <input
        type="number"
        id={`quantity-${productId}`}
        name="product-quantity"
        min="1"
        max="99"
        value={quantity}
        onChange={(e) => changeHandler(e.target.value)}
        onBlur={(e) => blurHandler(e.target.value)}
      />
      <button className={styles.quantityButton} onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
};

export default QuantityField;
