import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('has correct class for primary variant', () => {
    render(<Button variant="primary">Primary Button</Button>);
    const buttonElement = screen.getByText(/primary button/i);
    expect(buttonElement).toHaveClass('btn-primary');
  });

  test('has correct class for secondary variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const buttonElement = screen.getByText(/secondary button/i);
    expect(buttonElement).toHaveClass('btn-secondary');
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    const buttonElement = screen.getByText(/disabled button/i);
    expect(buttonElement).toBeDisabled();
  });
});