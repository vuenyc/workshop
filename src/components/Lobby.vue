<template>
  <div class="Lobby">
    <!-- <PlayerList/> -->
    <h1>Waiting for {{ playersLeft }} players to start</h1>
    <button :disabled="currentPlayer.ready" @click="ready">Start</button>
    <ul>
      <li v-for="player in players" :key="player.name">
        {{ player.name }} -- Ready? {{ player.ready }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['players', 'currentPlayer'],
  data() {
    return {
      playersLeft: 7 
    }
  },
  methods: {
    ready() {
      this.playersLeft--;
      this.currentPlayer.ready = true;
    }
  }
}
</script>

<style scoped>

</style>

