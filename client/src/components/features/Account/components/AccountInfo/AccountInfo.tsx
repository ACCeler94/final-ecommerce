import { useUserData } from '../Account/Account';
import styles from './AccountInfo.module.css';

const AccountInfo = () => {
  const { name, email, street, zip, city } = useUserData();

  return (
    <div className={styles.infoWrapper}>
      <p>
        Name: <span className={styles.infoValue}>{name}</span>
      </p>
      <p>
        Email: <span className={styles.infoValue}>{email}</span>
      </p>
      <p>
        Street: <span className={styles.infoValue}>{street}</span>
      </p>
      <p>
        Zip-Code: <span className={styles.infoValue}>{zip}</span>
      </p>
      <p>
        City: <span className={styles.infoValue}>{city}</span>
      </p>
    </div>
  );
};

export default AccountInfo;
