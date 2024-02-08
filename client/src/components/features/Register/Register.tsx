import { FormEvent, useEffect, useState } from 'react';
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
  const [passMatch, setPassMatch] = useState(false);

  useEffect(() => {
    // check if passwords match to display warning and stop submit
    setPassMatch(data.password === data.confirmPassword);
  }, [data.password, data.confirmPassword]);

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
    if (!passMatch) return; // return nothing if passwords do not match

    if (!isLastStep) return next();
    alert('Successful Account Creation');
  };

  return (
    <div className={styles.formWrapper}>
      <h1>Register</h1>
      <form onSubmit={onSubmit} className={styles.registerForm}>
        {step}
        {!passMatch && (
          <span className={styles.dangerText}>Passwords do not match!</span>
        )}
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
