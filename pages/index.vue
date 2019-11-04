<template>
  <div>
    <AnimeList />
  </div>
</template>

<script lang="ts">
import { createComponent, onMounted } from '@vue/composition-api'
import { Context } from '@nuxt/types'
import AnimeList from '~/components/AnimeList.vue'

interface AsyncData {
  article: {
    createdAt: string
    title: string
    author: string
    body: string
  }
}
export default createComponent({
  async asyncData({ $axios }: Context): Promise<AsyncData> {
    const { data } = await $axios.get(
      `http://api.moemoe.tokyo/anime/v1/master/2015/2`
    )
    return { article: data }
  },
  mounted() {
    console.log(this.article)
  },
  components: {
    AnimeList
  },
  setup() {
    onMounted(() => {
      console.log('テスト')
    })
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
