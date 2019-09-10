import React from 'react';
import Home from './index';
import 'react-native';
import renderer from 'react-test-renderer';

jest.mock('react-native-gesture-handler', () => {});

test('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});