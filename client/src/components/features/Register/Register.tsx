import { FormEvent, useState } from 'react';
import styles from './Register.module.css';
import { useMultistepForm } from '../../../utils/useMultistepForm';
import Button from '../../common/Button/Button';
import UserForm from '../UserForm/UserForm';
import AddressForm from '../AddressForm/AddressForm';

type registerFormData = {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const INITIAL_DATA: registerFormData = {
  firstName: '',
  lastName: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function Register() {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (fields: Partial<registerFormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };
  const { step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
  ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert('Successful Account Creation');
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={onSubmit}>
        {step}
        {!isFirstStep && (
          <button type="button" onClick={back}>
            Back
          </button>
        )}
        <Button buttonText={isLastStep ? 'Finish' : 'Next'} />
      </form>
    </div>
  );
}

export default Register;
