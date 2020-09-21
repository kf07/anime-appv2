<template>
  <form>
    <select v-model="animeSeason">
      <option value="2">春</option>
      <option value="3">夏</option>
      <option value="4">秋</option>
      <option value="1">冬</option>
    </select>
  </form>
</template>

<script>
import { ref, watchEffect } from '@nuxtjs/composition-api'
export default {
  name: 'SeasonSelect',
  props: ['season'],
  setup({ season }, { emit }) {
    const animeSeason = ref(season)

    watchEffect(() => {
      emit('refine', animeSeason.value)
    })
    return {
      animeSeason
    }
  }
}
</script>

<style scoped></style>
