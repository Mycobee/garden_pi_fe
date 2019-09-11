import React from 'react';
import Data from './index';
import 'react-native';
import renderer from 'react-test-renderer';

jest.mock("expo-camera", () => {
  return {}
});

test('renders correctly', () => {
  // const tree = renderer.create(<Data />).toJSON();
  // expect(tree).toMatchSnapshot();
});

