import React from 'react';
import PhotoPicker from './index';
import 'react-native';
import renderer from 'react-test-renderer';

jest.mock("expo-camera", () => {
  return {}
});

jest.mock("expo-image-picker", () => {
  return {}
});

jest.mock("expo-constants", () => {
  return {}
});

test('renders correctly', () => {
  const tree = renderer.create(<PhotoPicker />).toJSON();
  expect(tree).toMatchSnapshot();
});