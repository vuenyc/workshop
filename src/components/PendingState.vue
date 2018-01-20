<template>
  <div class="PendingState">

    <Time :time="time" />

    <div class="player-info">
      <Instructions />
      <SinglePlayerCard :player="currentPlayer" class="col _25" />
    </div>

    <div class="team" :style="{ backgroundColor: player.team === 'Werewolf' ? 'red' : 'white' }">
        <h3>{{ player.team | toUpperCase }}</h3>
    </div>
    <!--TODO: leave for now for debug-->
    <!-- <button v-on:click="">go next</button>   -->
  </div>
</template>

<script>
import Time from "./Time";
import Instructions from "./Instructions";
import SinglePlayerCard from "./SinglePlayerCard";
import { mapActions, mapState, mapGetters } from "vuex";


export default {
  components: {
    Time,
    Instructions,
    SinglePlayerCard
  },
  methods: {
    ...mapActions([""])
  },
  computed: {
    ...mapState(["allPlayers", "time"]),
    ...mapGetters(["currentPlayer"])
  },
  data() {
    return {
      time: 'day',
      player: {
        team: "Werewolf",
        imgUrl:
          "https://i.pinimg.com/236x/2b/8d/29/2b8d29c19ca209b35b14e91ef60e9100.jpg",
        name: "pringo",
        role: "popping",
        description: "once you pop you can't stop"
      }
    }
  }
}
</script>

<style scoped>
/* columns */
.Instructions, .SinglePlayerCard, h3 {
  flex-basis: 100%;
  padding: 0 3vw;
}

@media screen and (min-width: 800px) {
  /* rows */
  .Time, .player-info, .team {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  /* columns */
  .Instructions {
    background: blue;
    flex: 3;
  }
  .SinglePlayerCard, h3 {
    flex: 1;
  }


  /* other styles */
  .Instructions {
    font-size: 2em;
  }
  h3 {
    text-align: center;
  }
}
</style>
