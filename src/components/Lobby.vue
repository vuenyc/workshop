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
      //TODO: go to next stage by client side, i think we need service side logic here. 
      setTimeout(() => {
        this.$emit('nextStep');
      }, 3000);
    }
  }
}
</script>

<style scoped>

</style>

