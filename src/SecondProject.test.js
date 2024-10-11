import React from 'react';
import { render, screen } from '@testing-library/react';
import SecondProject from './SecondProject'; // Adjust the path if necessary

describe('SecondProject Component', () => {
  test('renders the component with correct text', () => {
    render(<SecondProject />);

    // Check if the text is present in the document
    const firstLine = screen.getByText(/this is my second project i am doing it/i);
    const secondLine = screen.getByText(/i am doing devops assignment/i);
    const thirdLine = screen.getByText(/i am adding the third line for workflow/i);

    expect(firstLine).toBenotInTheDocument()
    expect(secondLine).toBeInTheDocument();
    expect(thirdLine).toBeInTheDocument();
  });
});
