import Vue from 'vue';
import VueRouter from 'vue-router';

import PlayerEntry from './components/PlayerEntry.vue';
import Lobby from './components/Lobby.vue';
import PendingState from './components/PendingState.vue';
import VotingState from './components/VotingState.vue';
import EndGame from './components/EndGame.vue';
import GameSession from './components/GameSession.vue';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'PlayerEntry',
    component: PlayerEntry,
    props: true
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: Lobby,
    props: true
  },
  {
    path: '/game',
    name: 'Game',
    component: GameSession,
    children: [
      {
        path: '/wait',
        name: 'PendingState',
        component: PendingState,
        props: true
      },
      {
        path: '/vote',
        name: 'VotingState',
        component: VotingState,
        props: true
      }
    ]
  },
  {
    path: '/game/over',
    name: 'EndGame',
    component: EndGame,
    props: true
  }
];

export default new VueRouter({
  routes
});
