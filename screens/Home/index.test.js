import React from 'react';
import Home from './index';
import 'react-native';
import renderer from 'react-test-renderer';
import {weatherIcon} from '../../utilities'

describe('Home', () => {
  let wrapper;
  let mockCurrentWeather;
  let mockEnvData;
  let mockMostRecentEnvDatum;
  let mockNavigation;

  beforeEach(() => {
    mockCurrentWeather = {
      apparentTemperature: 80.95,
      cloudCover: 0.71,
      dewPoint: 57.04,
      humidity: 0.44,
      icon: "partly-cloudy-day",
      nearestStormBearing: 354,
      nearestStormDistance: 9,
      ozone: 281.6,
      precipIntensity: 0,
      precipProbability: 0,
      pressure: 1018.66,
      summary: "Mostly Cloudy",
      temperature: 80.85,
      time: 1567794548,
      uvIndex: 6,
      visibility: 7.295,
      windBearing: 136,
      windGust: 12.4,
      windSpeed: 5.28,
    }
    mockEnvData = {
      attributes: {
        created_at: "2019-09-03T14:19:19.907Z",
        soil_moisture: 85.33,
        soil_temperature: 55.52,
      },
      id: "1",
      type: "env_measurement",
    };
    mockMostRecentEnvDatum = {
      attributes: {
        created_at: "2019-09-03T16:04:19.964Z",
        soil_moisture: 68.86,
        soil_temperature: 69.33,
      },
      id: "8",
      type: "env_measurement",
    }
    mockNavigation = {
      getParam: jest.fn()
    }
  });

    it('renders correctly', () => {
      // expect(renderer.create(<Home curentWeather={mockCurrentWeather} envData={mockEnvData} mostRecentEnvDatum={mockMostRecentEnvDatum}navigation={mockNavigation} />)).toMatchSnapshot();
    });
});



