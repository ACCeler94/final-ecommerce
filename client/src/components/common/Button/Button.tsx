import styles from './Button.module.css';

interface ButtonProps {
  buttonHandler?: () => void;
  buttonText: string;
  type?: 'submit' | 'reset' | 'button';
}

const Button = ({
  buttonHandler,
  buttonText,
  type = 'submit',
}: ButtonProps) => {
  return (
    <button className={styles.buttonBlack} onClick={buttonHandler} type={type}>
      {buttonText}
    </button>
  );
};

export default Button;
