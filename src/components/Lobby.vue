<template>
  <div class="Lobby">

    <div class="room-info">
      <h1>Game Lobby</h1>
      <p>{{ playersLeft }} more players needed to begin game</p>
    </div>

    <AllPlayersGrid :players="allPlayers" />

    <button :disabled="playersLeft !== 0" @click="startGame">start game</button>

  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AllPlayersGrid from './AllPlayersGrid'
import players from "../api/players";

export default {
  components: {
    AllPlayersGrid
  },
  // props: ['players', 'thisPlayer'],
  methods: {
    ...mapActions(["startGame"])
  },
  computed: {
    ...mapState(["allPlayers"]),
    playersLeft() {
      return 7 - this.allPlayers.length;
    }
  },
  mounted() {
    while (this.playersLeft !== 0) {
        const { name, imgUrl } = players.pop();
        this.$store.commit("addPlayer", { name, imgUrl });
    }
  }
};
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
  .waiting-players,
  button {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  h1,
  p {
    flex: 1;
    text-align: center;
  }

  @media screen and (min-width: 800px) {
    button {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    h1, p {
      flex: 1;
      text-align: center;
    }
    button {
      margin: 0 auto;
      padding: 2vh 5vw;
      text-align: center;
      font-size: 2rem;
    }
  }
}
</style>
