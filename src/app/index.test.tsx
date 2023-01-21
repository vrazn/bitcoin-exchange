import { render, screen } from '@testing-library/react';
import Page from './page';

import '@testing-library/jest-dom';

describe('Page', () => {
  it('renders a Page', () => {
    render(<Page />);

    const heading = screen.getByTestId('page');

    expect(heading).toBeInTheDocument();
  });
});
