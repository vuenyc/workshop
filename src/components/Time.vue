<template>
  <div class="Time">
    {{time}}
    <p v-if="isNight">🌚</p>
    <p v-else>🌞</p>
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
    }
  }
}
</script>

<style scoped>
.Time {
  font-size: 2em;
}
</style>
