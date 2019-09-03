import { ApiKey } from './ApiKey'

export const fetchWeather = () => {
  return fetch(`https://api.darksky.net/forecast/${ApiKey}/39.73915,-104.9847`)
  .then(res => res.json())
  .then(res => res)
  .catch(error => error.message)
}

export const fetchGarden = () => {
  return fetch('https://garden-pi-backend.herokuapp.com/api/v1/gardens/1')
  .then(res => res.json())
  .then(res => res)
  .catch(error => error.message)
}