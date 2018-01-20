<template>
<div class="GameSession">
    <Time time=":time" />
    <VotingState  v-if="isVoted" playerId="playerId" :numVotes="numVotes" @vote="vote" players="players" />
    <PendingState v-else players="players" />
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
    computed: {
        numWerewolves: () => this.players.filter(player => player.role === "werewolf").length,
        numVillagers: () => this.players.filter(player => player.role === "villager").length
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
        kills(id) {

        },
        vote() {
            this.isVoted = !this.isVoted;
            numVotes += 1;
        },
        round() {
            if(this.time === "night") {
                //werewolf do stuff here
            } else {
                //villiager do stuff here
            }
            // game is still going
            if(this.numVillagers > this.numWerewolves && this.numWerewolves > 0) {
                this.time = this.time === "night" ? "day" : "night";
            } else {
                this.gameOver();
            }
        }
    },
    //TODO: put there for now, so we can go to end game eventually
    mounted() {
        //start game here
       this.round();
    }
}
</script>

<style scoped>
    .GameSession {
        display: flex;
        flex-direction: column;
    }
</style>
