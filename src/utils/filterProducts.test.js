import { filterProducts } from './filterProducts';

const mockProducts = [
  { id: 1, name: 'Wireless Headphones', category: 'Electronics', brand: 'Brand A', price: 99.99, rating: 4.5 },
  { id: 2, name: 'Bluetooth Speaker', category: 'Electronics', brand: 'Brand B', price: 49.99, rating: 4.0 },
  { id: 3, name: 'Running Shoes', category: 'Footwear', brand: 'Brand C', price: 59.99, rating: 4.2 },
];

describe('filterProducts Function', () => {
  test('filters products by category, brand, price range, and rating', () => {
    const filters = {
      category: 'Electronics',
      brand: 'Brand A',
      priceRange: [0, 100],
      rating: 4,
    };

    const filteredProducts = filterProducts(mockProducts, filters);
    expect(filteredProducts).toHaveLength(1);
    expect(filteredProducts[0]).toEqual(expect.objectContaining({ name: 'Wireless Headphones' }));
  });

  test('returns all products when no filters are applied', () => {
    const filters = {
      category: '',
      brand: '',
      priceRange: [0, 100],
      rating: 0,
    };

    const filteredProducts = filterProducts(mockProducts, filters);
    expect(filteredProducts).toHaveLength(mockProducts.length);
  });
});
