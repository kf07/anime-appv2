import {reactive, watch} from "@vue/composition-api";
import axios from "axios";

export const useAnimeApi = () => {
  const state = reactive({
    year: '2019',
    loading: true,
    animes: []
  })

  watch(() => {
    axios
      .then(response => {
        state.animes = response.data
        state.loading = false
      })
  })
  return state
}
