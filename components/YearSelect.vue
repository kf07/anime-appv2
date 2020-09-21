<template>
  <form>
    <select v-model="animeYear">
      <option value="2015">2015</option>
      <option value="2016">2016</option>
      <option value="2017">2017</option>
      <option value="2018">2018</option>
      <option value="2019">2019</option>
      <option value="2020">2020</option>
    </select>
  </form>
</template>

<script>
import { ref, watchEffect } from '@nuxtjs/composition-api'
export default {
  name: 'YearSelect',
  props: ['year'],
  setup({ year }, { emit }) {
    const animeYear = ref(year)

    watchEffect(() => {
      emit('refine', animeYear.value)
    })
    return {
      animeYear
    }
  }
}
</script>

<style scoped></style>
