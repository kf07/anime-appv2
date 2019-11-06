<template>
  <div>
    <ul>
      <AnimeListItem v-for="anime in animes" :key="anime.id" :anime="anime" />
    </ul>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
import AnimeListItem from '~/components/AnimeListItem'
export default {
  name: 'AnimeList',
  props: ['animes'],
  components: {
    AnimeListItem
  },
  setup(anime) {
    return { anime }
  }
}
</script>
