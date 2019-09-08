import React from 'react';
import Data from './index';
import 'react-native';
import renderer from 'react-test-renderer';


test('renders correctly', () => {
  const tree = renderer.create(<Data />).toJSON();
  expect(tree).toMatchSnapshot();
});