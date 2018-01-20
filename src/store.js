import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

import roles from "./api/role";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playerName: "ENTER YOUR NAME HERE",
    allPlayers: [],
    time: "night"
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
        return player;
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
      router.push("lobby")
    },
    startGame({ state, commit, getters }) {
      commit("setRoles", roles);
      router.push(
        `game/${getters.currentPlayer.role === "Werewolf" ? "vote" : "wait"}`
      );
    },
    round() {}
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
