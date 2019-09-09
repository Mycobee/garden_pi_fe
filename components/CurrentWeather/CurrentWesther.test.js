import React from 'react';
import { CurrentWeather } from '.';
import 'react-native';
import renderer from 'react-test-renderer';


test('renders correctly', () => {
  const tree = renderer.create(<CurrentWeather />).toJSON();
  expect(tree).toMatchSnapshot();
});