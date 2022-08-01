import { fireEvent, screen } from '@testing-library/react';
import renderWithRedux from '../utils/testing/renderWithRedux';
import { store } from '../index';
import New from './New';

describe('New Page', () => {
  it('renders without crashing', () => {
    const view = renderWithRedux(<New />, { store });

    expect(view).toMatchSnapshot();
  });
  it('Should not allow to post question if any one option is empty', () => {
    renderWithRedux(<New />, { store });
    const optionOne = screen.getByTestId('optionOne');
    fireEvent.change(optionOne, { target: { value: 'optionOne' } });
    const submitButton = screen.getByTestId('submit');
    expect(submitButton).toBeDisabled();
  });

  it('Should allow to post question if both options are filled', () => {
    renderWithRedux(<New />, { store });
    const optionOne = screen.getByTestId('optionOne');
    fireEvent.change(optionOne, { target: { value: 'optionOne' } });
    const optionTwo = screen.getByTestId('optionTwo');
    fireEvent.change(optionTwo, { target: { value: 'optionTwo' } });
    const submitButton = screen.getByTestId('submit');
    expect(submitButton).not.toBeDisabled();
  });
});
