interface SizeMenuProps {
  changeHandler: (size: string) => void;
  sizes: string;
}

const SizeMenu = ({ changeHandler, sizes }: SizeMenuProps) => {
  const sizesArr = sizes.split(', ');

  return (
    <select id="size-select" onChange={(e) => changeHandler(e.target.value)}>
      {sizesArr.map((size) => {
        return <option value={size}>{size}</option>;
      })}
    </select>
  );
};

export default SizeMenu;
