<template>
  <div class="Lobby">

    <div class="room-info">
      <h1>Game Lobby</h1>
      <p>{{ playersLeft }} more players needed to begin game</p>
    </div>

    <div class="waiting-players">
      <SinglePlayerCard v-for="(player, idx) in allPlayers" :key="idx" :player="player" />
    </div>

    <button :disabled="playersLeft !== 0" @click="startGame">start game</button>

  </div>
</template>

<script>
import SinglePlayerCard from "./SinglePlayerCard";
import { mapActions, mapState } from "vuex";
import players from "../api/players";

export default {
  components: {
    SinglePlayerCard
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
      console.log(this.playersLeft);
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
