import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import DisplayRockets from '../components/rocket/displayrockets/displayrockets';
import SingleRocket from '../components/rocket/singlerocket/singlerocket';
import Header from '../components/header/header';

describe('Test header component', () => {
  it('header renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it('Test Rocket renders correctly', () => {
  const item = {
    description: 'description',
    image: 'https://test.com',
    name: 'Rocket',
    id: 1,
    reserved: false,
  };
  const tree = renderer.create(
    <Provider store={store}>
      <DisplayRockets
        description={item.description}
        image={item.image}
        rocketName={item.name}
        id={item.id}
        reserved={item.reserved}
      />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('cdf', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <SingleRocket />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
