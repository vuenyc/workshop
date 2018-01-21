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
    killPlayer(state, playerName) {
      state.allPlayers.forEach(player => {
        if(player.name === playerName) player.isAlive = false;
      })
    },
    annouceInstruction(state, instruction) {
      state.instruction = instruction;
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
    },
    flipTime(state) {
      state.time = state.time === "night" ? "day" : "night";
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
    async nightVote({ state, commit, getters, dispatch }, player) {
      commit("voteToKill", player);
      
      const werewolfs = getters.otherPlayers
        .filter(p => p.role === "Werewolf")
      
      const victim = await dispatch('WerewolfsVoteAction', werewolfs);

      const doctor = state.allPlayers.filter(
        p => p.role === "Villager Doctor"
      )[0];

      if (doctor) {
        if(doctor.name === state.playerName) return;
        else {
          const patient = await dispatch('DoctorVoteAction', getters.otherPlayers);
          if(patient.name !== victim.name) {
            commit("annouceInstruction", `Player ${victim.name} has been murdered.`)
            commit("killPlayer", victim.name);
          } else {
            commit("annouceInstruction", `Player ${victim.name} was saved by Doctor.`)
          }
          //seers goes here

          //evaluate 
          dispatch("EvaluateGame"); 
        }
      }
    },
    EvaluateGame({ state, commit, getters, dispatch }) {
      const playerLeft = state.allPlayers.filter(player => player.isAlive).reduce((acc, player) => {
        if(player.role === "Werewolf") {
          acc.werewolf++;
        } else {
          acc.villagers++;
        }
        return acc;
      }, {werewolf: 0, villagers: 0});
      if(playerLeft.werewolf == 0) {
        //game end;
        
      } else if(playerLeft.villagers && playerLeft.werewolf) {
        // game end 
      } else {
        // goes on;
        router.push("game/wait")
        commit("flipTime");
      }
    },
    async WerewolfsVoteAction({state, getters}, werewolf) {
      const villagers = getters.otherPlayers.filter(p => p.role !== "Werewolf");
      const promises = werewolf.map(wolf => WerewolfVote(villagers));
      const victims = await Promise.all(promises);
      const victimsNameCount = victims.reduce((acc, cur) => {
        if(acc[cur.name]) {
          acc[cur.name]++;
        } else {
          acc[cur.name] = 1; 
        }
        return acc;
      }, {});
      const result = Object.keys(victimsNameCount).reduce((acc, cur) => {
        if(victimsNameCount[cur] > acc.value) {
          acc.name = cur;
          acc.value = victimsNameCount[cur];
        }
        return acc;
      }, {name: null, value: null});
      return result;
    },
    async DoctorVoteAction(context, players) {
      return await DoctorVote(players) 
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
        player => player.name !== state.playerName && player.isAlive
      );
    }
  }
});
