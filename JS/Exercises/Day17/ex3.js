const players = [
    { id: 1, name: "DragonSlayer", scores: [120, 85, 200, 95], level: 8, badge: "gold" },
    { id: 2, name: "NightWolf", scores: [60, 75, 50], level: 5, badge: null },
    { id: 3, name: "StarQueen", scores: [300, 250, 180, 90, 120], level: 12, badge: "diamond" },
    { id: 4, name: "IronFist", scores: [40, 30], level: 2, badge: null },
    { id: 5, name: "ShadowBlade", scores: [150, 200, 175], level: 9, badge: "silver" },
];

const getTotalScore = (player) => player.scores.reduce((total, score) => total + score, 0);

const getRanking = (players) => [...players].sort((a, b) => getTotalScore(b) - getTotalScore(a)).map((player, idx) => ({
    rank: idx + 1,
    name: player.name,
    totalScore: getTotalScore(player),
    badge: player.badge || "none"
}))

const getTopPlayers = (players, n) => getRanking(players).slice(0, n);

const formatPlayerCard = (player) => {
    const badgeDisplay = {
        diamond: "💎 Diamond",
        gold: "🥇 Gold",
        silver: "🥈 Silver"
    }
    return `${player.name} | Lv.${player.level} | ${getTotalScore(player)} điểm ${player.badge ? "| " + badgeDisplay[player.badge].toUpperCase() : ""}`;
}

console.log(getRanking(players));
console.log(getTopPlayers(players, 3));
console.log(formatPlayerCard(players[2]));