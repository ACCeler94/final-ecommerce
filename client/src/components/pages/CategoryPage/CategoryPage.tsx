import Container from '../../common/Container/Container';
import ProductList from '../../features/ProductList/ProductList';

interface CategoryPageProps {
  category: string;
}

const CategoryPage = ({ category }: CategoryPageProps) => {
  return (
    <main>
      <Container>
        <h1>{category} Products</h1>
        <ProductList category={category} />
      </Container>
    </main>
  );
};

export default CategoryPage;
