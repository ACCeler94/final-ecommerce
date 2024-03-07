type AddressData = {
    name: string;
    street: string;
    city: string;
    zip: string;
};
type AddressFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void;
};
declare const AddressForm: ({ name, street, city, zip, updateFields, }: AddressFormProps) => import("react/jsx-runtime").JSX.Element;
export default AddressForm;
