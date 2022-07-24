import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

const renderWithRedux = (ui, { store, ...otherOpts }) => {
  render(<Provider store={store}>{ui}</Provider>);
};

export default renderWithRedux;
// import { render } from '@testing-library/react';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import reducer from '../../reducers';

// export const renderWithRedux = (
//   ui,
//   { initialState, ...renderOptions } = {}
// ) => {
//   const store = createStore(reducer, initialState);
//   const Wrapper = ({ children }) => (
//     <Provider store={store}>{children}</Provider>
//   );

//   return render(ui, { wrapper: Wrapper, ...renderOptions });
// };
// export default renderWithRedux;
