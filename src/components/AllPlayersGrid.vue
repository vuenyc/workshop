<template>
  <div class="AllPlayersGrid">
    <SinglePlayerCard v-for="(player, idx) in players" :key="idx" :player="player" />
  </div>
</template>


<script>
import SinglePlayerCard from './SinglePlayerCard'

export default {
  components: {
    SinglePlayerCard
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
