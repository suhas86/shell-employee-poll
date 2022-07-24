import { screen, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Login from './Login';
import { store } from '../index';
import { handleLogin } from '../actions/authedUser';
import renderWithRedux from '../utils/testing/renderWithRedux';

const mockStore = configureStore([thunk]);

describe('Login Page', () => {
  it('renders without crashing', () => {
    renderWithRedux(<Login />, { store });
    expect(
      screen.getByText('Enter your login id and password')
    ).toBeInTheDocument();
  });

  it('Should show error if login id and password are empty', () => {
    renderWithRedux(<Login />, { store });
    const submitButton = screen.getByTestId('login');
    fireEvent.click(submitButton);
    expect(
      screen.getByText('Please enter an email and password.')
    ).toBeInTheDocument();
  });

  it('Should show error if login id is empty', () => {
    renderWithRedux(<Login />, { store });
    const passwordField = screen.getByTestId('password');
    fireEvent.change(passwordField, { target: { value: 'password' } });
    const submitButton = screen.getByTestId('login');
    fireEvent.click(submitButton);
    expect(
      screen.getByText('Please enter an email and password.')
    ).toBeInTheDocument();
  });
  it('Should show error if password is empty', () => {
    renderWithRedux(<Login />, { store });
    const loginField = screen.getByTestId('userId');
    fireEvent.change(loginField, { target: { value: 'login' } });

    const submitButton = screen.getByTestId('login');
    fireEvent.click(submitButton);
    expect(
      screen.getByText('Please enter an email and password.')
    ).toBeInTheDocument();
  });
  it('Should show error if login id and password are wrong', async () => {
    // TODO: fix this test
    const store = mockStore({
      authedUser: { user: null, error: 'Incorrect username or password' },
    });
    store.dispatch(await handleLogin({ userId: 'test', password: 'test' }));
    renderWithRedux(<Login />, { store });
    expect(screen.getByTestId('error-message')).toBeInTheDocument();
  });
});
