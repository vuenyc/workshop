<template>
<div class="GameSession">
    <Time time="time" />
    <VotingState  v-if="isVoted" playerId="playerId" :numVotes="numVotes" @vote="vote" players="players" />
    <PendingState v-else players="players" />
    <button @click="timeChange">change time</button>
</div>
</template>

<script>
import PendingState from './PendingState'
import VotingState from './VotingState'
import Time from './Time'

export default {
    props: {
        //all the players
        players: {
            type: Array,
            required: true
        },
        //use to identify player
        playerId: {
            type: String, 
            required: true
        }
    },
    components: {
        PendingState,
        VotingState,
        Time
    },
    data() {
        //initali state
        return {
            time: "night",
            isVoted: true,
            numVotes: 0
        }
    },
    methods: {
        timeChange() {
            this.time = this.time === "night" ? "day" : "night" 
        },
        gameOver() {
            this.$emit("nextStep");
        },
        vote() {
            this.isVoted = !this.isVoted;
            numVotes += 1;
        }
    },
    //TODO: put there for now, so we can go to end game eventually
    mounted() {
        //start game here
        while() {

        } 
        this.gameOver(); 
    }
}
</script>

<style scoped>
    .GameSession {
        display: flex;
        flex-direction: column;
    }
</style>
