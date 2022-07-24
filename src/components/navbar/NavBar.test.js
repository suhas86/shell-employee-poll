import { screen } from '@testing-library/react';
import renderWithRouter from '../../utils/testing/renderWithRouter';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('should render correctly', () => {
    const view = renderWithRouter(<NavBar />);
    expect(view).toMatchSnapshot();
  });
  it('should have all the links', () => {
    renderWithRouter(<NavBar />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
    expect(screen.getByTestId('leaderboard')).toBeInTheDocument();
    expect(screen.getByTestId('new')).toBeInTheDocument();
  });
});
