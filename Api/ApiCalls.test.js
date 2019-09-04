import { fetchWeather, fetchGarden } from './ApiCalls';
import React from 'react';
import { ApiKey } from './ApiKey'

describe('apiCalls', () => {
  describe('fetchWeather', () => {
    let mockResponse;

    beforeEach(() => {
      mockResponse = {
        foreCast: {
          apparentTemperature: 97.86,
          cloudCover: 0.21,
          dewPoint: 18.35,
          humidity: 0.06,
          icon: "partly-cloudy-day",
          nearestStormBearing: 240,
          nearestStormDistance: 4,
          ozone: 282.3,
          precipIntensity: 0,
          precipProbability: 0,
          pressure: 1011.12,
          summary: "Partly Cloudy",
          temperature: 97.86,
          time: 1567455462,
          uvIndex: 7,
          visibility: 3.936,
          windBearing: 146,
          windGust: 11.76,
          windSpeed: 5.15,
        }
      }

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      })
    })
    it('should be able to return the weather given a url', () => {
      const expected = `https://api.darksky.net/forecast/${ApiKey}/39.73915,-104.9847`

      fetchWeather()
      expect(window.fetch).toHaveBeenCalledWith(expected)
    });

    it('should return parsed response if ok', async () => {
      await expect(fetchWeather()).resolves.toEqual(mockResponse)
    });

    it('should return an error response', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error fetching weather')
      });
      await expect(window.fetch()).rejects.toEqual('Error fetching weather');;
    })
  })
  describe('fetchGarden', () => {
    let mockResponse;

    beforeEach(() => {
      mockResponse = {
        data: {
          attributes: {
            id: 1,
            latitude: 42.3601,
            longitude: -71.0589,
            name: "Backyard Raised Bed",
          },
          id: "1",
          type: "garden",
        },
      }

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      })
    })

    it('should be able to return the garden given a url', () => {
      const expected = 'https://garden-pi-be.herokuapp.com/api/v1/gardens/1'

      fetchGarden()
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('should return parsed response if ok', async () => {
      await expect(fetchGarden()).resolves.toEqual(mockResponse)
    });

    it('should return an error response', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error fetching garden')
      });
      await expect(window.fetch()).rejects.toEqual('Error fetching garden');;
    })
  })
})