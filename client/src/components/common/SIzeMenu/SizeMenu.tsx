import styles from './SizeMenu.module.css';
import { nanoid } from 'nanoid';

interface SizeMenuProps {
  changeHandler: (size: string) => void;
  sizes: string;
  productId: string;
}

const SizeMenu = ({ changeHandler, sizes, productId }: SizeMenuProps) => {
  const sizesArr = sizes.split(', ');

  return (
    <select
      id={`size-select-${productId}`}
      className={styles.sizeSelect}
      onChange={(e) => changeHandler(e.target.value)}
    >
      {sizesArr.map((size) => {
        return (
          <option value={size} key={nanoid()}>
            {size.toUpperCase()}
          </option>
        );
      })}
    </select>
  );
};

export default SizeMenu;
