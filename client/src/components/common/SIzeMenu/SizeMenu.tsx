interface sizeMenuProps {
  changeHandler: (size: string) => void;
  sizes: string;
}

const sizeMenu = ({ changeHandler, sizes }: sizeMenuProps) => {
  const sizesArr = sizes.split(', ');

  return (
    <select id="size-select" onChange={(e) => changeHandler(e.target.value)}>
      {sizesArr.map((size) => {
        return <option value={size}>{size}</option>;
      })}
    </select>
  );
};

export default sizeMenu;
