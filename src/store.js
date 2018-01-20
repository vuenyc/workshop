import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client';
import { ENTER_LOBBY } from './api/gameEvents';

Vue.use(Vuex)

const socket = io('http://localhost');
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: {
    currentPlayer: {
      id: null,
      name: ''
    },
    currentView: 'PlayerEntry'
  },
  mutations: {

  },
  actions: {
    enterLobby() {
      socket.emit(ENTER_LOBBY, )
    }
  }
})
