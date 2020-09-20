<template>
  <div>
    <ul>
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
