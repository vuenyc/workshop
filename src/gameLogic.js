const players = {
      werewolves: 2,
      doctor: 1,
      seer: 1,
      villagers: 5  // or more
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
    
        werewolves.contains(villager)
          ? notifySeer(true)
          : notifySeer(false)
    
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
    
        while(!majorityDecision && !everyoneVoted && votingTimeLeft) {
          playersVote(villager)
        }
    
        werewolves.contains(villager)
          ? --numWerewolves
          : --numVillagers
    
        time = 'night'
      }
    }
    
    numWerewolves === numVillagers
      ? announce('Werewolves have won')
      : announce ('Villagers have won')
  }
