import { reactive, watch } from '@nuxtjs/composition-api'
import axios from 'axios'

export const useAnimeApi = () => {
  const state = reactive({
    year: '2017',
    season: '1',
    loading: true,
    animes: []
  })

  const getData = () => {
    axios
      .get(
        `http://api.moemoe.tokyo/anime/v1/master/${state.year}/${state.season}`
      )
      .then(response => {
        state.animes = response.data
        state.loading = false
      })
  }

  watch(() => {
    getData()
  })
  return state
}
