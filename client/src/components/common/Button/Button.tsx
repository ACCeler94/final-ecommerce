import styles from './Button.module.css';

interface ButtonProps {
  buttonHandler: () => void;
  buttonText: string;
}

const Button = ({ buttonHandler, buttonText }: ButtonProps) => {
  return (
    <button className={styles.buttonBlack} onClick={buttonHandler}>
      {buttonText}
    </button>
  );
};

export default Button;
