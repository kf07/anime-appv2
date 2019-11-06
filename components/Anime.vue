<template>
  <div class="app">
    <YearSelect :year="state.year" />
  </div>
</template>

<script>
import { useAnimeApi } from '../hooks/anime-api'
import YearSelect from './YearSelect'
export default {
  name: 'Anime',
  components: { YearSelect },
  setup() {
    const state = useAnimeApi()

    return {
      state
    }
  }
}
</script>

<style scoped></style>
