import { screen } from '@testing-library/react';
import renderWithRedux from '../../utils/testing/renderWithRedux';
import NavBar from './NavBar';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

const user = {
  id: 'tylermcginnis',
  password: 'abc321',
  name: 'Tyler McGinnis',
  avatarURL: 'https://i.pravatar.cc/150?img=2',
  answers: {
    vthrdm985a262al8qx3do: 'optionOne',
    xj352vofupe1dqz9emx13r: 'optionTwo',
  },
  questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
};

describe('NavBar', () => {
  it('should render correctly', () => {
    const store = mockStore({
      authedUser: { user: user, error: null },
    });
    const view = renderWithRedux(<NavBar user={user} />, { store });
    expect(view).toMatchSnapshot();
  });
  it('should have all the links', () => {
    const store = mockStore({
      authedUser: { user: user, error: null },
    });
    renderWithRedux(<NavBar user={user} />, { store });
    expect(screen.getByTestId('home')).toBeInTheDocument();
    expect(screen.getByTestId('leaderboard')).toBeInTheDocument();
    expect(screen.getByTestId('new')).toBeInTheDocument();
  });
});
