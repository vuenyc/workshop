import PlayerEntry from './components/PlayerEntry.vue'
import Lobby from './components/Lobby.vue'
import PendingState from './components/PendingState.vue'
import VotingState from './components/VotingState.vue'
import EndGame from './components/EndGame.vue'

export const routes = [
  {
    path: '/',
    name: 'PlayerEntry',
    component: PlayerEntry,
    props: true
  }, {
    path: '/lobby',
    name: 'Lobby',
    component: Lobby,
    props: true
  }, {
    path: '/game/wait',
    name: 'PendingState',
    component: PendingState,
    props: true
  }, {
    path: '/game/vote',
    name: 'VotingState',
    component: VotingState,
    props: true
  }, {
    path: '/game/over',
    name: 'EndGame',
    component: EndGame,
    props: true
  }
]
