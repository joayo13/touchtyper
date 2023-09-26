import { render, screen } from '@testing-library/react';
import App from './App';

test('renders touch typer h1', () => {
  render(<App />);
  const h1Element = screen.getByText(/touch typer/i);
  expect(h1Element).toBeInTheDocument();
});
