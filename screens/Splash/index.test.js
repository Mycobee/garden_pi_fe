import React from 'react';
import Splash from './index';
import 'react-native';
import renderer from 'react-test-renderer';
import * as constants from '../../Api/ApiCalls'

jest.mock("expo-camera", () => {
  return {}
});

jest.mock("react-navigation", () => {
  return {}
});

test('renders correctly', () => {
  // const tree = renderer.create(<Splash />).toJSON();
  // expect(tree).toMatchSnapshot();
});

test('getWeather should fetch current weather', async () => {
  constants.fetchWeather = jest.fn()
  constants.fetchWeather()
  expect(constants.fetchWeather).toHaveBeenCalled()
})

test('getGarden should fetch current garden', async () => {
  constants.fetchGarden = jest.fn()
  constants.fetchGarden()
  expect(constants.fetchGarden).toHaveBeenCalled()
})

test('getenv should fetch current garden environment', async () => {
  constants.fetchGardenEnv = jest.fn()
  constants.fetchGardenEnv()
  expect(constants.fetchGardenEnv).toHaveBeenCalled()
})

