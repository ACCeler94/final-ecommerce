import BackButton from '../../common/BackButton/BackButton';
import Container from '../../common/Container/Container';
import SingleProduct from '../../features/singleProduct/components/SignleProduct/SingleProduct';

const SingleProductPage = () => {
  return (
    <main className="single-product">
      <Container>
        <BackButton />
        <SingleProduct />
      </Container>
    </main>
  );
};

export default SingleProductPage;
