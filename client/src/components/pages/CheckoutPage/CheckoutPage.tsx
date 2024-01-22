import Container from '../../common/Container/Container';
import Checkout from '../../features/Checkout/Checkout';

const CheckoutPage = () => {
  return (
    <main className="checkout-page">
      <Container>
        <Checkout />
      </Container>
    </main>
  );
};

export default CheckoutPage;
