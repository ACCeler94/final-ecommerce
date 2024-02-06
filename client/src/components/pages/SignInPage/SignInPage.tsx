import BackButton from '../../common/BackButton/BackButton';
import Container from '../../common/Container/Container';
import SignIn from '../../features/SignIn/SignIn';

const SignInPage = () => {
  return (
    <main className="sign-in">
      <Container>
        <BackButton />
        <SignIn />
      </Container>
    </main>
  );
};

export default SignInPage;
