<template>
  <li class="list-item">
    <div class="title">
      <a :href="anime.public_url" target="_blank" rel="noopener">{{
        anime.title
      }}</a>
    </div>
    <div>
      <a
        :href="`https://twitter.com/${anime.twitter_account}`"
        class="twitter-link"
        target="_blank"
        rel="noopener"
        ><font-awesome-icon :icon="['fab', 'twitter']" />{{
          anime.twitter_account
        }}</a
      >
    </div>
  </li>
</template>

<script>
export default {
  name: 'AnimeListItem',
  props: ['anime']
}
</script>

<style scoped lang="scss">
.list-item {
  border: 1px solid #222;
  padding: 10px;
  list-style: none;
  .title {
    margin-bottom: 10px;
  }
}
.twitter-link {
  color: #1da1f2;
  font-size: 15px;
}
</style>
