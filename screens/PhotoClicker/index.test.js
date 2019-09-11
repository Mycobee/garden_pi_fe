import React from 'react';
import PhotoClicker from './index';
import 'react-native';
import renderer from 'react-test-renderer';

jest.mock("expo-camera", () => {
  return {}
});

jest.mock("expo-permissions", () => {
  return {}
});

test('renders correctly', () => {
  // const tree = renderer.create(<PhotoClicker />).toJSON();
  // expect(tree).toMatchSnapshot();
});