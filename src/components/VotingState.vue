<template>
  <div class="VotingState">
    <Time :time="time" />
    <AllPlayersGrid :players="otherPlayers" @select="select"/>
    <Instructions :instruction="instruction"/>
    <button v-if="selectedPlayer" @click="nightVote(selectedPlayer)">Vote</button>
  </div>
</template>

<script>
import Time from "./Time";
import Instructions from "./Instructions";
import SinglePlayerCard from "./SinglePlayerCard";
import { mapActions, mapState, mapGetters } from "vuex";
import AllPlayersGrid from "./AllPlayersGrid";

export default {
  components: {
    Time,
    Instructions,
    AllPlayersGrid
  },
  methods: {
    select(player) {
      this.selectedPlayer = player;
    }, 
    ...mapActions(["nightVote"])
  },
  data() {
    return {
      voteSubmitted: false,
      selectedPlayer: null
    };
  },
  computed: {
    ...mapState(["allPlayers", "time", "instruction"]),
    ...mapGetters(["currentPlayer", "otherPlayers"])
  }
};
</script>

<style scoped>
.VotingState {
  text-align: center;
}
.AllPlayersGrid {
  margin-bottom: 3vh;
}
button {
  margin: 0 auto;
  padding: 2vh 5vw;
  text-align: center;
  font-size: 2rem;
}
</style>
