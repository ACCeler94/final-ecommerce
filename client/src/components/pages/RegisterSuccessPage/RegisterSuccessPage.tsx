import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Container from '../../common/Container/Container';

const RegisterSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <main className="checkout-page">
      <Container>
        <h1>You have been successfully registered!</h1>
        <Button buttonText="Login" buttonHandler={() => navigate('success')} />
      </Container>
    </main>
  );
};

export default RegisterSuccessPage;
