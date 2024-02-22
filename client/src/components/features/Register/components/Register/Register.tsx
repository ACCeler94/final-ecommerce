import { FormEvent, useCallback, useEffect, useState } from 'react';
import styles from './Register.module.css';
import { useMultistepForm } from '../../../../../utils/useMultistepForm';
import Button from '../../../../common/Button/Button';
import UserForm from '../UserForm/UserForm';
import AddressForm from '../AddressForm/AddressForm';
import { RootState, useAppDispatch } from '../../../../../store/store';
import { useSelector } from 'react-redux';
import { register, resetState } from '../../registerSlice';
import Error from '../../../../common/Error/Error';
import { Statuses } from '../../../productList/productListSlice';
import RegisterSuccessPage from '../../../../pages/RegisterSuccessPage/RegisterSuccessPage';

type registerFormData = {
  name: string;
  street: string;
  city: string;
  zip: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const INITIAL_DATA: registerFormData = {
  name: '',
  street: '',
  city: '',
  zip: '',
  email: '',
  password: '',
  repeatPassword: '',
};

function Register() {
  const [data, setData] = useState(INITIAL_DATA);
  const [isPassValid, setIsPassValid] = useState(true);
  const dispatch = useAppDispatch();
  const status = useSelector((state: RootState) => state.register.status);
  const error = useSelector((state: RootState) => state.register.error);

  const validatePassword = useCallback(() => {
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (data.password.match(passRegex) && data.password === data.repeatPassword)
      return true;
    else return false;
  }, [data.password, data.repeatPassword]);

  useEffect(() => {
    // reset state when the component mounts in case of previous failure
    dispatch(resetState());
  }, [dispatch]);

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
    // check if all values are present before dispatch
    if (
      data.name &&
      data.street &&
      data.city &&
      data.zip &&
      data.email &&
      data.password &&
      data.repeatPassword
    ) {
      dispatch(register(data));
    } else {
      alert('Please fill all required fields!');
    }
  };

  if (error) return <Error error={error} />;

  if (status === Statuses.Success) return <RegisterSuccessPage />;

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
        <div className={styles.buttonsWrapper}>
          {!isFirstStep && (
            <div className={styles.backButtonWrapper}>
              <Button type="button" buttonHandler={back} buttonText="Back" />
            </div>
          )}
          <Button buttonText={isLastStep ? 'Finish' : 'Next'} />
        </div>
      </form>
    </div>
  );
}

export default Register;
