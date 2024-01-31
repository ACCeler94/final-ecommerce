import styles from './SizeMenu.module.css';

interface SizeMenuProps {
  changeHandler: (size: string) => void;
  sizes: string[];
  productId: string;
  selectedValue: string;
}

const SizeMenu = ({
  changeHandler,
  sizes,
  productId,
  selectedValue,
}: SizeMenuProps) => {
  return (
    <select
      id={`size-select-${productId}`}
      className={styles.sizeSelect}
      onChange={(e) => changeHandler(e.target.value)}
      value={selectedValue}
    >
      {sizes.map((size) => {
        return (
          <option value={size} key={size}>
            {size.toUpperCase()}
          </option>
        );
      })}
    </select>
  );
};

export default SizeMenu;
