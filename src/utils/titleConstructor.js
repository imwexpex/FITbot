const newsTitlesEmojies = [
    "‼️",
    "⚡️",
    "💥",
    "⭐️",
    "🔥"
];
const newsTitlesFirst = [
    "Любі",
    "Дорогі",
    "Шановні",
    "Вельмишановні"
];
const newsTitlesSecond = [
    "Друзі",
    "Товариші",
    "Колеги",
    "Одногрупники"
];

export const randomizeTitle = newsTitlesEmojies[Math.floor(Math.random() * newsTitlesEmojies.length)] + " "
    + newsTitlesFirst[Math.floor(Math.random() * newsTitlesFirst.length)] + " "
    + newsTitlesSecond[Math.floor(Math.random() * newsTitlesSecond.length)];
