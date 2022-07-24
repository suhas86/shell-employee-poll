import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

const renderWithRouter = (ui) => {
  render(<MemoryRouter>{ui}</MemoryRouter>);
};

export default renderWithRouter;
