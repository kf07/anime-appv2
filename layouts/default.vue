<template>
  <div class="app-wrapper">
    <TheHeader :title="'アニメリスト'" class="header" />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
export default {
  components: { TheHeader }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

ul {
  padding: 0;
}
select {
  font-size: 16px;
}
.header {
  margin-bottom: 10px;
}
.app-wrapper {
  padding: 10px;
}
</style>
