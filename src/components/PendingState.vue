<template>
  <div class="PendingState">

    <Time />

    <div class="PlayerInformation">
      <Instructions />
      <SinglePlayerCard :player="player" />
    </div>

    <div :style="{ backgroundColor: player.team === 'Werewolf' ? 'red' : 'white' }">
        <h3>{{ player.team }}</h3>
    </div>

  </div>
</template>

<script>
import Time from './Time'
import Instructions from './Instructions'
import SinglePlayerCard from './SinglePlayerCard'

export default {
  components: {
    Time,
    Instructions,
    SinglePlayerCard,
  },
  data() {
    return {
      player: {
          team: 'Werewolf',
          imgUrl: 'https://i.pinimg.com/236x/2b/8d/29/2b8d29c19ca209b35b14e91ef60e9100.jpg',
          name: 'pringo',
          role: 'popping',
          description: 'once you pop you can\'t stop'
      }
    }
  }

}
</script>

<style scoped>
  .PendingState {
      display: flex;
      align-items: center;
      /* flex-flow: column wrap; */
      flex-wrap: wrap;
  }
  .PendingState > * {
    flex: 1 100%;
  }
  .PlayerInformation {
    display: flex;
  }
  .Instructions {
    /* flex-grow: 3; */
    background: blue;
    flex-grow: 5;
    /* min-width: 75%; */
  }
  .SinglePlayerCard {
    flex-grow: 1;
  }
</style>
