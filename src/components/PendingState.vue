<template>
  <div class="Voting">
    <Time/>
    <Instructions/>
    <!-- shown when not voting -->
    <SinglePlayerCard/>
    <!-- shown when voting -->
    <div>
        <h3>{{ player.team }}</h3>        
    </div>
  </div>
</template>

<script>
import Time from './components/Time'
import Instructions from './components/Instructions'
import SinglePlayerCard from './components/SinglePlayerCard'

export default {


}
</script>

<style>

</style>
