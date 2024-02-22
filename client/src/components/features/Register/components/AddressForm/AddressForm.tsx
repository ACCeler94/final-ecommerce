type AddressData = {
  name: string;
  street: string;
  city: string;
  zip: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

const AddressForm = ({
  name,
  street,
  city,
  zip,
  updateFields,
}: AddressFormProps) => {
  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        autoFocus
        required
        type="text"
        value={name}
        onChange={(e) => updateFields({ name: e.target.value })}
        name="name"
        id="name"
        className="user-input"
      />
      <label htmlFor="street">Street</label>
      <input
        required
        type="text"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
        name="street"
        id="street"
        className="user-input"
      />
      <label htmlFor="city">City</label>
      <input
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
        name="city"
        id="city"
        className="user-input"
      />
      <label htmlFor="zip">Zip</label>
      <input
        required
        type="text"
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
        name="zip"
        id="zip"
        className="user-input"
      />
    </>
  );
};

export default AddressForm;
