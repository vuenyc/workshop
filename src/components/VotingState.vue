<template>
  <div class="VotingState">
    <Time :time="time" />
    <AllPlayersGrid :players="otherPlayers" @select="select"/>
    <button v-if="selectedPlayer" @click="vote(selectedPlayer)">Vote</button>
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
  Data() {
    return {
      selectedPlayer: null
    }
  },
  methods: {
    select(player) {
      this.selectedPlayer = player;
    }, 
    ...mapActions(["vote"])
  },
  data() {
    return {
      voteSubmitted: false,
      selectedPlayer: true
    };
  },
  method: {
    ...mapActions(["vote"])
  },
  computed: {
    ...mapState(["allPlayers", "time"]),
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
