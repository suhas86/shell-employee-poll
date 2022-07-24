import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('should render correctly', () => {
    const view = render(<NavBar />);
    expect(view).toMatchSnapshot();
  });
  it('should have all the links', () => {
    render(<NavBar />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
    expect(screen.getByTestId('leaderboard')).toBeInTheDocument();
    expect(screen.getByTestId('new')).toBeInTheDocument();
  });
});
