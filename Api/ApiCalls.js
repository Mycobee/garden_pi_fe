// import { ApiKey } from './ApiKey'
import {API_KEY} from 'react-native-dotenv'
// ApiClient.init(API_KEY)

export const fetchWeather = () => {
  return fetch(`https://api.darksky.net/forecast/${API_KEY}/39.73915,-104.9847`)
  .then(res => res.json())
  .then(res => res)
  .catch(error => error.message)
}

export const fetchGarden = () => {
  return fetch('https://garden-pi-be.herokuapp.com/api/v1/gardens/1')
  .then(res => res.json())
  .then(res => res)
  .catch(error => error.message)
}

export const fetchGardenEnv = () => {
  return fetch('http://garden-pi-be.herokuapp.com/api/v1/gardens/1/env_measurements')
  .then(res => res.json())
  .then(res => res)
  .catch(error => error.message)
}

export const triggerWaterJob = () => {
  return fetch('https://garden-pi-be.herokuapp.com/api/v1/gardens/1/jobs?name=relay', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(res => res.json())
  .catch(error => console.log(error.message))
}

export const fetchGraphData = (length) => {
  return fetch(`http://garden-pi-be.herokuapp.com/api/v1/gardens/1/daily_avg_moisture?days=${length}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error.message)
}

export const fetchPhotos = () => {
  return fetch('https://garden-pi-pictures.s3-us-west-2.amazonaws.com/brian')
    .then(res => res.url)
    .catch(error => error.message)
}
