import axios from 'axios'

export const api2 = axios.create({
  baseURL: 'https://sevencoders-starwars-wiki.herokuapp.com',
})