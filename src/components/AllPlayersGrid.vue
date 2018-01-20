<template>
  <div class="AllPlayersGrid">
    <SinglePlayerCard @clicked="clicked" v-for="(player, idx) in players" :key="idx" :player="player" :selected="selectedPlayer && selectedPlayer.name == player.name"/>
  </div>
</template>


<script>
import SinglePlayerCard from './SinglePlayerCard'

export default {
  components: {
    SinglePlayerCard
  },
  data() {
    return {
      selectedPlayer: null
    }
  },
  methods: {
    clicked(player) {
      this.selectedPlayer = player;
      this.$emit("select", player);
    }
  },
  props: {
    players: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 800px) {
  .AllPlayersGrid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .SinglePlayerCard {
    flex: 1;
    text-align: center;
    margin-bottom: 3vh;
  }
}
</style>
