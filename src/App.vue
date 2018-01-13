<template>
  <div>
    <PlayerEntry/>
    <single-player-card />
  </div>
</template>

<script>
import PlayerEntry from "./components/PlayerEntry";
import SinglePlayerCard from "./components/SinglePlayerCard";

export default {
  components: {
    PlayerEntry,
    SinglePlayerCard
  }
};
</script>
