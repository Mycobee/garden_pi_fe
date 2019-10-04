import { fetchWeather, fetchGarden, fetchGardenEnv, triggerWaterJob, fetchGraphData, fetchPhotos } from './ApiCalls';
import React from 'react';
import {API_KEY} from 'react-native-dotenv'


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

      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      })
    })
    it('should be able to return the weather given a url', () => {
      const expected = `https://api.darksky.net/forecast/${API_KEY}/39.73915,-104.9847`

      fetchWeather()
      expect(global.fetch).toHaveBeenCalledWith(expected)
    });

    it('should return parsed response if ok', async () => {
      await expect(fetchWeather()).resolves.toEqual(mockResponse)
    });

    it('should return an error response', async () => {
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error fetching weather')
      });
      await expect(global.fetch()).rejects.toEqual('Error fetching weather');;
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

      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      })
    })

    it('should be able to return the garden given a url', () => {
      const expected = 'https://garden-pi-be.herokuapp.com/api/v1/gardens/1'

      const userKey = 1234567

      const options = {
        method: 'GET',
        body: JSON.stringify(),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': userKey
        }
      };

      fetchGarden(userKey)
      expect(global.fetch).toHaveBeenCalledWith(expected, options)
    })

    it('should return parsed response if ok', async () => {
      await expect(fetchGarden()).resolves.toEqual(mockResponse)
    });

    it('should return an error response', async () => {
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error fetching garden')
      });
      await expect(global.fetch()).rejects.toEqual('Error fetching garden');;
    })
  })
  describe('fetchGardenEnv', () => {
    let mockResponse;

    beforeEach(() => {
      mockResponse = {
        data: [
          {
            attributes: {
              created_at: "2019-09-03T14:19:19.907Z",
              soil_moisture: 85.33,
              soil_temperature: 55.52,
            },
            id: "1",
            type: "env_measurement",
          },
        ],
      }

      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
         ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      })
    })

    it('should be able to return the garden env with a given url', () => {
      const expected = 'http://garden-pi-be.herokuapp.com/api/v1/gardens/1/env_measurements'

      const userKey = 1234567

      const options = {
        method: 'GET',
        body: JSON.stringify(),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': userKey
        }
      };

      fetchGardenEnv(userKey)
      expect(global.fetch).toHaveBeenCalledWith(expected, options)
    })

    it('should return parsed response if ok', async () => {
      await expect(fetchGardenEnv()).resolves.toEqual(mockResponse)
    });

    it('should return an error response', async () => {
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error fetching garden environment')
      });
      await expect(global.fetch()).rejects.toEqual('Error fetching garden environment');;
    })
  })
  describe('post water job', () => {
    let mockResponse;

    beforeEach(() => {
      mockResponse = {
        id: "130",
        type: "job",
        attributes: {
            id: 130,
            name: "relay",
            created_at: "2019-09-10T02:36:29.277Z"
        }
      }
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve()
        });
      });
    });

    it('should be able to post a job to a garden env', () => {
      const url = 'https://garden-pi-be.herokuapp.com/api/v1/gardens/1/jobs?name=relay'

      const options = {
        method: 'POST',
        body: JSON.stringify(),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      };

      triggerWaterJob();
      expect(global.fetch).toHaveBeenCalledWith(url, options);
    })

    it('should return job was created if response is okay', async () => {
      await expect(triggerWaterJob()).resolves.toEqual(mockResponse.data);
    })

    it('should return an error response', async () => {
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error posting job')
      });
      await expect(global.fetch()).rejects.toEqual('Error posting job');;
    })
  })

  describe('fetchGraphData', () => {
    let mockResponse;
    let mockLength;

    beforeEach(() => {
      mockLength = 3
      mockResponse = {
        data: {
          attributes: {
              "2019-09-11 00:00:00 +0000": "90.9397070281125",
              "2019-09-11 00:00:00 +0000": "90.9397070281125"
          }
        }
      }

      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    })

    it('should be able to return a set of averages based on the input length', () => {
      const expected = `http://garden-pi-be.herokuapp.com/api/v1/gardens/1/daily_avg_moisture?days=${mockLength}`

      fetchGraphData(mockLength)
      expect(global.fetch).toHaveBeenCalledWith(expected)
    })

    it('should return parsed response if ok', async () => {
      await expect(fetchGraphData(mockLength)).resolves.toEqual(mockResponse)
    });

    it('should return an error response', async () => {
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error fetching averages')
      });
      await expect(global.fetch()).rejects.toEqual('Error fetching averages');;
    })
  })

  describe('fetchPhotos', () => {
    let mockResponse;

    beforeEach(() => {
      mockResponse =
        'https://garden-pi-pictures.s3-us-west-2.amazonaws.com/brian'

        global.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse)
          });
        });
    })

    it('should return a url to the most recently posted picture', () => {
      const expected = 'https://garden-pi-pictures.s3-us-west-2.amazonaws.com/brian'

      fetchPhotos()
      expect(global.fetch).toHaveBeenCalledWith(expected)
    })

    it('should return an error response', async () => {
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error fetching photo')
      });
      await expect(global.fetch()).rejects.toEqual('Error fetching photo');;
    })
  })
})