import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

import roles from "./api/role";
import { WerewolfVote, DoctorVote, VillagersVote } from "./api/computerPlayer";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playerName: "ENTER YOUR NAME HERE",
    allPlayers: [],
    time: "night",
    instruction: ""
  },
  mutations: {
    addPlayer(state, player) {
      state.allPlayers.push(player);
    },
    saveCurrentPlayer(state, playerName) {
      state.playerName = playerName;
    },
    setRoles(state, roles) {
      state.allPlayers = state.allPlayers.map(player => {
        player.role = roles.pop();
        player.isAlive = true;
        return player;
      });
    },
    voteToKill(state, player) {
      state.allPlayers.forEach(p => {
        if (p.name === player.name) {
          p.killVoteCount = p.killVoteCount ? p.killVoteCount + 1 : 1;
        }
      });
    }
  },
  actions: {
    enterLobby({ commit }, playerName) {
      commit("addPlayer", {
        name: playerName,
        imgUrl:
          "https://www.ald.softbankrobotics.com/sites/aldebaran/files/images/en_savoir_plus_sur_nao_2.png"
      });
      commit("saveCurrentPlayer", playerName);
      router.push("lobby");
    },
    startGame({ state, commit, getters }) {
      commit("setRoles", roles);
      router.push(
        `game/${getters.currentPlayer.role === "Werewolf" ? "vote" : "wait"}`
      );
    },
    async nightVote({ state, commit, getters }, player) {
      commit("voteToKill", player);
      // computer vote
      getters.otherPlayers
        .filter(p => p.role === "Werewolf" && p.isAlive)
        .forEach(p => {
          const victim = await WerewolfVote(getters.otherPlayers)
          commit("voteToKill", victim);
        });

      const doctor = state.allPlayers.filter(
        p => p.role === "Villager Doctor"
      )[0];
      if (doctor.isAlive) {
        if(doctor.name === state.playerName) return;
        else {
          DoctorVote(getters.otherPlayers).then(p => 
            commit("voteToSave", p)
          )
        }
      }

      const victim = state.allPlayers.reduce((acc, cur) =>  {
        if(acc == null) {
          acc = cur;
        } else if(acc.killVoteCount < cur.killVoteCount) {
          return cur
        }
        return acc;
      }, null);



    },
    dayVote({ state, commit, getters }, player) {

    }
  },
  getters: {
    currentPlayer(state) {
      return state.allPlayers.filter(
        player => player.name === state.playerName
      )[0];
    },
    otherPlayers(state) {
      return state.allPlayers.filter(
        player => player.name !== state.playerName
      );
    }
  }
});
