<template>
  <div class="Lobby">

    <div class="room-info">
      <h1>Game Lobby</h1>
      <p>{{ playersLeft }} more players needed to begin game</p>
    </div>

    <div class="waiting-players">
      <SinglePlayerCard v-for="(player, idx) in allPlayers" :key="idx" :player="player" />
    </div>

    <button :disabled="playersLeft" @click="startGame">start game</button>

  </div>
</template>

<script>
import SinglePlayerCard from './SinglePlayerCard'
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    SinglePlayerCard,
  },
  // props: ['players', 'thisPlayer'],
  methods: {
    ...mapActions(['startGame'])
  },
  computed: {
    ...mapState(['allPlayers']),
    playersLeft() {
      return 7 - this.allPlayers.length
    }
  }
}
</script>

<style scoped>
  .SinglePlayerCard {
    flex-basis: 100%;
    padding: 3vw;
  }
  .room-info {
    margin-bottom: 5vh;
  }

  @media screen and (min-width: 800px) {
    .waiting-players, button {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    h1, p {
      flex: 1;
      text-align: center;
    }
    .SinglePlayerCard {
      flex: 2.5;
    }
    button {
      margin: 0 auto;
      padding: 2vh 5vw;
      text-align: center;
      font-size: 2rem;
    }
  }
</style>

