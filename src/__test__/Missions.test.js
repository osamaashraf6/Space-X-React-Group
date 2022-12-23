import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import MissionsPage from '../pages/mission';
import store from '../redux/configureStore';

describe('Missions tests', () => {
  test('should render', () => {
    const missions = render(
      <Provider store={store}>
        <BrowserRouter>
          <MissionsPage />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(missions).toMatchSnapshot();
  });
});
