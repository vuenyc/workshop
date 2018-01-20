import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

import roles from './api/role'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPlayer: {
      name: 'ENTER YOUR NAME HERE',
    },
    allPlayers:[
    ]
  },
  mutations: {
    addPlayer(state, player) {
      state.allPlayers.push(player);
    }, 
    saveCurrentPlayer(state, playerName) {
      state.currentPlayer.name = playerName;
    }, 
    setRoles(state, roles) {
      state.allPlayers = state.allPlayers.map(player => {
        player.role = roles.pop(); 
        return player;
      })
    } 
  },
  actions: {
    enterLobby({commit}, playerName) {
      commit("addPlayer", {
        name: playerName, 
        imgUrl: "https://www.ald.softbankrobotics.com/sites/aldebaran/files/images/en_savoir_plus_sur_nao_2.png"
      });
      commit("saveCurrentPlayer", playerName);
    },
    startGame({state, commit}) {
      commit("setRoles", roles)
      router.push('game');
    }
  }
})
