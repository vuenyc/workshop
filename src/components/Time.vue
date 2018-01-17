<template>
  <div class="Time">
    <p v-show="isNight">🌚</p>
    <p v-show="isDay">🌞</p>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: String,
      required: true
    }
  },
  computed: {
    isNight() {
      return this.time === 'night'
    },
    isDay() {
      return this.time === 'day'
    }
  }
}
</script>

<style scoped>
  p {
    font-size: 3em;
  }
</style>
