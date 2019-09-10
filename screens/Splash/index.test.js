import React from 'react';
import Splash from './index';
import 'react-native';
import renderer from 'react-test-renderer';
import * as constants from '../../Api/ApiCalls'


test('renders correctly', () => {
  const tree = renderer.create(<Splash />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('getWeather should fetch current weather', async () => {
  constants.fetchWeather = jest.fn()
  constants.fetchWeather()
  expect(constants.fetchWeather).toHaveBeenCalled()
})

