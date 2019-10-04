import React from 'react';
import AddGarden from './index';
import 'react-native';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<AddGarden />).toJSON();
  expect(tree).toMatchSnapshot();
});