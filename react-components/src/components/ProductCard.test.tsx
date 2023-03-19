import { render, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';

const mockProduct = {
  id: 1,
  title: 'Product Title',
  thumbnail: 'https://example.com/image.jpg',
  category: 'Category',
  brand: 'Brand',
  price: 100,
  discountPercentage: 20,
  rating: 4.5,
  stock: 10,
  description: 'Product Description',
};

describe('ProductCard', () => {
  it('should render product details', () => {
    const { getByText, getByAltText } = render(<ProductCard product={mockProduct} />);

    expect(getByText('Product Title')).toBeInTheDocument();
    expect(getByAltText('Product Title')).toBeInTheDocument();
    expect(getByText('Category: Category')).toBeInTheDocument();
    expect(getByText('Brand: Brand')).toBeInTheDocument();
    expect(getByText('Price: 100$')).toBeInTheDocument();
    expect(getByText('Discount: 20%')).toBeInTheDocument();
    expect(getByText('Rating: 4.5')).toBeInTheDocument();
    expect(getByText('Stock: 10')).toBeInTheDocument();
    expect(getByText('Show Details')).toBeInTheDocument();
  });

  it('should toggle product details on button click', () => {
    const { getByText } = render(<ProductCard product={mockProduct} />);

    fireEvent.click(getByText('Show Details'));

    expect(getByText('Hide Details')).toBeInTheDocument();
    expect(getByText('Product Description')).toBeInTheDocument();

    fireEvent.click(getByText('Hide Details'));

    expect(getByText('Show Details')).toBeInTheDocument();
    expect(() => getByText('Product Description')).toThrow();
  });
});
