import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Adjust the path if necessary
import SecondProject from './SecondProject'; // Import the SecondProject component

describe('App Component', () => {
  test('renders SecondProject component', () => {
    render(<App />);

    // Check if SecondProject is rendered by looking for specific text
    const firstLine = screen.getByText(/this is my second project i am doing it/i);
    const secondLine = screen.getByText(/i am doing devops assignment/i);
    const thirdLine = screen.getByText(/i am adding the third line for workflow/i);

    expect(firstLine).toBeInTheDocument();
    expect(secondLine).toBeInTheDocument();
    expect(thirdLine).toBeInTheDocument();
  });
});
