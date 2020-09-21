<template>
  <div class="app">
    <div class="select-box">
      <YearSelect :year="state.year" class="year-select" @refine="yearChange" />
      <SeasonSelect
        :season="state.season"
        class="season-select"
        @refine="seasonChange"
      />
    </div>
    <AnimeList :animes="state.animes" />
  </div>
</template>

<script>
import { useAnimeApi } from '../hooks/anime-api'
import YearSelect from './YearSelect'
import SeasonSelect from './SeasonSelect'
import AnimeList from '~/components/AnimeList'
export default {
  name: 'Anime',
  components: { SeasonSelect, AnimeList, YearSelect },
  setup() {
    const state = useAnimeApi()

    const yearChange = year => {
      state.year = year
      state.loading = true
    }

    const seasonChange = season => {
      state.season = season
      state.loading = true
    }

    return {
      state,
      yearChange,
      seasonChange
    }
  }
}
</script>

<style scoped>
.select-box {
  display: flex;
  margin-bottom: 15px;
}
.year-select {
  margin-right: 10px;
}
</style>
