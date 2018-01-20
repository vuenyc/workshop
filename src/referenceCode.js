const preGameState = {
  sessionId: 'pig', // optional
  numPlayers: 7, // until 7,
  thisPlayerId: 1,
  allPlayers: [
    {
      id: 1,
      name: 'pringo'
    }
  ],
  gameStartable: numPlayers === 7, // will be flipped by button
}

const duringGameState = {
  sessionId: 'pig', // optional

  numVillagers: 5,
  numWerewolves: 2,

  thisPlayerId: 1,
  allPlayers: [
    {
      id: 1,
      role: 'doctor',
      name: 'pringo',
      avatar: 'imgUrl',
      isAlive: true,
      killVotes: 4,
    },
  ],

  time: 'night',
  werewolfVictim: 1, // id
  doctorPatient: 1,
  seersPick: 1,

  countVotes() {
      const victim = allPlayers.reduce((currentPlayer, nextPlayer) => {
                          if(currentPlayer.killVotes > nextPlayer.killVotes) return currentPlayer
                          else if(currentPlayer.killVotes < nextPlayer.killVotes) return { count: 1, ...nextPlayer }
                          else ++currentPlayer.count
                        }, { id: null, killVotes: 0, count: 0})
      return victim.count === 1 ? victim.id : null;
  },

  vote(playerid) {
    this.player.voted = true;
    // this.allPlayers.map(player => {
    //   if()
    // })
  }

}



// In-game start logic
const players = {
  werewolves: 2,
  doctor: 1,
  seer: 1,
  villagers: 5 // or more
}

let time = 'night'

let numVillagers = players.villagers.length + 2,
  numWerewolves = 2

while (numVillagers > numWerewolves && numWerewolves > 0) {
  if (night) {
    let isSaved = false

    announce('Werewolves, open your eyes')
    announce('Werewolves (silently) pick someone to kill')

    werewolvesKill(victim)

    announce('Werewolves, close your eyes')
    announce('Doctor, open your eyes')
    announce('Doctor, who would you like to heal?')

    doctorSaves(patient)

    announce('Doctor, close your eyes')
    if (patient === victim) isSaved = true

    announce('Seer, open your eyes')
    announce('Seer, pick someone to ask about')

    seerInvestigates(villager)

    werewolves.contains(villager) ?
      notifySeer(true) :
      notifySeer(false)

    announce('Everybody open your eyes; It\'s daytime')

    if (isSaved) {
      announce('Someone has been saved')
      isSaved = false
    } else {
      announce(`${ victim.name } has been killed!`)
        --numVillagers
    }

    time = 'day'
  }

  if (day) {
    let votingTimeLeft = 1200;

    const voteTimer = setInterval(() => {
      if (votingTimeLeft > 0) --votingTimeLeft
      else clearInterval(voteTimer)
    }, 100)

    announce('It is daytime; Everyone open your eyes')
    announce('Introduce yourselves and decide on who to kill')

    while (!majorityDecision && !everyoneVoted && votingTimeLeft) {
      playersVote(villager)
    }

    werewolves.contains(villager) ?
      --numWerewolves :
      --numVillagers

    time = 'night'
  }
}

numWerewolves === numVillagers ?
  announce('Werewolves have won') :
  announce('Villagers have won')
