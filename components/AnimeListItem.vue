<template>
  <div>
    <div>{{ anime.title }}</div>
    <div>
      <a
        :href="`https://twitter.com/${anime.twitter_account}`"
        target="_blank"
        rel="noopener"
      >
        {{ anime.twitter_account }}</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import {
  createComponent,
  onMounted,
  reactive,
  PropType
} from '@vue/composition-api'
export type Anime = {
  id: number
  title: string
}
export default createComponent({
  props: {
    anime: Object as PropType<Anime>
  },
  setup() {}
})
</script>

<style scoped></style>
