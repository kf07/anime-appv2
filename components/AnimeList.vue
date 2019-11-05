<template>
  <ul>
    <li v-for="item in state.animes" :key="item.id">
      <AnimeListItem :anime="item" />
    </li>
  </ul>
</template>

<script lang="ts">
import { createComponent, onMounted, reactive, ref } from '@vue/composition-api'
import axios from 'axios'
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
    const list: any = ref()
    const getData = () => {
      axios
        .get(`http://api.moemoe.tokyo/anime/v1/master/2015/2`)
        .then(response => (state.animes = response.data))
    }
    onMounted(() => {
      getData()
    })
    return {
      state,
      list
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
