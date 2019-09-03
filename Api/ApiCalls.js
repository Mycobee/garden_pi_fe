import { ApiKey } from './ApiKey'

export const fetchCurrentWeather = () => {
  return fetch(`https://api.darksky.net/forecast/${ApiKey}/39.73915,-104.9847`)
  .then(res => res.json())
  .then(res => res)
  .catch(error => error.message)
}