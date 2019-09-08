import React from 'react';
import { WeatherBox } from './index';
import 'react-native';
import renderer from 'react-test-renderer';


test('renders correctly', () => {
  const tree = renderer.create(<WeatherBox />).toJSON();
  expect(tree).toMatchSnapshot();
});