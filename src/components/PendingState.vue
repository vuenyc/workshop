<template>
  <div class="PendingState">

    <Time :time="time" />

    <div class="row">
      <Instructions class="col _5" />
      <SinglePlayerCard :player="player" class="col _5" />
    </div>

    <div class="Team row" :style="{ backgroundColor: player.team === 'Werewolf' ? 'red' : 'white' }">
        <h3>{{ player.team | allCaps }}</h3>
    </div>

  </div>
</template>

<script>
import Time from "./Time";
import Instructions from "./Instructions";
import SinglePlayerCard from "./SinglePlayerCard";

export default {
  components: {
    Time,
    Instructions,
    SinglePlayerCard
  },
  // TODO: re-import props
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
/* .Time, .Instructions, .SinglePlayerCard, .Team {
  flex-basis: 100%;
}
@media screen and (min-width: 800px) {
  .player-card {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .Time, .Instructions, .SinglePlayerCard, .Team {
    flex: 1;
  }
  .Time {
  }
  .Instructions {
    background: blue;
    flex: 3;
  }
  .SinglePlayerCard {
    background: green;
    flex: 1;
  }
  .Team {
      text-align: center;
  }
} */
</style>
