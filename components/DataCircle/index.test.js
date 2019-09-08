import React from 'react';
import { DataCircle } from './index';
import 'react-native';
import renderer from 'react-test-renderer';


test('renders correctly', () => {
  const tree = renderer.create(<DataCircle />).toJSON();
  expect(tree).toMatchSnapshot();
});