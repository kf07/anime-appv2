<template>
  <ul>
    <li v-for="item in state.animes" :key="item.id">
      <AnimeListItem :anime="item" />
    </li>
  </ul>
</template>

<script lang="ts">
import { createComponent, onMounted, reactive, ref } from '@vue/composition-api'
import AnimeListItem, { Anime } from '~/components/AnimeListItem.vue'

export type State = {
  animes: Anime[]
}
export default createComponent({
  components: {
    AnimeListItem
  },
  name: 'AnimeList',
  setup() {
    const state: State = reactive({
      animes: []
    })
    state.animes = [
      {
        id: 1,
        title: 'アニメ１'
      },
      {
        id: 2,
        title: 'アニメ２'
      }
    ]
    return {
      state
    }
  }
})
</script>

<style scoped></style>
