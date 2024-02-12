type AddressData = {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

const AddressForm = ({
  name,
  street,
  city,
  state,
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
      />
      <label htmlFor="street">Street</label>
      <input
        required
        type="text"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
        name="street"
        id="street"
      />
      <label htmlFor="city">City</label>
      <input
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
        name="city"
        id="city"
      />
      <label htmlFor="state">State</label>
      <input
        required
        type="text"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
        name="state"
        id="state"
      />
      <label htmlFor="zip">Zip</label>
      <input
        required
        type="text"
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
        name="zip"
        id="zip"
      />
    </>
  );
};

export default AddressForm;
