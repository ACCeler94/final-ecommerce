import Container from '../../common/Container/Container';
import ProductList from '../../features/productList/components/ProductList/ProductList';

interface CategoryPageProps {
  category: string;
}

const CategoryPage = ({ category }: CategoryPageProps) => {
  return (
    <main className="category">
      <Container>
        <h1>{category} Products</h1>
        <ProductList category={category} />
      </Container>
    </main>
  );
};

export default CategoryPage;
