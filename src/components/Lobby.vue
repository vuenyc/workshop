<template>
  <div class="Lobby">
    <!-- <PlayerList/> -->
    <h1>Waiting for {{ playersLeft }} players to start</h1>
    <button :disabled="thisPlayer.ready" @click="ready">Start</button>
    <ul>
      <li v-for="player in players" :key="player.name">
        {{ player.name }} -- Ready? {{ player.ready }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['players', 'thisPlayer'],
  data() {
    return {
      playersLeft: 7
    }
  },
  methods: {
    ready() {
      this.playersLeft--;
      this.thisPlayer.ready = true;
    }
  }
}
</script>

<style scoped>

</style>

