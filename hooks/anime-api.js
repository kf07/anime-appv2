import { reactive, watch } from '@vue/composition-api'
import axios from 'axios'

export const useAnimeApi = () => {
  const state = reactive({
    year: '2017',
    loading: true,
    animes: []
  })

  const getData = () => {
    axios
      .get(`http://api.moemoe.tokyo/anime/v1/master/${state.year}`)
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
