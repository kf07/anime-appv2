<template>
  <div class="app">
    <YearSelect :year="state.year" @refine="handleChange" />
    <AnimeList :animes="state.animes" />
  </div>
</template>

<script>
import { useAnimeApi } from '../hooks/anime-api'
import YearSelect from './YearSelect'
import AnimeList from '~/components/AnimeList'
export default {
  name: 'Anime',
  components: { AnimeList, YearSelect },
  setup() {
    const state = useAnimeApi()

    const handleChange = year => {
      state.year = year
      state.loading = true
    }
    return {
      state,
      handleChange
    }
  }
}
</script>

<style scoped></style>
