<template>
  <div>
    <ul class="anime-list">
      <AnimeListItem v-for="anime in animes" :key="anime.id" :anime="anime" />
    </ul>
  </div>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'
import AnimeListItem from '~/components/AnimeListItem'
export default {
  name: 'AnimeList',
  components: {
    AnimeListItem
  },
  props: ['animes'],
  setup(anime) {
    return { anime }
  }
}
</script>

<style>
.anime-list {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 2fr));
}
</style>
