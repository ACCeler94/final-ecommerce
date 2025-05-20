import BackButton from '../../common/BackButton/BackButton';
import Container from '../../common/Container/Container';
import Cart from '../../features/Cart/components/Cart/Cart';

const CartPage = () => {
  return (
    <main className="cart">
      <Container>
        <BackButton />
        <Cart />
      </Container>
    </main>
  );
};

export default CartPage;
