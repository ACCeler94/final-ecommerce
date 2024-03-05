import BackButton from '../../common/BackButton/BackButton';
import Container from '../../common/Container/Container';
import Register from '../../features/Register/components/Register/Register';

const RegisterPage = () => {
  return (
    <main className="sign-in">
      <Container>
        <BackButton />
        <Register />
      </Container>
    </main>
  );
};

export default RegisterPage;
