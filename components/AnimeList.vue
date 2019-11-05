<template>
  <ul>
    <li v-for="item in state.animes" :key="item.id">
      <AnimeListItem :anime="item" />
    </li>
  </ul>
</template>

<script lang="ts">
import {
  createComponent,
  onMounted,
  reactive,
  ref,
  computed
} from '@vue/composition-api'
import axios from 'axios'
import AnimeListItem, { Anime } from '~/components/AnimeListItem.vue'

export type State = {
  animes: Anime[]
  favorite: number[]
}

export default createComponent({
  components: {
    AnimeListItem
  },
  name: 'AnimeList',
  setup() {
    const state: State = reactive({
      animes: [],
      favorite: []
    })
    const favoriteList = computed(() =>
      state.animes.filter(function(item) {
        console.log(item.id)
        // return item.id.indexOf(state.favorite) > 0
        return 0
      })
    )
    const getData = () => {
      axios
        .get(`http://api.moemoe.tokyo/anime/v1/master/2015`)
        .then(response => (state.animes = response.data))
    }
    const getFavorite = () => {
      state.favorite = [124, 127, 135, 142]
    }
    onMounted(() => {
      getData()
      getFavorite()
    })
    return {
      state,
      favoriteList
    }
  }
  // async asyncData({ $axios }: Context): Promise<AsyncData> {
  //   console.log(`aaa${$axios}`)
  //   const { data } = await $axios.get(
  //
  //   )
  //   console.log('eee')
  //   return { article: data }
  // }
})
</script>

<style scoped></style>
