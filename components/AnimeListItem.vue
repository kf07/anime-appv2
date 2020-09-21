<template>
  <li class="list-item">
    <div>
      <a :href="anime.public_url" target="_blank" rel="noopener">{{
        anime.title
      }}</a>
    </div>
    <div>
      <a :href="`https://twitter.com/${anime.twitter_account}`">{{
        anime.twitter_account
      }}</a>
    </div>
  </li>
</template>

<script>
export default {
  name: 'AnimeListItem',
  props: ['anime']
}
</script>

<style scoped>
.list-item {
  border: 1px solid #222;
  padding: 10px;
  list-style: none;
}
</style>
