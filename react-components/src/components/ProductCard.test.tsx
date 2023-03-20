import { render } from '@testing-library/react';
import ProductCard from './ProductCard';

test('renders product card correctly', () => {
  const product = {
    title: 'Product Title',
    thumbnail: 'https://example.com/image.png',
    category: 'Category',
    brand: 'Brand',
    price: 100,
    discountPercentage: 10,
    rating: 4.5,
    stock: 10,
    description: 'Product Description',
  };

  const { getByText, getByAltText } = render(<ProductCard product={product} />);

  expect(getByText(product.title)).toBeInTheDocument();
  expect(getByAltText(product.title)).toHaveAttribute('src', product.thumbnail);
  expect(getByText(`Category: ${product.category}`)).toBeInTheDocument();
  expect(getByText(`Brand: ${product.brand}`)).toBeInTheDocument();
  expect(getByText(`Price: ${product.price}$`)).toBeInTheDocument();
  expect(getByText(`Discount: ${product.discountPercentage}%`)).toBeInTheDocument();
  expect(getByText(`Rating: ${product.rating}`)).toBeInTheDocument();
  expect(getByText(`Stock: ${product.stock}`)).toBeInTheDocument();
});
