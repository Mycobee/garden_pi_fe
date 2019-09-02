import { apiKey } from './ApiKey'

export const fetchWeather = () => {
  return fetch('https://api.darksky.net/forecast/c3b27e2f72d0496c26da9270019b8ea8/39.751048,-104.996659')
  .then(res => res.json())
  // .then(res => console.log(res))
  .catch(error => error.message)
}