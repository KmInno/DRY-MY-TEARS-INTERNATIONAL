import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the organization name', () => {
  render(<App />);
  const heading = screen.getByText(/Dry-My-Tears-International/i);
  expect(heading).toBeInTheDocument();
});
