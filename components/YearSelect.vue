<template>
  <form>
    <select v-model="animeYear">
      <option value="2017">2017</option>
      <option value="2018">2018</option>
      <option value="2019">2019</option>
    </select>
  </form>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  name: 'YearSelect',
  props: ['year'],
  setup({ year }, { emit }) {
    const animeYear = ref(year)
    return {
      animeYear
    }
  }
}
</script>

<style scoped></style>
