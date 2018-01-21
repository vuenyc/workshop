//if werewolf vote to kill villiagers

export function WerewolfVote(players) {
  const villager = players.filter(p => p.role !== "Werewolf");
  const index = Math.round(Math.random() * (villager.length - 1));
  const result =
    villager.filter(p => p.killVoteCount > 0)[0] || villager[index];

  return new Promise(resolve => {
    setTimeout(() => resolve(result), 1000);
  });
}

export function VillagersVote(votingPlayer, players) {
  //simplifing if sear, will vote for werewolf 100%
  const candidatefilter =
    votingPlayer.role === "Werewolf"
      ? p => p.role !== "Werewolf"
      : votingPlayer.role === "Villager Seer"
        ? p => p.role === "Werewolf"
        : p => true;

  const targets = players.filter(candidatefilter);
  const index = Math.round(Math.random() * (targets.length - 1));
  const result = target[index];

  return new Promise(resolve => {
    setTimeout(() => resolve(result), 1000);
  });
}

export function DoctorVote(players) {
  const index = Math.round(Math.random() * (players.length - 1));
  const result = players[index];

  return new Promise(resolve => {
    setTimeout(() => resolve(result), 1000);
  });
}

//if human vote to kill whoever
