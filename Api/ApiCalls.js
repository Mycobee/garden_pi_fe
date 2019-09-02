import { apiKey } from './ApiKey'

export const fetchWeather = () => {
  return fetch(`https://api.darksky.net/forecast/${apiKey}/39.751048,-104.996659`)
  .then(res => res.json())
  .then(res => res)
  .catch(error => error.message)
}