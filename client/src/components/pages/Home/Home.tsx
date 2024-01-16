import Container from '../../common/Container/Container';
import ProductList from '../../features/ProductList/ProductList';

const Home = () => {
  return (
    <main>
      <Container>
        <h1>All Products</h1>
        <ProductList />
      </Container>
    </main>
  );
};

export default Home;
