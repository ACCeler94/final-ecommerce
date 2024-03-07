interface SizeMenuProps {
    changeHandler: (size: string) => void;
    sizes: string[];
    productId: string;
    selectedValue: string;
}
declare const SizeMenu: ({ changeHandler, sizes, productId, selectedValue, }: SizeMenuProps) => import("react/jsx-runtime").JSX.Element;
export default SizeMenu;
