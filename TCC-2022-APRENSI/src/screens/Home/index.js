import React, { useEffect, useState } from 'react'
import {
  ScreenScrollContainer,
  Container,
  HomeList,
  Hero,
  Loader,
} from '~/components'
import { useGetData } from '~/services/hooks'

export const Home = () => {
  const { getFilms, getQuest } = useGetData()
  const [loading, setLoading] = useState(true)
  const [films, setFilms] = useState([])
  const [Quest, setQuest] = useState([])

  const callGetData = async () => {
    const filmsResponse = await getFilms()
    const QuestResponse = await getQuest()

    if (!filmsResponse.error && !QuestResponse.error) {
      setFilms(filmsResponse)
      setQuest(QuestResponse)
      setLoading(false)
    }
  }

  useEffect(() => {
    callGetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <Container align="center" justify="center">
        <Loader />
      </Container>
    )
  }

  return (
    <ScreenScrollContainer>
      <Hero
        item={{
          ...films[0],
          type: 'Aula',
        }}
      />
      <HomeList title="Video Aulas" data={films} type="Video Aulas" />
    </ScreenScrollContainer>
  )
}
