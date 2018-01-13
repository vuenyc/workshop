<template>
  <div class="Results">
    <h1>{{ player.team }} won!</h1>

    <template v-for="(player, idx) in allPlayers">
      <SinglePlayerCard :player="player" :key="idx" />
    </template>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
