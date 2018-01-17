<template>
  <div class="Results">
    <h1>{{ winningTeam }} won!</h1>

    <h3>Here's who everyone was:</h3>
    <PlayerProfile v-for="(player, idx) in otherPlayers" :player="player" :key="idx" />
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
