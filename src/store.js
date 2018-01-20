import Vue from 'vue'
import Vuex from 'vuex'
import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPlayer: {
      name: 'ENTER YOUR NAME HERE',
    },
    allPlayers:[
      {
        name: 'John',
      },
      {
        name: 'Alex',
      },
      {
        name: 'Bruno',
      },
      {
        name: 'Tessa',
      },
      {
        name: 'Justin',
      },
      {
        name: 'Ringo',
      }
    ]
  },
  mutations: {
    addPlayer(state, playerName) {
      state.allPlayers.push({name: playerName});
    }, 
    saveCurrentPlayer(state, playerName) {
      state.currentPlayer.name = playerName;
    }
  },
  actions: {
    enterLobby({commit}, playerName) {
      commit("addPlayer", playerName);
      commit("saveCurrentPlayer", playerName);
    }, 
    startGame() {
      router.push({ name: 'GameSession' });
    }
  }
})
