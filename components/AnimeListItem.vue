<template>
  <div>
    <div>{{ anime.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'AnimeListItem',
  props: ['anime']
}
</script>

<style scoped></style>
