<template>
  <div class="VotingState">
    <Time :time="time" />
    <AllPlayersGrid :players="otherPlayers" />
    <button v-if="selectedPlayer" @click="vote">Vote</button>
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
    vote() {
      this.$emit("vote");
    }
  },
  data() {
    return {
      voteSubmitted: false,
      selectedPlayer: true
    };
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
