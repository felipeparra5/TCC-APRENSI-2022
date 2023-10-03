import { api2 } from "../api2/api"

export const useGetData = () => {
  const getFilms = async () => {
    try {
      const response = await api2.get('/films')
      return response.data
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  const getQuest = async () => {
    try {
      const response = await api2.get('/characters')
      return response.data
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  const getSearchResult = async (query) => {
    try {
      const response = await api2.get(`search?query=${query}`)
      return response.data
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  return {
    getFilms,
    getQuest,
    getSearchResult,
  }
}
