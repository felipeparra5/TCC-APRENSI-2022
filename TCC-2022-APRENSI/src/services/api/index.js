import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8000',
})

//baseURL: 'http://localhost:3000',
//  baseURL: 'https://sevencoders-starwars-wiki.herokuapp.com',