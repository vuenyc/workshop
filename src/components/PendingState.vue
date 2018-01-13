<template>
  <div class="PendingState">

    <Time />

    <div class="PlayerInformation">
      <Instructions />
      <SinglePlayerCard :player="player" />
    </div>

    <div class="Team" :style="{ backgroundColor: player.team === 'Werewolf' ? 'red' : 'white' }">
        <h3>{{ player.team }}</h3>
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
  data() {
    return {
      player: {
        team: "Werewolf",
        imgUrl:
          "https://i.pinimg.com/236x/2b/8d/29/2b8d29c19ca209b35b14e91ef60e9100.jpg",
        name: "pringo",
        role: "popping",
        description: "once you pop you can't stop"
      }
    };
  }
};
</script>

<style scoped>
.PendingState {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.PendingState > * {
  flex: 1 100%;
}
.PlayerInformation {
  display: flex;
  flex-wrap: row wrap;
}
.Instructions {
  background: blue;

  flex: 3 500px;
  /* min-width: 75%; */
}
.SinglePlayerCard {
  background: red;
  flex: 1 100px;
}
.Time {
    align-self: center;
}
.Team {
    text-align: center;
}

</style>
