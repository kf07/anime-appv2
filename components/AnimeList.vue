<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <AnimeListItem :anime="item" />
    </li>
  </ul>
</template>

<script lang="ts">
import { createComponent, onMounted, reactive, ref } from '@vue/composition-api'
import { Context } from '@nuxt/types'
import axios from 'axios'
import AnimeListItem, { Anime } from '~/components/AnimeListItem.vue'

export type State = {
  animes: Anime[]
}

interface AsyncData {
  article: {
    createdAt: string
    title: string
    author: string
    body: string
  }
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
        .then(response => (list.value = response.data))
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
