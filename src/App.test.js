import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import App from './App';

describe('App', function () {
  const mockStore = configureStore()
  const data = {
    items: [], error: false, loading: true
  }
  const store = mockStore({
    usersData: data,
    postsData: data
  })

  test('renders App', () => {
    render(<Provider store={store}>
      <App />
    </Provider>);
    const navElement = screen.getByText(/Users-Posts/i);
    expect(navElement).toBeInTheDocument();
  });
})
