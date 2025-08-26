import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  test('renders card with title and content', () => {
    render(
      <Card title="Test Card">
        <p>Card content</p>
      </Card>
    );
    
    const titleElement = screen.getByText(/test card/i);
    const contentElement = screen.getByText(/card content/i);
    
    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('card-header');
  });

  test('renders card without title', () => {
    render(
      <Card>
        <p>Card content without title</p>
      </Card>
    );
    
    const contentElement = screen.getByText(/card content without title/i);
    const headers = screen.queryAllByRole('heading');
    
    expect(contentElement).toBeInTheDocument();
    expect(headers).toHaveLength(0);
  });

  test('renders card with footer', () => {
    render(
      <Card footer={<button>Action</button>}>
        <p>Card content with footer</p>
      </Card>
    );
    
    const footerElement = screen.getByText(/action/i);
    const contentElement = screen.getByText(/card content with footer/i);
    
    expect(footerElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(footerElement).toBeInstanceOf(HTMLButtonElement);
  });
});