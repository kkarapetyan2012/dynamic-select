import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Filters from './Filters';
import '@testing-library/jest-dom';

// Mock function to handle filter updates
const mockSetFilters = jest.fn();

describe('Filters Component', () => {
  test('renders all filter options and updates filters on change', () => {
    render(<Filters filters={{ category: '', brand: '', priceRange: [0, 500], rating: 1 }} setFilters={mockSetFilters} />);

    // Check that filter options are rendered
    expect(screen.getByLabelText(/Category/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Brand/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Price Range/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Rating/i)).toBeInTheDocument();

    // Simulate changing the category filter
    fireEvent.change(screen.getByLabelText(/Category/i), { target: { value: 'Electronics' } });
    expect(mockSetFilters).toHaveBeenCalledWith(expect.objectContaining({ category: 'Electronics' }));

    // Simulate changing the rating filter
    fireEvent.change(screen.getByLabelText(/Rating/i), { target: { value: '4' } });
    expect(mockSetFilters).toHaveBeenCalledWith(expect.objectContaining({ rating: 4 }));
  });
});
