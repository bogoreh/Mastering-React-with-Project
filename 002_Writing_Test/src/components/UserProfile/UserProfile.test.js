import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserProfile from './UserProfile';

describe('UserProfile Component', () => {
  const mockUser = {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user'
  };

  const mockOnUpdate = jest.fn();

  beforeEach(() => {
    mockOnUpdate.mockClear();
  });

  test('renders user profile with correct information', () => {
    render(<UserProfile user={mockUser} onUpdate={mockOnUpdate} />);
    
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
    expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/user/i)).toBeInTheDocument();
  });

  test('enters edit mode when edit button is clicked', () => {
    render(<UserProfile user={mockUser} onUpdate={mockOnUpdate} />);
    
    const editButton = screen.getByText(/edit/i);
    fireEvent.click(editButton);
    
    expect(screen.getByDisplayValue(/john doe/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/john@example.com/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/user/i)).toBeInTheDocument();
  });

  test('saves changes when save button is clicked', () => {
    render(<UserProfile user={mockUser} onUpdate={mockOnUpdate} />);
    
    // Enter edit mode
    fireEvent.click(screen.getByText(/edit/i));
    
    // Change the name
    const nameInput = screen.getByDisplayValue(/john doe/i);
    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    
    // Save changes
    fireEvent.click(screen.getByText(/save/i));
    
    expect(mockOnUpdate).toHaveBeenCalledWith({
      name: 'Jane Doe',
      email: 'john@example.com',
      role: 'user'
    });
    
    // Verify we're back in view mode
    expect(screen.getByText(/jane doe/i)).toBeInTheDocument();
  });

  test('cancels edits when cancel button is clicked', () => {
    render(<UserProfile user={mockUser} onUpdate={mockOnUpdate} />);
    
    // Enter edit mode
    fireEvent.click(screen.getByText(/edit/i));
    
    // Change the name
    const nameInput = screen.getByDisplayValue(/john doe/i);
    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    
    // Cancel edits
    fireEvent.click(screen.getByText(/cancel/i));
    
    // Verify original values are still there
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
    expect(mockOnUpdate).not.toHaveBeenCalled();
  });
});