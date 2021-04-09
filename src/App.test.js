import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const navElement = screen.getByText(/Users-Posts/i);
  expect(navElement).toBeInTheDocument();
});
