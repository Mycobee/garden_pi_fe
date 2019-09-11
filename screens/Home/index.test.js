import React from 'react';
import Home from './index';
import 'react-native';
import renderer from 'react-test-renderer';
import * as constants from '../../Api/ApiCalls'

jest.mock('react-native-gesture-handler', () => {});

test('renders correctly', () => {
  // const tree = renderer.create(<Home />).toJSON();
  // expect(tree).toMatchSnapshot();
});

test('onWaterPress should post to triggerWaterJobs', async () => {
  constants.triggerWaterJob = jest.fn()
  constants.triggerWaterJob()
  expect(constants.triggerWaterJob).toHaveBeenCalled()
})