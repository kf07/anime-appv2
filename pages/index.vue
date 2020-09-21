<template>
  <div>
    <!--    <AnimeList />-->
    <Anime />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'
import AnimeList from '~/components/AnimeList.vue'
import Anime from '~/components/Anime.vue'

export default defineComponent({
  components: {
    AnimeList,
    Anime
  }
})
</script>

<style></style>
