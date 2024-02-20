import BackButton from '../../common/BackButton/BackButton';
import Container from '../../common/Container/Container';
import Checkout from '../../features/checkout/components/Checkout/Checkout';

const CheckoutPage = () => {
  return (
    <main className="checkout-page">
      <Container>
        <BackButton />
        <Checkout />
      </Container>
    </main>
  );
};

export default CheckoutPage;
