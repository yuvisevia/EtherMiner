// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EtherMiner title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EtherMiner/i);
    expect(titleElement).toBeInTheDocument();
});
