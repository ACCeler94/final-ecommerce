import { FormEvent, useCallback, useEffect, useState } from 'react';
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
  const [isPassValid, setIsPassValid] = useState(true);

  const validatePassword = useCallback(() => {
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (
      data.password.match(passRegex) &&
      data.password === data.confirmPassword
    )
      return true;
    else return false;
  }, [data.password, data.confirmPassword]);

  useEffect(() => {
    setIsPassValid(validatePassword());
  }, [validatePassword]);

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
    if (!validatePassword()) return; // return nothing if passwords do not match

    if (!isLastStep) return next();
    alert('Successful Account Creation');
  };

  return (
    <div className={styles.formWrapper}>
      <h1>Register</h1>
      <form onSubmit={onSubmit} className={styles.registerForm}>
        {step}
        {!isPassValid && (
          <span className={styles.dangerText}>
            Passwords do not match or have invalid format!
          </span>
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
