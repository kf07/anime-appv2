<template>
  <div>{{ anime.title }}</div>
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
